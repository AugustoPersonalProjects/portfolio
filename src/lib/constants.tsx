import { Github, Linkedin, Code2, Palette, Database, Brain, Phone, Mail, Cloud } from "lucide-react";

export const socialLinks = [
  { icon: <Github size={20} />, href: "https://github.com/lopeslyra10" },
  { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/augusto-lopes-lyra" },
];

export const stats = [
  { number: "2", text: "Anos de experiência acadêmica em TI" },
  { number: "6", text: "Projetos educacionais concluídos" },
  { number: "12", text: "Tecnologias estudadas" },
  { number: "345", text: "Commits realizados em projetos FIAP" }, 
];

export const menuItems = [
  { title: "Home", path: "/" },
  { title: "Serviços", path: "/services" },
  { title: "Resumo", path: "/resume" },
  { title: "Projetos", path: "/works" },
  { title: "Contato", path: "/contact" },
];

export const services = [
  {
    number: "01",
    icon: <Code2 size={32} />,
    title: "Desenvolvimento Web",
    description:
      "Criação de aplicações web modernas, integrando front-end e back-end com foco em performance e usabilidade.",
    features: ["React", "Next.js", "Tailwind", "Java", ".NET", "GO"],
  },
  {
    number: "02",
    icon: <Database size={32} />,
    title: "Banco de Dados & Integração",
    description:
      "Modelagem e gerenciamento de dados, integração de APIs e automação de fluxos utilizando SQL e NoSQL.",
    features: ["Oracle", "PostgreSQL", "MongoDB", "JDBC"],
  },
  {
    number: "03",
    icon: <Cloud size={32} />,
    title: "Cloud Computing & DevOps",
    description:
      "Implantação, monitoramento e escalabilidade de aplicações em ambientes de nuvem com foco em automação e pipelines contínuos.",
    features: ["Azure", "AzureDevOps", "Pipelines", "IBM Cloud", "Docker", "CI/CD",],
  },
  {
    number: "04",
    icon: <Brain size={32} />,
    title: "Inteligência Artificial & Automação",
    description:
      "Criação de Chatbots, automações com Node-RED e integração com APIs cognitivas (Watson, OpenAI).",
    features: ["Python", "Flask", "FastAPI", "Watson AI"],
  },
];

export const ExperienceTabs = [
  { title: "Experiência", id: "experience" },
  { title: "Educação", id: "education" },
  { title: "Habilidades", id: "skills" },
  { title: "Sobre mim", id: "about" },
];

export const resumeData = {
  experience: [
    {
      period: "2024 - Presente",
      title: "Estudante de Análise e Desenvolvimento de Sistemas",
      company: "FIAP",
      description:
        "Atuação em projetos educacionais com foco em desenvolvimento full-stack, IoT, e soluções baseadas em Inteligência Artificial e Cloud Computing.",
    },
    {
      period: "2023",
      title: "Estudante Técnico em Tecnologia da Informação",
      company: "SENAC São Bernardo do Campo",
      description:
        "Formação técnica voltada para infraestrutura, banco de dados e desenvolvimento web. Conclusão com foco em fundamentos de programação e modelagem de sistemas.",
    },
  ],
  education: [
    {
      period: "2024 - 2025",
      title: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
      institution: "FIAP - Faculdade de Informática e Administração Paulista",
      description:
        "Graduação com ênfase em desenvolvimento de software, modelagem de negócios, metodologias ágeis, bancos de dados e integração de sistemas.",
    },
    {
      period: "2021 - 2023",
      title: "Ensino Médio Técnico em Tecnologia da Informação",
      institution: "SENAC São Bernardo do Campo",
      description:
        "Formação técnica com foco em lógica de programação, banco de dados e introdução à computação aplicada.",
    },
  ],
  skills: [
    {
      name: "Frontend",
      items: ["React", "Next.js", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"],
    },
    {
      name: "Backend",
      items: ["Java", "Python", "C#", "Golang", "Node.js", "PostgreSQL", "Oracle"],
    },
    {
      name: "DevOps & Cloud",
      items: ["Git", "GitHub", "Azure", "Docker", "CI/CD", "IBM Cloud"],
    },
    {
      name: "Soft Skills",
      items: [
        "Comunicação",
        "Trabalho em equipe",
        "Proatividade",
        "Gestão de tempo",
        "Resolução de problemas",
      ],
    },
  ],
  about: {
    description:
      "Sou um estudante de Análise e Desenvolvimento de Sistemas apaixonado por tecnologia, com foco em desenvolvimento web, inteligência artificial e automação. Tenho experiência prática em projetos acadêmicos que envolvem integração entre hardware, APIs e soluções em nuvem. Busco constantemente aprimorar minhas habilidades e aplicar meus conhecimentos em desafios reais.",
    interests: [
      "Desenvolvimento Full Stack",
      "Inteligência Artificial",
      "Cloud Computing",
      "Soluções IoT",
      "UI/UX Design",
    ],
  },
};

export const skillsData = [
  { name: "Java", icon: "/skills/java-logo-svgrepo-com.svg" },
  { name: "Python", icon: "/skills/python-svgrepo-com.svg" },
  { name: "C#", icon: "/skills/csharp-svgrepo-com.svg" },
  { name: "Golang", icon: "/skills/go-svgrepo-com.svg" },
  { name: "React", icon: "/skills/react.svg" },
  { name: "Next.js", icon: "/skills/next.svg" },
  { name: "Tailwind", icon: "/skills/tailwind.svg" },
  { name: "TypeScript", icon: "/skills/typescript.svg" },
];

export const projects = [
  {
    number: "01",
    title: "Portal AutoCare",
    description:
      "Plataforma phygital desenvolvida para a Porto Seguro, integrando serviços automotivos com diagnóstico digital e atendimento físico.",
    image: "/work/autocare.png",
    technologies: ["HTML5", "CSS", "JavaScript"],
    demoLink: "#",
    githubLink: "https://github.com/AugustoPersonalProjects/portal-academico-front",  
  },
  {
    number: "02",
    title: "MotoTrack IoT",
    description:
      "Sistema inteligente para rastreamento de motos utilizando ESP32, e dashboard em tempo real com integração via API REST.",
    image: "/work/mototrack.png",
    technologies: ["Java", "ESP32", "C++", "ThingSpeak", "Oracle"],
    demoLink: "#",
    githubLink: "https://github.com/mototrack-challenge/mototrack-IoT",
  },
  {
    number: "03",
    title: "SafeHeat IoT",
    description:
      "Protótipo de sistema IoT para monitoramento térmico de ambientes e prevenção de incêndios, com integração em tempo real.",
    image: "/work/safeheat.png",
    technologies: ["ESP32", "Python", "C++", "ThingSpeak"],
    demoLink: "#",
    githubLink: "https://github.com/lopeslyra10/GS-iot",
  },
  {
    number: "04",
    title: "Know Your Fan",
    description:
      "Aplicação web gamificada desenvolvida para a FURIA, com quiz de arquétipos de fãs e classificação baseada em perfis comportamentais.",
    image: "/work/furia.png",
    technologies: ["React", "Vite", "Tailwind", "TypeScript"],
    demoLink: "#",
    githubLink: "https://github.com/lopeslyra10/furia-know-your-fan",
  },
  {
    number: "05",
    title: "Fun Chat - FURIA",
    description:
      "Chatbot temático para fãs de eSports da FURIA, com integração a quiz e respostas interativas em tempo real.",
    image: "/work/funchat.png",
    technologies: ["React", "Vite", "Tailwind", "Node.js", "Framer Motion"],
    demoLink: "#",
    githubLink: "https://github.com/lopeslyra10/furia-fun-chat",
  },
];

export const contactInfo = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Telefone",
    content: "(+55) 11 93720-0333",
    bg: "bg-emerald-400/10",
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    content: "augustolopeslyra@gmail.com",
    bg: "bg-emerald-400/10",
  },
];
