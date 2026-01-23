# 🎯 Meu CV - Portfólio Profissional

Um portfólio desenvolvido com **React + Vite**, apresentando meus projetos, experiências e competências técnicas. O site oferece suporte multilíngue (Português e Inglês) com animações fluidas e design elegante.

**🌐 Live:** [matheusmariussi.com.br](https://matheusmariussi.com.br)

---

## ✨ Features

- ✅ **Design Responsivo** - Totalmente otimizado para mobile, tablet e desktop
- ✅ **Multilíngue** - Suporte a Português e Inglês com detecção automática
- ✅ **Animações Suaves** - Uso de Framer Motion para transições e efeitos visuais
- ✅ **Performance Otimizada** - Vite para build rápido e HMR durante desenvolvimento
- (Em desenvolvimento) **Páginas de Projetos** - Páginas dedicadas com mais detalhes sobre projetos específicos
- ✅ **Componentes Reutilizáveis** - Arquitetura modular e bem organizada
- ✅ **Deploy Automático** - Integração com GitHub Pages via gh-pages

---

## 🛠 Tecnologias

### Core
- **React 19.1.1** - Biblioteca UI
- **Vite 7.1.2** - Build tool e dev server ultra-rápido
- **React Router 7.12.0** - Roteamento do lado do cliente

### Styling & Animações
- **Tailwind CSS 4.1.17** - Framework CSS utility-first
- **Framer Motion 12.23.25** - Biblioteca de animações
- **PostCSS 8.5.6** - Processador de CSS

### Internacionalização
- **i18next 25.7.1** - Framework de i18n
- **react-i18next 16.3.5** - Integração React com i18next
- **i18next-browser-languagedetector 8.2.0** - Detecção automática de idioma

### Ícones e Utilitários
- **react-icons 5.5.0** - Biblioteca de ícones SVG
- **clsx 2.1.1** - Utilitário para classes CSS condicionais
- **tailwind-merge 3.4.0** - Merge inteligente de classes Tailwind

---

## 📁 Estrutura do Projeto

```
meu-cv/
├── public/                    # Arquivos estáticos públicos
│   └── CNAME                 # Configuração de domínio personalizado
│
├── src/
│   ├── components/           # Componentes React reutilizáveis
│   │   ├── Contact.jsx       # Seção de contato
│   │   ├── Experience.jsx    # Experiências profissionais
│   │   ├── Footer.jsx        # Rodapé
│   │   ├── Hero.jsx          # Seção principal/hero
│   │   ├── Home.jsx          # Layout principal da home
│   │   ├── Navbar.jsx        # Barra de navegação com scroll hide
│   │   ├── ProjectCard.jsx   # Card de exibição de projetos
│   │   ├── Projects.jsx      # Seção de projetos
│   │   ├── Skills.jsx        # Seção de habilidades
│   │   └── ui/               # Componentes UI customizados
│   │       ├── BackgroundBeams.jsx  # Efeito de luz de fundo
│   │       ├── BentoGrid.jsx        # Layout em grid bento
│   │       └── Spotlight.jsx        # Efeito de spotlight
│   │
│   ├── data/                 # Dados estáticos da aplicação
│   │   ├── projectsData.js   # Lista de projetos com detalhes
│   │   └── skillsData.js     # Lista de habilidades técnicas
│   │
│   ├── locales/              # Arquivos de tradução JSON
│   │   ├── en.json           # Tradução em inglês
│   │   └── pt.json           # Tradução em português
│   │
│   ├── projectPages/         # Páginas dedidas de projetos
│   │   └── everyscoreboard.jsx # Página detalhada do Every Scoreboard
│   │
│   ├── utils/                # Funções utilitárias
│   │   └── cn.js             # Função para merge de classes Tailwind
│   │
│   ├── App.jsx               # Componente raiz com rotas
│   ├── i18n.js               # Configuração de internacionalização
│   ├── index.css             # Estilos globais
│   └── main.jsx              # Ponto de entrada React
│
├── index.html                # HTML principal
├── vite.config.js            # Configuração Vite
├── tailwind.config.js        # Configuração Tailwind CSS
├── postcss.config.js         # Configuração PostCSS
├── eslint.config.js          # Configuração ESLint
├── package.json              # Dependências e scripts
└── README.md                 # Este arquivo
```

---

## 📱 Responsividade

O projeto é totalmente responsivo utilizando:
- **Mobile-first** approach
- **Tailwind Breakpoints**: sm, md, lg, xl, 2xl
- **Flexbox & Grid** para layouts adaptativos
- **Media Queries** customizadas quando necessário

---

## 📚 Documentação Complementar

- [React Docs](https://react.dev)
- [Vite Docs](https://vitejs.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [React Router Docs](https://reactrouter.com)
- [i18next Docs](https://www.i18next.com)

---

## 👤 Contato

**Matheus Mariussi**
- 🌐 Website: [matheusmariussi.com.br](https://matheusmariussi.com.br)
- 💻 GitHub: [@MatheusVMariussi](https://github.com/MatheusVMariussi)
- 💼 LinkedIn: [Matheus Mariussi](https://linkedin.com/in/matheusmariussi)

---

**Última atualização:** Janeiro 2026