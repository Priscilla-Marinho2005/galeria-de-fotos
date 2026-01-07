# Galeria de Fotos

![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-Deploy-000000?style=for-the-badge&logo=vercel&logoColor=white)

Uma aplicação web moderna e responsiva para visualização e pesquisa de fotos, desenvolvida como projeto para o **Processo Seletivo da Aceleradora Ágil - Turma 29 (2026/1º Semestre)**.

## 🚀 [Ver Demo ao Vivo](https://galeria-de-fotos-six-teal.vercel.app/)

---

## 📋 Sobre o Projeto

A Galeria de Fotos é uma aplicação que permite aos usuários visualizar, filtrar e pesquisar imagens através de uma interface intuitiva e elegante. O projeto foi desenvolvido com foco em usabilidade, performance e design moderno e responsivo.

### ✨ Funcionalidades

- 🔍 **Busca em Tempo Real**: Filtre fotos instantaneamente enquanto digita.
- 🌓 **Modo Escuro/Claro**: Alterne entre temas para melhor conforto visual.
- 📱 **Design Responsivo**: Layout adaptativo para todos os dispositivos.
- 🎨 **Efeitos Interativos**: Animações suaves ao passar o mouse sobre as imagens.
- ⚡ **Performance Otimizada**: Carregamento rápido e navegação fluida.
- ♿ **Acessível**: Interface pensada para todos os usuários.

---

## 🛠️ Tecnologias Utilizadas

### Core
- **[React](https://react.dev/)** - Biblioteca JavaScript para construção de interfaces.
- **[TypeScript](https://www.typescriptlang.org/)** - Superset tipado do JavaScript.
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utilitário.

### Recursos Adicionais
- **[Unsplash](https://unsplash.com/)** - Imagens de alta qualidade e livres para uso.
- **[Lucide React](https://lucide.dev/)** - Biblioteca de ícones moderna e minimalista.
- **[Google Fonts (Poppins)](https://fonts.google.com/specimen/Poppins)** - Tipografia elegante e legível.
- **[Vercel](https://vercel.com/)** - Plataforma de deploy e hospedagem.

---

## 🎨 Paleta de Cores

| Cor | Hexadecimal | Uso |
|-----|-------------|-----|
| Violeta Principal | `#8B5CF6` | Botões, destaques e elementos interativos |
| Violeta Hover | `#7C3AED` | Estados de hover em botões |
| Violeta Claro | `#C084FC` | Gradientes e elementos secundários |
| Cinza 400 | `#9CA3AF` | Placeholders e textos secundários |
| Cinza 500 | `#6B7280` | Textos auxiliares |
| Cinza 600 | `#4B5563` | Bordas no modo escuro |
| Cinza 700 | `#374151` | Hover de botões escuros |
| Cinza 800 | `#1F2937` | Fundos de elementos no modo escuro |

### Gradiente Principal
```css
background: linear-gradient(to bottom right, #8B5CF6, #C084FC);
```

---

## 📦 Instalação e Execução

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Passo a Passo

1. **Clone o repositório**
```bash
git clone https://github.com/Priscilla-Marinho2005/galeria-de-fotos.git
cd galeria-de-fotos
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Execute o projeto em modo de desenvolvimento**
```bash
npm run dev
# ou
yarn dev
```

4. **Acesse no navegador**
```
http://localhost:5173
```

### Build para Produção

```bash
npm run build
# ou
yarn build
```

---

## 📂 Estrutura do Projeto

```
galeria-de-fotos/
├── node_modules/
├── public/
│   ├── android-chrome-192x192.png
│   ├── android-chrome-512x512.png
│   ├── apple-touch-icon.png
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── favicon.ico
│   └── site.webmanifest
├── src/
│   ├── components/
│   │   └── layout/
│   │       ├── Footer.tsx
│   │       ├── Galery.tsx
│   │       ├── Header.tsx
│   │       └── SearchField.tsx
│   ├── style/
│   │   └── globals.css
│   ├── App.tsx
│   └── main.tsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.app.json
```

---

## 🎯 Requisitos Atendidos

### Layout
- ✅ Cabeçalho com título centralizado.
- ✅ Grid responsivo de fotos.
- ✅ Nome das fotos visível abaixo de cada imagem.
- ✅ Efeitos visuais no hover (escala e sombra).
- ✅ Barra de busca funcional com ícone.
- ✅ Rodapé com informações de copyright.

### Funcionalidades
- ✅ Carregamento de 12 fotos de alta qualidade.
- ✅ Busca em tempo real por palavras-chave.
- ✅ Filtro case-insensitive.
- ✅ Mensagem "Nenhuma foto encontrada" quando aplicável.
- ✅ Responsividade total para diferentes dispositivos.

### Extras Implementados
- ✅ Modo escuro/claro.
- ✅ Animações e transições suaves.
- ✅ TypeScript para maior segurança de tipos.
- ✅ Tooltips nativas ao passar o mouse nas imagens.
- ✅ Design moderno e profissional.

---

## 📱 Responsividade

O layout se adapta perfeitamente a diferentes tamanhos de tela:

- **Mobile** (< 640px): 1 coluna.
- **Tablet Pequeno** (640px - 768px): 2 colunas.
- **Tablet** (768px - 1024px): 3 colunas.
- **Desktop** (> 1024px): 4 colunas.

---

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais como parte do processo seletivo da Aceleradora Ágil.

---

## 👩‍💻 Autora

**Priscilla Marinho Falcão**

- 🌐 [Portfólio](https://priscilla-marinho-falcao.vercel.app/)
- 💼 [LinkedIn](https://www.linkedin.com/in/priscilla-marinho-falc%C3%A3o/)
- 📧 Email: priscillamarinho2005@gmail.com

---

<div align="center">
  
### ⭐ Se você gostou deste projeto, considere dar uma estrela!

**Desenvolvido com 💜 por Priscilla Marinho Falcão | Janeiro de 2026**

</div>