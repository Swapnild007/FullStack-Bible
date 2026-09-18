/* FullStack Bible mobile coding terminal. Browser sandbox only. */
(function () {
  "use strict";

  var sessions = {};
  var STORAGE = "fsb-terminal-sessions-v4";

  function escapeText(value) {
    return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function getSaved() {
    try { return JSON.parse(localStorage.getItem(STORAGE) || "{}"); }
    catch (e) { return {}; }
  }

  function save() {
    try { localStorage.setItem(STORAGE, JSON.stringify(sessions)); }
    catch (e) {}
  }

  function injectStyle() {
    if (document.getElementById("fsb-terminal-style")) return;
    var style = document.createElement("style");
    style.id = "fsb-terminal-style";
    style.textContent =
      ".fsb-terminal{margin-top:12px;border:1px solid #2d2d33;border-radius:18px;overflow:hidden;background:#101014;color:#f5f5f7;box-shadow:0 14px 35px rgba(0,0,0,.12);font-family:-apple-system,BlinkMacSystemFont,'SF Pro Display','Helvetica Neue',Arial,sans-serif}" +
      ".fsb-terminal-head{display:flex;justify-content:space-between;padding:11px 13px;background:#1b1b20;border-bottom:1px solid #303037;font-size:11px}" +
      ".fsb-terminal-head span{color:#8e8e93;font-weight:700}" +
      ".fsb-terminal-files{display:flex;gap:6px;overflow:auto;padding:9px 10px;border-bottom:1px solid #303037;background:#17171b}" +
      ".fsb-terminal-file,.fsb-terminal-shortcuts button,.fsb-terminal-line button{border:0;border-radius:9px;padding:7px 10px;background:#2c2c32;color:#fff;font:700 10px -apple-system,BlinkMacSystemFont,sans-serif;white-space:nowrap}" +
      ".fsb-terminal-file.active{background:#fff;color:#111}" +
      ".fsb-terminal-output{margin:0;padding:13px;min-height:130px;max-height:240px;overflow:auto;white-space:pre-wrap;word-break:break-word;background:#101014;color:#e9e9ed;font:500 11px/1.65 ui-monospace,SFMono-Regular,Menlo,monospace}" +
      ".fsb-terminal-line{display:flex;gap:8px;align-items:center;padding:9px 10px;border-top:1px solid #303037}" +
      ".fsb-terminal-line b{color:#34c759;font:700 12px ui-monospace,monospace}" +
      ".fsb-terminal-line input{min-width:0;flex:1;border:0;outline:0;background:transparent;color:#fff;font:500 12px ui-monospace,monospace}" +
      ".fsb-terminal-shortcuts{display:flex;gap:6px;overflow:auto;padding:0 10px 10px}";
    document.head.appendChild(style);
  }

  function getSession(id, seed) {
    if (!sessions[id]) {
      var saved = getSaved()[id];
      sessions[id] = saved || {
        cwd: "/project",
        activeFile: "index.html",
        files: { "index.html": seed || "<!doctype html>\n<html><body><h1>FullStack Bible</h1></body></html>" },
        history: []
      };
    }
    if (!sessions[id].files) sessions[id].files = {};
    return sessions[id];
  }

  function findRoot(id) {
    var list = document.querySelectorAll("[data-fsb-terminal]");
    var i;
    for (i = 0; i < list.length; i++) {
      if (list[i].getAttribute("data-fsb-terminal") === id) return list[i];
    }
    return null;
  }

  function getEditor(host) {
    var shell = host && host.closest(".workspace-shell");
    return shell ? shell.querySelector(".lab-code,.code") : null;
  }

  function output(id, value, kind) {
    var el = document.getElementById(id + "-output");
    if (!el) return;
    var line = document.createElement("div");
    line.textContent = value;
    if (kind === "ok") line.style.color = "#34c759";
    if (kind === "err") line.style.color = "#ff6b63";
    if (kind === "muted") line.style.color = "#8e8e93";
    el.appendChild(line);
    el.scrollTop = el.scrollHeight;
  }

  function clearOutput(id) {
    var el = document.getElementById(id + "-output");
    if (el) el.textContent = "";
  }

  function syncEditor(id) {
    var root = findRoot(id);
    var editor = getEditor(root);
    var s = sessions[id];
    if (editor && s) s.files[s.activeFile || "index.html"] = editor.value;
  }

  function refreshFiles(id) {
    var root = findRoot(id);
    var bar = document.getElementById(id + "-files");
    var s = sessions[id];
    if (!root || !bar || !s) return;
    bar.textContent = "";
    Object.keys(s.files).forEach(function (name) {
      var button = document.createElement("button");
      button.type = "button";
      button.className = "fsb-terminal-file" + (name === s.activeFile ? " active" : "");
      button.textContent = name;
      button.onclick = function () { openFile(id, name); };
      bar.appendChild(button);
    });
  }

  function openFile(id, name) {
    var root = findRoot(id);
    var editor = getEditor(root);
    var s = sessions[id];
    if (!s || !editor || !Object.prototype.hasOwnProperty.call(s.files, name)) return;
    syncEditor(id);
    s.activeFile = name;
    editor.value = s.files[name];
    refreshFiles(id);
    save();
    output(id, "Opened " + name, "muted");
  }

  function markup(id) {
    return '<div class="fsb-terminal">' +
      '<div class="fsb-terminal-head"><strong>Terminal</strong><span>Browser sandbox</span></div>' +
      '<div class="fsb-terminal-files" id="' + id + '-files"></div>' +
      '<pre class="fsb-terminal-output" id="' + id + '-output"></pre>' +
      '<div class="fsb-terminal-line"><b>$</b><input id="' + id + '-input" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="help"><button type="button" data-fsb-run="' + id + '">Run</button></div>' +
      '<div class="fsb-terminal-shortcuts">' +
      '<button type="button" data-fsb-cmd="' + id + '" data-command="help">help</button>' +
      '<button type="button" data-fsb-cmd="' + id + '" data-command="ls">ls</button>' +
      '<button type="button" data-fsb-cmd="' + id + '" data-command="pwd">pwd</button>' +
      '<button type="button" data-fsb-cmd="' + id + '" data-command="cat index.html">cat</button>' +
      '<button type="button" data-fsb-cmd="' + id + '" data-command="run">run</button>' +
      '</div></div>';
  }

  function mount(host) {
    if (!host || host.getAttribute("data-fsb-mounted") === "1") return;
    host.setAttribute("data-fsb-mounted", "1");
    injectStyle();

    var id = host.getAttribute("data-terminal-host") || "terminal-" + Date.now();
    host.setAttribute("data-fsb-terminal", id);

    var editor = getEditor(host);
    var seed = editor ? editor.value : "";
    var s = getSession(id, seed);

    if (!s.files["index.html"] && seed) s.files["index.html"] = seed;
    if (!s.activeFile) s.activeFile = Object.keys(s.files)[0] || "index.html";

    host.innerHTML = markup(id);
    refreshFiles(id);
    output(id, "$ FullStack Bible terminal ready");
    output(id, "Type help for commands.", "muted");

    if (editor) {
      editor.addEventListener("input", function () {
        syncEditor(id);
        save();
      });
    }
  }

  function validFile(name) {
    return !!name && name.indexOf("..") === -1 && name.charAt(0) !== "/" && name.indexOf("<") === -1 && name.indexOf(">") === -1;
  }

  function runFrame(id, html) {
    var root = findRoot(id);
    if (!root) return;

    var old = root.querySelector("iframe.fsb-runner");
    if (old) old.remove();

    var frame = document.createElement("iframe");
    frame.className = "fsb-runner";
    frame.hidden = true;
    frame.sandbox = "allow-scripts";

    var closeScript = "<" + "/script>";
    var bridge =
      "<script>" +
      "(function(){var id=" + JSON.stringify(id) + ";" +
      "window.onerror=function(message,source,line){parent.postMessage({fsbTerminalId:id,level:'error',message:String(message)+' (line '+line+')'},'*')};" +
      "var oldLog=console.log;console.log=function(){oldLog.apply(console,arguments);parent.postMessage({fsbTerminalId:id,level:'ok',message:Array.prototype.slice.call(arguments).join(' ')},'*')};" +
      "var oldError=console.error;console.error=function(){oldError.apply(console,arguments);parent.postMessage({fsbTerminalId:id,level:'error',message:Array.prototype.slice.call(arguments).join(' ')},'*')};" +
      "})();" + closeScript;

    var source = html;
    var bodyClose = "</body>";
    var lower = source.toLowerCase();
    var bodyIndex = lower.indexOf(bodyClose);

    if (bodyIndex !== -1) {
      source = source.slice(0, bodyIndex) + bridge + source.slice(bodyIndex);
    } else {
      source += bridge;
    }

    function receive(event) {
      if (!event.source || event.source !== frame.contentWindow || !event.data || event.data.fsbTerminalId !== id) return;
      output(id, (event.data.level === "error" ? "✗ " : "✓ ") + event.data.message, event.data.level === "error" ? "err" : "ok");
    }

    window.addEventListener("message", receive);
    frame.onload = function () {
      setTimeout(function () {
        window.removeEventListener("message", receive);
        if (frame.parentNode) frame.parentNode.removeChild(frame);
      }, 1800);
    };

    frame.srcdoc = source;
    root.appendChild(frame);
    output(id, "✓ Program started.", "ok");
  }

  function runJavaScript(id, name) {
    var s = sessions[id];
    if (!s || typeof s.files[name] !== "string") {
      output(id, "node: " + name + ": No such file", "err");
      return;
    }
    var code = s.files[name];
    var safe = code.split("</script").join("<" + "\\/" + "script");
    runFrame(id, "<!doctype html><html><body><script>" + safe + "<" + "/script></body></html>");
  }

  function typeCheck(id, name) {
    var s = sessions[id];
    var code = s && s.files[name];
    if (typeof code !== "string") {
      output(id, "tsc: " + name + ": No such file", "err");
      return;
    }
    var errors = [];
    if (code.indexOf("type ") === -1 && code.indexOf("interface ") === -1 && code.indexOf("const ") === -1 && code.indexOf("function ") === -1) errors.push("No TypeScript declarations detected.");
    if (code.indexOf(": any") !== -1) errors.push("explicit any detected; prefer a precise type or unknown.");
    if (code.indexOf("@ts-ignore") !== -1) errors.push("@ts-ignore detected; fix the underlying type problem.");
    if (errors.length) errors.forEach(function (item) { output(id, "✗ " + item, "err"); });
    else output(id, "✓ TypeScript structural checks passed for " + name, "ok");
  }

  function execute(id) {
    var s = sessions[id];
    if (!s) return;
    syncEditor(id);

    var name = s.activeFile || "index.html";
    var source = s.files[name] || "";
    var lower = name.toLowerCase();

    if (lower.slice(-5) === ".html" || lower.slice(-4) === ".htm" || source.toLowerCase().indexOf("<html") !== -1 || source.toLowerCase().indexOf("<body") !== -1 || source.toLowerCase().indexOf("<!doctype") !== -1) {
      runFrame(id, source);
      return;
    }
    if (lower.slice(-3) === ".js" || lower.slice(-4) === ".mjs" || lower.slice(-4) === ".cjs") {
      runJavaScript(id, name);
      return;
    }
    if (lower.slice(-3) === ".ts") {
      typeCheck(id, name);
      return;
    }
    output(id, "No browser runner for " + name + ".", "err");
  }

  function reset(id) {
    var root = findRoot(id);
    var editor = getEditor(root);
    var s = sessions[id];
    if (!s) return;
    var seed = editor ? (editor.defaultValue || editor.value) : "<!doctype html>\n<html><body><h1>FullStack Bible</h1></body></html>";
    s.cwd = "/project";
    s.activeFile = "index.html";
    s.files = { "index.html": seed };
    s.history = [];
    if (editor) editor.value = seed;
    refreshFiles(id);
    clearOutput(id);
    output(id, "Workspace reset.", "muted");
    save();
  }

  function command(id, raw) {
    var s = sessions[id];
    var root = findRoot(id);
    var editor = getEditor(root);
    if (!s) return;

    var cmd = String(raw || "").trim();
    if (!cmd) return;

    syncEditor(id);
    s.history.push(cmd);
    if (s.history.length > 40) s.history.shift();
    save();
    output(id, "$ " + cmd);

    if (cmd === "help") {
      output(id, "help | ls | pwd | cd /project | touch <file> | mkdir <dir> | cat <file> | write <file> <text> | run | node <file.js> | tsc <file.ts> | clear | reset", "muted");
      return;
    }
    if (cmd === "pwd") { output(id, s.cwd); return; }
    if (cmd === "ls") { output(id, Object.keys(s.files).join("  ") || "(empty)"); return; }
    if (cmd === "clear") { clearOutput(id); return; }
    if (cmd === "cd /project" || cmd === "cd .") { s.cwd = "/project"; output(id, s.cwd); return; }
    if (cmd.indexOf("cd ") === 0) { output(id, "cd: only /project is available in this browser sandbox.", "err"); return; }

    if (cmd.indexOf("cat ") === 0) {
      var catName = cmd.slice(4).trim();
      if (Object.prototype.hasOwnProperty.call(s.files, catName)) output(id, s.files[catName]);
      else output(id, "cat: " + catName + ": No such file", "err");
      return;
    }

    if (cmd.indexOf("touch ") === 0) {
      var touchName = cmd.slice(6).trim();
      if (!validFile(touchName)) { output(id, "touch: invalid file name", "err"); return; }
      if (!Object.prototype.hasOwnProperty.call(s.files, touchName)) s.files[touchName] = "";
      s.activeFile = touchName;
      refreshFiles(id);
      if (editor) editor.value = s.files[touchName];
      save();
      output(id, "created " + touchName, "ok");
      return;
    }

    if (cmd.indexOf("mkdir ") === 0) {
      var directory = cmd.slice(6).trim();
      if (!directory || directory.indexOf("/") !== -1) { output(id, "mkdir: invalid directory name", "err"); return; }
      s.files[directory + "/.keep"] = "";
      refreshFiles(id);
      save();
      output(id, "created " + directory + "/", "ok");
      return;
    }

    if (cmd.indexOf("write ") === 0) {
      var text = cmd.slice(6).trim();
      var split = text.indexOf(" ");
      if (split === -1) { output(id, "usage: write <file> <text>", "err"); return; }
      var fileName = text.slice(0, split);
      var fileText = text.slice(split + 1);
      if (!validFile(fileName)) { output(id, "write: invalid file name", "err"); return; }
      s.files[fileName] = fileText;
      s.activeFile = fileName;
      refreshFiles(id);
      if (editor) editor.value = fileText;
      save();
      output(id, "wrote " + fileName, "ok");
      return;
    }

    if (cmd === "run") { execute(id); return; }
    if (cmd.indexOf("node ") === 0) { runJavaScript(id, cmd.slice(5).trim()); return; }
    if (cmd.indexOf("tsc ") === 0) { typeCheck(id, cmd.slice(4).trim()); return; }
    if (cmd === "npm test" || cmd === "npm run test") {
      output(id, "Use the Lab Test tab for the task-specific acceptance tests.", "muted");
      return;
    }

    output(id, "command not found: " + cmd + "\nType help for available commands.", "err");
  }

  function run(id) {
    var input = document.getElementById(id + "-input");
    command(id, input ? input.value : "");
    if (input) input.value = "";
  }

  document.addEventListener("click", function (event) {
    var runButton = event.target.closest("[data-fsb-run]");
    var commandButton = event.target.closest("[data-fsb-cmd]");
    if (runButton) run(runButton.getAttribute("data-fsb-run"));
    if (commandButton) command(commandButton.getAttribute("data-fsb-cmd"), commandButton.getAttribute("data-command"));
  });

  document.addEventListener("keydown", function (event) {
    if (event.key !== "Enter") return;
    var input = event.target.closest(".fsb-terminal-line input");
    if (input) run(input.id.replace("-input", ""));
  });

  function mountAll() {
    injectStyle();
    var hosts = document.querySelectorAll("[data-terminal-host]");
    var i;
    for (i = 0; i < hosts.length; i++) mount(hosts[i]);
  }

  window.FSBTerminal = {
    mountAll: mountAll,
    run: run,
    command: command,
    reset: reset
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", mountAll);
  else mountAll();
})();