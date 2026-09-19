export type AcademyStage={id:string;title:string;topics:string[];projects:string[];level:string};
export type AcademyProject={id:number;title:string;track:string;capstone?:boolean;skills:string[]};

export const stages:AcademyStage[]=[
{id:"00",title:"AI/ML/Agentic AI Preparation",level:"Foundation",topics:["Programme induction","Learning roadmap","Calculus","Probability","Hypothesis testing"],projects:[]},
{id:"01",title:"Python Refresher with AI",level:"Foundation",topics:["Python syntax","Variables & data types","Operators","Control flow & loops","Comprehensions","Functions","OOP","File handling","Error handling","GitHub Copilot","Prompt design","AI-generated code","Code review","Debugging","Optimization","Automation","Ethical/legal AI-assisted coding"],projects:[15]},
{id:"02",title:"Applied Data Science: Analysis & Visualization",level:"Foundation",topics:["Data science process","NumPy","Arrays","Indexing & slicing","Mathematical/statistical/string operations","Pandas","Series & DataFrames","Statistical operations","Dates & timedeltas","Categorical data","Sorting","Iteration","Text data","Matplotlib","Seaborn","Plotly","2D visualization","3D visualization"],projects:[1,11,12,13,16,17]},
{id:"03",title:"Statistics & Feature Engineering",level:"Core ML",topics:["Linear algebra","Vectors & matrices","Matrix operations","Eigenvalues & eigenvectors","Calculus","Central tendency","Dispersion","Distribution shape","Hypothesis testing","Confidence intervals","p-values","T-test","Z-test","Chi-square","ANOVA","F-test","Feature scaling","Encoding","Transformations"],projects:[2,20]},
{id:"04",title:"Machine Learning",level:"Core ML",topics:["ML fundamentals","Supervised learning","Regression","Linear & polynomial regression","Evaluation","Hyperparameter tuning","Logistic regression","Naive Bayes","KNN","Decision trees","SVM","Random Forest","Imbalanced datasets","Bagging","Boosting","Stacking","Clustering","PCA","LDA","t-SNE","Anomaly detection","Recommendation systems"],projects:[2,9,14,18]},
{id:"05",title:"Deep Learning",level:"Advanced",topics:["Neural networks","Activation functions","Forward propagation","Backpropagation","Gradient descent","TensorFlow","Keras","PyTorch","Regularization","SGD","Adam","RMSProp","Batch normalization","Dropout","Early stopping","CNNs","Transfer learning","YOLO v3","TensorFlow Lite","RNNs","LSTM","GRU","Autoencoders"],projects:[3,5,7,20]},
{id:"06",title:"NLP, Transformers & Speech",level:"Advanced",topics:["Tokenization","Stemming","Lemmatization","NLP classification","NLTK","Bag-of-Words","TF-IDF","Word2Vec","GloVe","Machine translation","Evaluation metrics","RNN","Seq2Seq","Transformers","BERT","GPT","Digital signal processing","Fourier concepts","MFCC","Speech recognition","GAN-based generation"],projects:[4]},
{id:"07",title:"Generative AI & Prompt Engineering",level:"GenAI",topics:["VAE","GAN","Transformers","RAG","Self-attention","Multi-head attention","LLM architecture","RAG + LLM architecture","LLM training concepts","LangChain","Models","Prompts","Memory","Chains","Zero-shot","Few-shot","Chain-of-thought prompting"],projects:[10]},
{id:"08",title:"LLM Applications",level:"GenAI",topics:["LangChain model I/O","Document loaders","Text splitters","Embeddings","Vector stores","Chains","Memory","Agents","Tool integration","Conversational systems","Retrieval systems","Supervised fine-tuning","PEFT","RLHF","Hyperparameter tuning","Hugging Face","Accelerate","DeepSpeed","Bias mitigation","ROUGE","HELM","GLUE","SuperGLUE","BIG-bench"],projects:[4,6,8]},
{id:"09",title:"MLOps & Cloud",level:"Production",topics:["MLOps lifecycle","MLOps pillars","Maturity levels","Feature stores","MLflow","Version control","Experiment tracking","Model deployment","Monitoring","Metrics","Feedback loops","Automation","AWS Step Functions","CloudFormation","Terraform","Cloud MLOps","Model drift","Security","Governance","Compliance"],projects:[19]},
{id:"10",title:"Agentic AI + MCP",level:"Agentic AI",topics:["Tool/context pairing","Structured context","MCP vs APIs","Protocolized tool access","FastMCP","Tool registration","Hosting","Discoverability","System-prompt architecture","Guardrails","Context persistence","Authentication","Token management","Context poisoning","Data leakage"],projects:[6,8]},
{id:"11",title:"Microsoft Foundry IQ",level:"Enterprise AI",topics:["RAG for real-time knowledge","Foundry IQ","Shared agent knowledge","Azure AI Search","Azure Blob Storage","SharePoint","OneLake","Retrieval configuration","Agent instructions","Cited responses","Integration","Testing","Production monitoring"],projects:[6,8]},
{id:"12",title:"End-to-End Capstone",level:"Capstone",topics:["Business problem framing","Data and model design","GenAI/agent integration","Evaluation","Security","Deployment","Monitoring","Production operations"],projects:[7,11,8]}
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
