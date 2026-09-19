export type AcademyStage={id:string;title:string;topics:string[];projects:number[];level:string};
export type AcademyProject={id:number;title:string;track:string;capstone?:boolean;skills:string[]};

export const stages:AcademyStage[]=[
{id:"00",title:"AI/ML Foundations & Orientation",level:"Foundation",topics:["AI vs ML vs deep learning","Learning roadmap","Problem framing","AI system lifecycle","Calculus foundations","Probability foundations","Responsible AI"],projects:[]},
{id:"01",title:"Python Engineering with AI Assistance",level:"Foundation",topics:["Python syntax","Types","Control flow","Collections","Comprehensions","Functions","OOP","Files","Exceptions","Modules","Virtual environments","GitHub Copilot","Prompting for code","Code review","Debugging","Testing"],projects:[15]},
{id:"02",title:"Applied Data Science & Visualization",level:"Foundation",topics:["Data science workflow","NumPy","Pandas","Data cleaning","Missing values","Outliers","Dates","Categorical data","EDA","Matplotlib","Seaborn","Plotly","Business storytelling"],projects:[1,11,12,13,16,17]},
{id:"03",title:"Statistics & Feature Engineering",level:"Core ML",topics:["Descriptive statistics","Probability","Distributions","Sampling","Confidence intervals","Hypothesis tests","p-values","T-test","Z-test","Chi-square","ANOVA","Correlation","Linear algebra","Vectors","Matrices","Scaling","Encoding","Transformations","Feature selection"],projects:[2,20]},
{id:"04",title:"Classical Machine Learning",level:"Core ML",topics:["ML workflow","Train/validation/test","Regression","Classification","Logistic regression","Naive Bayes","KNN","Decision trees","SVM","Random Forest","Boosting","Ensembling","Imbalanced data","Clustering","PCA","Anomaly detection","Recommendation systems"],projects:[2,9,14,18,21]},
{id:"05",title:"Deep Learning & Computer Vision",level:"Advanced",topics:["Neural networks","Activation functions","Backpropagation","Gradient descent","TensorFlow","Keras","PyTorch","Regularization","Optimizers","Batch normalization","Dropout","CNNs","Transfer learning","Object detection","YOLO concepts","Edge inference","Image evaluation"],projects:[3,5,7,20,22]},
{id:"06",title:"NLP, Speech & Transformers",level:"Advanced",topics:["Tokenization","Stemming","Lemmatization","Bag of Words","TF-IDF","Word embeddings","Text classification","Sequence models","Seq2Seq","Attention","Transformers","BERT","GPT concepts","Speech signals","MFCC","Speech recognition","NLP evaluation"],projects:[4,23]},
{id:"07",title:"Generative AI & Prompt Engineering",level:"GenAI",topics:["Generative model concepts","VAE","GAN","Transformer architecture","Prompt patterns","Zero-shot","Few-shot","Structured outputs","Tool-aware prompting","Safety boundaries","Output validation"],projects:[10,24]},
{id:"08",title:"LLM Application Engineering",level:"GenAI",topics:["Model APIs","Document loaders","Chunking","Embeddings","Vector stores","Retrieval","RAG pipelines","LangChain","Agents","Tool integration","Memory","Conversation design","Hugging Face","PEFT","Fine-tuning concepts","RLHF concepts","Evaluation datasets"],projects:[4,6,8,24]},
{id:"09",title:"RAG, Search & Knowledge Systems",level:"GenAI",topics:["Retrieval architecture","Hybrid search","Metadata filters","Reranking","Citations","Grounded generation","Knowledge ingestion","Indexing","Freshness","Access-controlled retrieval","Azure AI Search concepts","Evidence tracing"],projects:[6,8,25]},
{id:"10",title:"MLOps, Cloud & Model Operations",level:"Production",topics:["MLOps lifecycle","Experiment tracking","MLflow","Data versioning","Model registry","Deployment","Batch vs online inference","Monitoring","Drift","Feedback loops","CI/CD","Infrastructure as code","Cloud ML patterns","Governance","Compliance"],projects:[19,22]},
{id:"11",title:"Agentic AI",level:"Agentic AI",topics:["Agent architecture","Planning","Tool use","State","Memory","Multi-step workflows","Human approval","Guardrails","Failure recovery","Tool permissions","Agent evaluation","Observability"],projects:[6,8,24]},
{id:"12",title:"MCP & Protocolized Tool Access",level:"Agentic AI",topics:["MCP concepts","MCP vs APIs","Tools","Resources","Prompts","FastMCP","Server design","Discovery","Authentication","Token handling","Context boundaries","Prompt injection","Context poisoning","Data leakage"],projects:[6,25]},
{id:"13",title:"Enterprise AI with Microsoft Foundry Patterns",level:"Enterprise AI",topics:["Enterprise RAG","Azure AI Search","Blob Storage","SharePoint knowledge","OneLake concepts","Agent knowledge","Retrieval configuration","Citations","Access control","Evaluation","Production monitoring"],projects:[6,8,25]},
{id:"14",title:"AI Security, Safety & Responsible AI",level:"Enterprise AI",topics:["Threat modeling","Prompt injection","Indirect injection","Data leakage","Secrets","PII handling","Authorization","Model abuse","Jailbreak resistance","Bias","Fairness","Explainability","Auditability","Governance"],projects:[24,25]},
{id:"15",title:"AI Evaluation & Quality Engineering",level:"Production",topics:["Task-specific evals","Golden datasets","Regression tests","Groundedness","Relevance","Faithfulness","Safety evals","Latency","Cost","Human evaluation","LLM-as-judge limitations","Observability","Release gates"],projects:[4,6,24]},
{id:"16",title:"AI Product Engineering & Deployment",level:"Production",topics:["API design","FastAPI","UI integration","Authentication","Authorization","Caching","Queues","Secrets","Docker","CI/CD","Observability","SLOs","Rollbacks","Production runbooks"],projects:[6,19,25]},
{id:"17",title:"End-to-End AI Engineering Capstone",level:"Capstone",topics:["Business problem framing","Architecture","Data contracts","Model or LLM selection","RAG or agent design","Evaluation","Security","Deployment","Monitoring","Documentation","Demo","Postmortem"],projects:[6,8,18,25]}
];

