export const projects = [
  {
    title: "OceanTowersApp",
    technologies: ["React Native (Expo 54)", "TypeScript", "Firebase Cloud Functions", "Reanimated", "Vite"],
    description: [
      "Ecossistema Full-stack (Mobile & Web) para gestão de bares publicado na App Store.",
      "App Mobile desenvolvido com Expo 54 e Expo Router, utilizando Reanimated para animações fluidas (60fps) e Context API para gestão de estado global.",
      "Backend Serverless robusto com Firebase Cloud Functions para orquestrar pagamentos seguros (Pix/Cartão) via integração com Pagar.me e Webhooks.",
      "Funcionalidades avançadas: Leitura de QR Code nativa, persistência de tema (Dark/Light) e sincronização de pedidos em tempo real via Firestore.",
      "Painel Administrativo Web (React + Vite) para gestão completa de cardápios, monitoramento de pedidos ao vivo e controle de mesas."
    ],
    appStore: "https://apps.apple.com/us/app/oceantowersapp/id6755278400",
    // googlePlay: "..."
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1470&auto=format&fit=crop",
  },
  {
    title: "MCP Voice Agent",
    technologies: ["Python", "LangChain", "Ollama (Local LLM)", "Speech-to-Text", "Agentes"],
    description: [
      "Assistente inteligente controlado por voz que roda 100% localmente (Privacidade + Performance).",
      "Arquitetura de Agentes ReAct construída com LangChain e Ollama (Mistral) para interpretar comandos complexos em linguagem natural.",
      "Persistência de dados customizada e automação de envio de listas formatadas diretamente para o WhatsApp."
    ],
    github: "https://github.com/MatheusVMariussi/mcp-voice-agent",
    image: "https://images.unsplash.com/photo-1589254065878-42c9da9e205b?q=80&w=1470&auto=format&fit=crop"
  },
  {
    title: "FER-Framework",
    technologies: ["Python", "PyTorch", "Deep Learning", "Pandas", "Scikit-learn"],
    description: [
      "Framework modular de Deep Learning para treinar e avaliar modelos de Reconhecimento de Expressão Faciais (FER).",
      "Arquitetura flexível suportando múltiplos datasets (FER2013, RAF-DB, ExpW) e backbones (ResNet50, DenseNet121, EfficientNet).",
      "Implementação de pipelines avançados: Test-Time Augmentation (TTA) para inferência robusta e métodos de Ensemble.",
      "Geração automática de relatórios detalhados com matrizes de confusão normalizadas e análise estatística de erros."
    ],
    github: "https://github.com/MatheusVMariussi/FER-Framework",
    image: "https://plus.unsplash.com/premium_photo-1682124651258-410b25fa9dc0?q=80&w=1471&auto=format&fit=crop"
  },
  {
    title: "GA para Feature Selection",
    technologies: ["Python", "Scikit-learn", "NumPy", "Genetic Algorithms", "Data Science"],
    description: [
      "Implementação 'from scratch' de um Algoritmo Genético (GA) para otimização de seleção de atributos no dataset Breast Cancer.",
      "Desenvolvimento de estratégias avançadas: Mutação Adaptativa, Elitismo e Crossover de Dois Pontos para maximizar a acurácia de classificadores KNN.",
      "Resultado: Acurácia de 93.86% utilizando apenas 6 features (redução de 80% na dimensionalidade original), superando o baseline."
    ],
    github: "https://github.com/MatheusVMariussi/genetic-algorithm-breast-cancer",
    image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=1587&auto=format&fit=crop"
  },
  {
    title: "MinhasSkins Marketplace",
    technologies: ["React", "Node.js", "Express", "MySQL", "API REST"],
    description: [
      "Plataforma Full-stack para transações de itens digitais (Skins de CS).",
      "Arquitetura MVC com API RESTful escalável para gestão de usuários, anúncios e inventário.",
      "Frontend moderno e reativo com integração complexa de banco de dados relacional."
    ],
    github: "https://github.com/MatheusVMariussi/Cs2-SKINS",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1470&auto=format&fit=crop"
  },
  {
    title: "Análise de Redes Complexas",
    technologies: ["Python", "C", "Graph Theory", "Data Structures"],
    description: [
      "Mapeamento de colaborações em streaming com dataset de +80 mil entidades.",
      "Implementação manual de estruturas de dados e algoritmos de grafos (MST, Centralidade) sem dependência de bibliotecas externas.",
      "Foco em otimização de performance para processamento de grandes volumes de dados."
    ],
    github: "https://github.com/MatheusVMariussi/RedesComplexasGrafos",
    image: "https://images.unsplash.com/photo-1611195974226-a6a9be9dd763?q=80&w=1450&auto=format&fit=crop"
  },
  {
    title: "IA Invencível (Game Theory)",
    technologies: ["Python", "Minimax Algorithm", "Alpha-Beta Pruning", "Heuristics", "NumPy"],
    description: [
      "Implementação de agentes autônomos competitivos para jogos de soma zero (Tic-Tac-Toe 5x5).",
      "Análise comparativa entre Minimax padrão e Poda Alfa-Beta (Alpha-Beta Pruning).",
      "Otimização algorítmica resultando em redução exponencial de nós visitados e tempo de decisão."
    ],
    github: "https://github.com/MatheusVMariussi/tictactoe-withAi",
    image: "https://images.unsplash.com/photo-1611195974226-a6a9be9dd763?q=80&w=1450&auto=format&fit=crop"
  }
];