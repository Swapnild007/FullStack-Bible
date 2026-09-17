(()=>{
const lessons={
'computer-basics':{
subtitle:'From electrical state to a running program',
why:'Every web application eventually becomes work performed by a computer. Before frameworks, databases, or cloud platforms make sense, you need to know what the machine is actually doing: instructions are fetched, values are moved, memory is read and written, and input/output crosses boundaries to other devices.',
how:'Think of a computer as a very fast state transformer. A program describes operations; the processor executes those operations against values held in memory or registers. Storage keeps information when the process is not running, while operating-system services connect programs to files, networks, devices, and other processes.',
vocabulary:['CPU','instruction','register','RAM','storage','process','operating system','input/output'],
mechanics:['The CPU repeatedly fetches and decodes instructions, then performs operations and advances execution.','Registers provide extremely fast working storage inside the CPU.','RAM holds the active program state and data needed by running processes.','Persistent storage retains programs and data after power is removed.','The operating system provides controlled access to hardware and coordinates processes, memory, files, and devices.'],
code:`const price = 1200;\nconst tax = price * 0.18;\nconst total = price + tax;\nconsole.log(total);`,
consequences:['A variable in source code is not literally a box sitting in RAM; the compiler or runtime decides how values are represented and where they live.','Disk is persistent but comparatively slow; RAM is fast working memory but volatile.','A program can be correct while still being slow because it performs unnecessary CPU, memory, or I/O work.'],
experiments:['Open a terminal and inspect a running process.','Run a program that reads a file and identify which parts involve CPU work versus I/O.','Measure the difference between repeated computation and reading a cached value.'],
challenge:'Explain the path from clicking a program icon to the first useful instruction executing, including the roles of storage, the operating system, process creation, memory, and CPU execution.',
mastery:'You can explain CPU, memory, storage, process, and operating-system responsibilities without treating them as interchangeable concepts.'
},
'binary-data':{
subtitle:'How machines represent information',
why:'Computers operate on discrete states. Everything a program manipulates—numbers, text, images, audio, network packets—must eventually be represented as bits. Understanding representation prevents mysterious bugs around encoding, size, overflow, and serialization.',
how:'Start with the smallest unit: a bit has two possible states. Groups of bits encode larger sets of possibilities. A byte is eight bits, giving 256 possible bit patterns. Meaning comes from a convention: the same bits can represent an integer, character, pixel, instruction, or part of a file depending on how they are interpreted.',
vocabulary:['bit','byte','binary','hexadecimal','encoding','Unicode','UTF-8','serialization','endianness'],
mechanics:['Unsigned integers represent values using positional powers of two.','Hexadecimal compresses binary notation by representing four bits with one hexadecimal digit.','Text requires an encoding such as UTF-8 to map characters to bytes.','Files are byte sequences whose interpretation comes from a format or protocol.','Serialization converts structured program data into a transferable representation.'],
code:`const n = 255;\nconsole.log(n.toString(2)); // 11111111\nconsole.log(n.toString(16)); // ff\n\nconst bytes = new TextEncoder().encode('web');\nconsole.log(bytes);`,
consequences:['A character count is not always a byte count.','A malformed encoding can corrupt text even when the underlying bytes were transmitted correctly.','Large numeric values can exceed the exact range supported by a language’s ordinary number type.'],
experiments:['Convert decimal values 0–31 to binary and hexadecimal.','Encode a short Unicode string with TextEncoder and inspect the bytes.','Compare file size before and after a compression step.'],
challenge:'Explain why the string “é” can occupy more than one byte in UTF-8 and why a program must know the encoding before interpreting bytes as text.',
mastery:'You can move between bits, bytes, binary, hexadecimal, numeric representation, text encoding, and serialized data without confusing representation with meaning.'
},
'memory-processes':{
subtitle:'The execution boundaries created by the operating system',
why:'A running application needs memory, CPU time, files, network access, and isolation. The operating system creates abstractions that let many programs coexist without each program directly controlling the entire machine.',
how:'A process is a running program together with its execution state and resources. Threads are execution paths inside a process that share its address space. This sharing makes communication fast but also creates concurrency hazards when multiple threads access mutable state.',
vocabulary:['process','thread','virtual memory','heap','stack','address space','context switch','concurrency'],
mechanics:['Virtual memory gives processes an isolated address-space view rather than exposing raw physical memory.','The stack commonly stores call frames and local execution state.','The heap supports dynamically allocated data whose lifetime is not tied directly to one call frame.','The scheduler gives runnable threads opportunities to execute on CPU cores.','A context switch changes the active execution context and has a cost.'],
code:`function outer(){\n  const message = 'hello';\n  return function inner(){\n    return message;\n  };\n}\nconst read = outer();\nconsole.log(read());`,
consequences:['Concurrency is not the same thing as parallelism: multiple tasks can overlap in time even on one core.','Shared mutable state creates synchronization requirements.','Memory leaks can occur when objects remain reachable longer than intended.'],
experiments:['Inspect process and thread information using your operating system tools.','Create a program that allocates increasing amounts of memory and observe its behavior.','Compare a CPU-bound loop with an I/O-bound operation.'],
challenge:'Describe why two independent processes cannot normally access each other’s memory directly, and why threads inside one process can.',
mastery:'You can explain process isolation, threads, virtual memory, stack/heap roles, scheduling, and the practical cost of shared state.'
},
'programming-fundamentals':{
subtitle:'Turning a problem into executable state transitions',
why:'Programming is not primarily syntax. The core activity is translating a problem into precise state, decisions, repetition, data transformations, and reusable operations that a machine can execute.',
how:'Take a vague goal and make every assumption explicit. Identify the inputs, the state that must change, the rules that transform it, and the output that proves the work is complete. Good code makes those relationships visible.',
vocabulary:['value','variable','state','expression','statement','control flow','function','parameter','return value','error'],
mechanics:['Expressions produce values.','Statements change program state or control execution.','Conditions select one path from several possible paths.','Loops repeat work while a condition or collection requires it.','Functions package behavior and establish explicit input/output boundaries.'],
code:`function calculateTotal(items, taxRate){\n  let subtotal = 0;\n  for (const item of items) subtotal += item.price * item.quantity;\n  return subtotal * (1 + taxRate);\n}\n\nconsole.log(calculateTotal([{price:100,quantity:2}], 0.18));`,
consequences:['Mutable state can make reasoning harder as programs grow.','Small functions with explicit inputs and outputs are easier to test.','Errors are part of the program’s behavior and should be designed, not ignored.'],
experiments:['Rewrite a loop using map, filter, or reduce where appropriate.','Trace a function manually using a table of variable values.','Introduce an invalid input and design a deliberate error response.'],
challenge:'Take a real-world task such as calculating an invoice and write down its inputs, state transitions, rules, outputs, and failure cases before writing code.',
mastery:'You can decompose a problem into data, state, control flow, functions, and explicit failure behavior before reaching for a framework.'
},
'data-structures':{
subtitle:'Choosing representations that make operations efficient and clear',
why:'Different data relationships require different representations. Choosing an appropriate structure can change both the clarity and the computational cost of a solution.',
how:'Ask what operations dominate the workload: lookup by key, ordered traversal, insertion at an end, priority selection, relationship traversal, or uniqueness checks. Choose a representation that makes the important operation natural.',
vocabulary:['array','object','map','set','stack','queue','tree','graph','node','edge'],
mechanics:['Arrays provide indexed sequences with strong locality and simple iteration.','Maps associate keys with values and are designed for keyed lookup.','Sets represent unique membership.','Stacks use last-in-first-out behavior; queues use first-in-first-out behavior.','Trees represent hierarchical relationships; graphs represent general networks of relationships.'],
code:`const usersById = new Map();\nusersById.set('u1', {name:'Asha'});\nconsole.log(usersById.get('u1'));\n\nconst uniqueRoles = new Set(['admin','editor','admin']);\nconsole.log(uniqueRoles.size);`,
consequences:['A convenient data structure can be more important than a clever algorithm.','Memory layout and access patterns can affect real performance beyond Big-O notation.','A structure that fits one operation may be poor for another.'],
experiments:['Implement a stack and queue using arrays.','Build a frequency counter with Map.','Represent a social network as a graph and implement breadth-first traversal.'],
challenge:'Given a requirement for fast membership checks, ordered iteration, and duplicate removal, compare an array, object, Map, and Set and justify the trade-offs.',
mastery:'You choose structures from workload requirements rather than habit, and you can explain their operations, trade-offs, and complexity.'
},
'algorithms':{
subtitle:'A repeatable method for solving computational problems',
why:'A program needs a method, not merely data. Algorithms provide explicit procedures for transforming inputs into outputs while making correctness and cost discussable.',
how:'First define the result precisely. Then reduce the problem into smaller operations, identify reusable work, and choose an approach whose cost fits the expected input size. Verify the result with edge cases rather than trusting a happy-path example.',
vocabulary:['algorithm','search','sort','traversal','recursion','iteration','invariant','edge case'],
mechanics:['Linear search checks candidates sequentially.','Binary search repeatedly halves a sorted search space.','Sorting establishes an ordering that can enable later efficient operations.','Graph traversal systematically visits reachable nodes while tracking what has already been seen.','An invariant is a condition that remains true during an algorithm and helps establish correctness.'],
code:`function binarySearch(values, target){\n  let lo = 0, hi = values.length - 1;\n  while (lo <= hi){\n    const mid = Math.floor((lo + hi) / 2);\n    if (values[mid] === target) return mid;\n    if (values[mid] < target) lo = mid + 1;\n    else hi = mid - 1;\n  }\n  return -1;\n}`,
consequences:['An algorithm can be correct but too expensive at production scale.','Preconditions such as sorted input are part of an algorithm’s contract.','Testing should include empty input, one item, duplicates, boundaries, and unexpectedly large input.'],
experiments:['Implement linear search and binary search and compare them on increasing input sizes.','Implement two sorting algorithms and measure them.','Write a graph traversal and explain why a visited set is required.'],
challenge:'Design an algorithm for finding duplicate IDs in a large list. Compare a nested-loop solution with a Set-based solution and reason about time and space cost.',
mastery:'You can turn a requirement into an algorithm, state its assumptions, test edge cases, and reason about correctness and cost.'
},
'complexity':{
subtitle:'How computational cost changes as input grows',
why:'A solution that works instantly for ten records may become unusable for ten million. Complexity analysis gives a language for discussing how time and memory requirements scale with input size.',
how:'Ignore machine-specific constants at first and focus on growth. If doubling the input roughly doubles the work, that is linear growth. If it squares the work, growth is quadratic. The goal is not to predict exact milliseconds; it is to compare how approaches behave as scale increases.',
vocabulary:['Big O','time complexity','space complexity','constant time','linear','logarithmic','quadratic','amortized cost'],
mechanics:['O(1) describes work that stays bounded as input grows.','O(n) grows proportionally with input size.','O(log n) grows slowly because each step reduces the remaining problem substantially.','O(n²) often appears when every item is compared with many other items.','Space complexity measures additional memory requirements as input grows.'],
code:`// O(n)\nfunction hasDuplicate(values){\n  const seen = new Set();\n  for (const value of values){\n    if (seen.has(value)) return true;\n    seen.add(value);\n  }\n  return false;\n}`,
consequences:['Big-O does not capture every real-world performance factor.','A theoretically faster algorithm can lose on small inputs because of constants or implementation overhead.','I/O, network latency, database plans, caching, and memory locality can dominate application performance.'],
experiments:['Benchmark O(n), O(n log n), and O(n²) approaches with generated inputs.','Measure memory growth as input size increases.','Compare a Set lookup with an array includes call for increasing collections.'],
challenge:'Explain why replacing a nested loop with a Set can change duplicate detection from quadratic time to expected linear time while increasing auxiliary memory.',
mastery:'You can estimate time and space growth, identify dominant operations, and use complexity as a design tool rather than a vocabulary exercise.'
},
'cli-editor-debugger':{
subtitle:'The everyday instruments of a working developer',
why:'Real software development happens through repeated inspection, modification, execution, testing, and debugging. Fluency with the command line, editor, and debugger removes friction from that loop.',
how:'Treat tools as observability surfaces for your program. The terminal lets you control the environment, the editor lets you change the system, and the debugger lets you pause execution and inspect state. Logs and tests provide additional evidence without requiring guesswork.',
vocabulary:['shell','command','path','environment variable','process','breakpoint','call stack','watch expression','log'],
mechanics:['A shell interprets commands and launches programs.','A process inherits environment variables and other execution context.','A debugger pauses execution and exposes the current call stack and variables.','Breakpoints are useful when the question is “what state exists here?” rather than “what line ran?”','Logs should capture useful context while avoiding secrets and excessive noise.'],
code:`// Debug deliberately: inspect input, state, and the failing branch.\nfunction divide(a,b){\n  if (b === 0) throw new Error('division by zero');\n  return a / b;\n}\nconsole.log(divide(10,2));`,
consequences:['Random changes without evidence make debugging slower.','A reproducible command is often more valuable than a screenshot of an error.','Secrets must never be committed to source control or printed into logs.'],
experiments:['Use pwd, ls, cd, mkdir, cp, mv, and rm in a disposable project directory.','Set an environment variable and read it from a program.','Set a breakpoint inside a failing function and inspect the call stack and variables.'],
challenge:'When a function returns the wrong value, write a debugging plan that gathers evidence first: reproduce, isolate, inspect inputs, inspect state, identify the incorrect transition, fix, and regression-test.',
mastery:'You can navigate a project from the terminal, run repeatable commands, inspect runtime state, and debug from evidence rather than trial and error.'
}
};
window.FULLSTACK_LESSON_CONTENT=lessons;
if(window.FULLSTACK_BIBLE?.domains){
  for(const domain of window.FULLSTACK_BIBLE.domains){
    for(const lesson of domain.lessons){
      const extra=lessons[lesson.id];
      if(extra)Object.assign(lesson,extra);
    }
  }
}
})();