export const projects:AcademyProject[]=[
{id:1,title:"Marketing Campaign Analysis",track:"Data Science",skills:["Python","Pandas","Visualization"]},
{id:2,title:"Insurance Cross-Sell Prediction with Imbalanced Data",track:"Machine Learning",skills:["Classification","Imbalanced data","Evaluation"]},
{id:3,title:"Knee Osteoarthritis Severity Classification",track:"Deep Learning",skills:["CNN","Image classification","TensorFlow"]},
{id:4,title:"NewsGenie — AI News & Information Assistant",track:"NLP / GenAI",skills:["NLP","RAG","LLM"]},
{id:5,title:"CNN + TensorFlow Serving — Diabetic Retinopathy",track:"Deep Learning",skills:["CNN","Serving","Computer vision"]},
{id:6,title:"AI-Powered HR Assistant",track:"Agentic AI",skills:["RAG","Agents","Enterprise data"],capstone:true},
{id:7,title:"Autonomous Driving",track:"Computer Vision",skills:["Object detection","Deep learning","Edge AI"],capstone:true},
{id:8,title:"AI Heritage Tourism",track:"GenAI / Agents",skills:["RAG","Agents","Recommendations"],capstone:true},
{id:9,title:"Song Cohort / Music Clustering",track:"Unsupervised Learning",skills:["Clustering","PCA","Feature engineering"]},
{id:10,title:"Generative Design with OpenAI + Gradio",track:"Generative AI",skills:["OpenAI","Prompting","Gradio"]},
{id:11,title:"Sales Analysis",track:"Data Science",skills:["Python","Pandas","EDA"]},
{id:12,title:"Home Loan Data Analysis",track:"Data Science",skills:["EDA","Statistics","Visualization"]},
{id:13,title:"Employee Turnover Analytics",track:"Data Science",skills:["Analytics","Statistics","Visualization"]},
{id:14,title:"Ebola Outbreak Severity Prediction",track:"Machine Learning",skills:["Classification","Feature engineering","Evaluation"]},
{id:15,title:"Python Adventure Game with GitHub Copilot",track:"Python + AI",skills:["Python","Copilot","Code review"]},
{id:16,title:"Lending Club Loan Data Analysis",track:"Data Science",skills:["Pandas","Statistics","EDA"]},
{id:17,title:"Customer Order Analysis with Python",track:"Python / Analytics",skills:["Python","Data analysis","Visualization"]},
{id:18,title:"Sales Forecasting",track:"Machine Learning",skills:["Time series","Forecasting","Evaluation"],capstone:true},
{id:19,title:"MLOps Predictive Modeling & Deployment",track:"MLOps",skills:["MLflow","Deployment","Monitoring"]},
{id:20,title:"Loan Default Prediction with Deep Learning",track:"Deep Learning",skills:["Neural networks","Classification","Evaluation"]}
{id:21,title:"Customer Churn Prediction & Intervention",track:"Applied Machine Learning",skills:["Classification","Feature engineering","Explainability"]},
{id:22,title:"Vision Model Serving & Monitoring",track:"Deep Learning / MLOps",skills:["CNN","Serving","Monitoring"]},
{id:23,title:"Enterprise Document Intelligence",track:"NLP / Transformers",skills:["Transformers","Extraction","Evaluation"]},
{id:24,title:"Secure GenAI Design Studio",track:"Generative AI / Safety",skills:["LLMs","Structured output","AI security"]},
{id:25,title:"Enterprise Knowledge Agent",track:"RAG / Agentic AI",skills:["RAG","MCP","Evaluation","Security"],capstone:true}
];

