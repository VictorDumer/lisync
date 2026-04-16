# 📝 LISYNC - Gerenciador de Tarefas

O **LISYNC** é uma aplicação web de gerenciamento de tarefas (To-Do List) moderna e intuitiva, desenvolvida para ajudar pessoas criativas a organizar sua rotina, priorizar afazeres e visualizar seu progresso diário.

-----

## 📺 Demonstração em Vídeo

Confira a apresentação completa do projeto, onde explico as funcionalidades, a estrutura de pastas e a implementação técnica:

👉 **[Assista ao vídeo no YouTube](https://youtu.be/waRrnj2gd-4)**

-----

## 🚀 Funcionalidades

  - **Adição de Tarefas:** Interface simples para inserir novas atividades.
  - **Lista de Pendentes:** Visualize tudo o que ainda precisa ser feito.
  - **Conclusão de Tarefas:** Mova tarefas para a seção "Concluídas" com um clique.
  - **Exclusão:** Remova tarefas de ambas as listas com confirmação visual.
  - **Alertas Interativos:** Uso de `SweetAlert2` para feedbacks de sucesso, aviso e confirmação de exclusão.
  - **Contador Dinâmico:** Monitoramento em tempo real da quantidade de tarefas pendentes e data atual.
  - **Design Responsivo:** Interface estilizada com foco na experiência do usuário.

-----

## 🛠️ Tecnologias e Conceitos Utilizados

Este projeto foi construído utilizando conceitos avançados de React:

  - **Hooks Customizados:** Centralização da lógica de estado no `useTarefas`.
  - **Imutabilidade:** Manipulação de arrays utilizando `filter` e `spread operator`.
  - **Componentização:** Divisão da UI em Header, Content, List e Footer.
  - **Vite:** Ferramenta de build rápida para o desenvolvimento.

-----

## 📁 Estrutura de Pastas

```text
src/
├── assets/          # Ícones e imagens (SVG/PNG)
├── components/
│   ├── hooks/       # Lógica de estado (useTarefas.jsx)
│   └── screens/     # Componentes de interface (Header, Footer, Content, List)
├── services/        # Configurações de alertas (SweetAlert2)
├── App.jsx          # Componente principal 
└── main.jsx         # Ponto de entrada do React
```

-----

## 🔧 Como Baixar e Executar o Projeto

Siga os passos abaixo para rodar o projeto localmente:

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/VictorDumer/lisync.git
    ```

2.  **Entre na pasta do projeto:**

    ```bash
    cd lisync
    ```

3.  **Instale as dependências:**
    *(Certifique-se de ter o Node.js instalado)*

    ```bash
    npm install
    ```

4.  **Inicie o servidor de desenvolvimento:**

    ```bash
    npm run dev
    ```

5.  **Acesse no navegador:**
    O Vite informará uma URL (geralmente `http://localhost:5173`).

> espero que tenha gostado =]