export const tools=["Python","NumPy","Pandas","SciPy","SymPy","Scikit-learn","Matplotlib","Seaborn","Plotly","TensorFlow","Keras","PyTorch","OpenCV","NLTK","spaCy","Gensim","Librosa","Pydub","Hugging Face","OpenAI","LangChain","MLflow","FastAPI","Gradio","Chroma","DVC","Grafana","GitHub Actions","GitHub Copilot","Google Colab","VS Code","CrewAI","AutoGen","FastMCP","Azure AI Search","Microsoft Foundry","Azure Blob Storage","OneLake"];


export type CurriculumBenchmark={id:string;externalTheme:string;academyStage:string;evidence:string;implementation:string};
export const benchmark:CurriculumBenchmark[]=[
{id:"B01",externalTheme:"Programming + AI-assisted coding",academyStage:"01",evidence:"Python engineering, AI-assisted coding and review",implementation:"Lesson → coding lab → reviewed project commit"},
{id:"B02",externalTheme:"Data science + statistics",academyStage:"02–03",evidence:"Data preparation, EDA, statistics and visualization",implementation:"Notebook evidence + reproducible analysis"},
{id:"B03",externalTheme:"Machine learning",academyStage:"04",evidence:"Supervised, unsupervised and model evaluation workflows",implementation:"Model card + evaluation report + API"},
{id:"B04",externalTheme:"Deep learning + vision",academyStage:"05",evidence:"CNNs, transfer learning and deployment",implementation:"Training run + inference service + monitoring"},
{id:"B05",externalTheme:"NLP + transformers",academyStage:"06",evidence:"Text processing, transformers and speech foundations",implementation:"Evaluation dataset + model experiment"},
{id:"B06",externalTheme:"Generative AI + prompt engineering",academyStage:"07",evidence:"LLMs, prompts, structured outputs and safety",implementation:"Prompt tests + output schema + safety cases"},
{id:"B07",externalTheme:"RAG + LLM applications",academyStage:"08–09",evidence:"Retrieval, embeddings, vector stores and grounded answers",implementation:"Retrieval trace + citation checks + eval set"},
{id:"B08",externalTheme:"MLOps + cloud",academyStage:"10",evidence:"Experiment tracking, deployment, monitoring and governance",implementation:"CI/CD + model registry + production runbook"},
{id:"B09",externalTheme:"Agentic AI + MCP",academyStage:"11–12",evidence:"Agents, tools, protocolized access and guardrails",implementation:"Tool permission matrix + agent evals + audit log"},
{id:"B10",externalTheme:"Enterprise AI",academyStage:"13–16",evidence:"Knowledge systems, security, evaluation and production operations",implementation:"Enterprise reference architecture + release gates"},
{id:"B11",externalTheme:"Capstone",academyStage:"17",evidence:"End-to-end AI product delivery",implementation:"Architecture review + working demo + portfolio evidence"}
];
