# 📝 Lisync — Gerenciador de Tarefas Full Stack

> Aplicação de lista de tarefas (To-Do List) com backend em Node.js puro e frontend em React + Vite, integrados via API REST.

---

## 📖 Descrição do Projeto

O **Lisync** é uma aplicação full stack de gerenciamento de tarefas desenvolvida como projeto acadêmico com dois objetivos distintos:

- **Backend:** Construir uma API REST funcional utilizando **apenas Node.js puro** (módulo nativo `http`), sem nenhum framework como Express. O objetivo é compreender como uma API funciona internamente, antes de qualquer abstração.
- **Frontend:** Construir uma interface moderna e reativa com **React + Vite**, consumindo a API criada.

Os dois projetos foram integrados em um único monorepo, compartilhando a mesma estrutura de pastas e se comunicando via requisições HTTP.

---

## ✨ Funcionalidades

- ✅ Listar todas as tarefas
- ✅ Adicionar nova tarefa
- ✅ Marcar tarefa como concluída
- ✅ Remover tarefa (pendente ou concluída)
- ✅ Persistência de dados em arquivo `db.json` (sem banco de dados externo)
- ✅ Separação visual entre tarefas pendentes e concluídas

---

## 🛠️ Tecnologias Utilizadas

### Backend
| Tecnologia | Uso |
|---|---|
| Node.js (puro) | Servidor HTTP sem frameworks |
| Módulo `http` nativo | Criação do servidor e roteamento manual |
| Módulo `fs` nativo | Persistência de dados em JSON |
| ES Modules (`import/export`) | Sistema de módulos |
| `dotenv` | Variáveis de ambiente |

### Frontend
| Tecnologia | Uso |
|---|---|
| React 18 | Interface de usuário |
| Vite | Bundler e servidor de desenvolvimento |
| Fetch API | Comunicação com o backend |
| SweetAlert2 | Alertas e confirmações |

---

## 🏗️ Estrutura do Projeto

```
lisync/
├── src/
│   ├── components/
│   │   ├── controllers/
│   │   │   └── tasksController.js   # Lógica dos endpoints (backend)
│   │   ├── database/
│   │   │   └── db.json              # Persistência de dados
│   │   ├── hooks/
│   │   │   └── addTarefas.jsx       # Hook React com estado e chamadas à API
│   │   ├── model/
│   │   │   └── taskModel.js         # Modelo de tarefa (backend)
│   │   ├── routes/
│   │   │   └── taskRoutes.js        # Roteamento manual HTTP (backend)
│   │   ├── screens/                 # Componentes de tela (frontend)
│   │   │   ├── content/
│   │   │   ├── footer/
│   │   │   ├── header/
│   │   │   └── listTasks/
│   │   └── services/
│   │       ├── alerts.jsx           # Alertas com SweetAlert2 (frontend)
│   │       ├── fetch.js             # Chamadas à API REST (frontend)
│   │       └── taskService.js       # Regras de negócio e persistência (backend)
│   ├── App.jsx                      # Componente raiz do React
│   ├── main.jsx                     # Entry point do React
│   └── server.js                    # Entry point do servidor Node.js
├── .env                             # Variáveis de ambiente
├── package.json
└── vite.config.js
```

---

## ⚙️ Como Configurar o Ambiente

### Pré-requisitos

- [Node.js](https://nodejs.org/) v18 ou superior
- npm v9 ou superior

### Variáveis de Ambiente

Crie um arquivo `.env` na **raiz do projeto** com o seguinte conteúdo:

```env
# Backend (Node.js)
PORT_BACKEND=3000
ADRESS=http://localhost:

# Frontend (Vite) — prefixo VITE_ obrigatório
VITE_API_URL=http://localhost:3000
```

> ⚠️ **Atenção:** O Vite exige que variáveis de ambiente usadas no frontend tenham o prefixo `VITE_`. Variáveis sem esse prefixo não são expostas ao browser.

---

## 📦 Como Instalar as Dependências

Clone o repositório e instale as dependências:

```bash
# 1. Clonar o repositório
git clone https://github.com/seu-usuario/lisync.git

# 2. Entrar na pasta do projeto
cd lisync

# 3. Instalar as dependências
npm install
```

---

## ▶️ Como Executar

O projeto possui um comando único que sobe o backend e o frontend simultaneamente usando o `concurrently`:

```bash
npm run start
```

Isso irá iniciar:
- 🖥️ **Backend** em `http://localhost:3000`
- 🌐 **Frontend** em `http://localhost:5173`

### Rodar separadamente (opcional)

```bash
# Apenas o backend
node src/server.js

# Apenas o frontend
npm run dev
```

---

## 🔌 Endpoints da API

| Método | Rota | Descrição |
|---|---|---|
| `GET` | `/tasks` | Lista todas as tarefas |
| `GET` | `/tasks/:id` | Busca uma tarefa por ID |
| `POST` | `/tasks` | Cria uma nova tarefa |
| `PUT` | `/tasks/:id` | Atualiza título ou status de uma tarefa |
| `DELETE` | `/tasks/:id` | Remove uma tarefa |

### Exemplo de body para `POST /tasks`:
```json
{
  "title": "Estudar Node.js"
}
```

### Exemplo de body para `PUT /tasks/:id`:
```json
{
  "title": "Estudar Node.js puro",
  "completed": true
}
```

---

## 💡 Explicação da Solução

### Como o problema foi resolvido

O projeto uniu dois trabalhos acadêmicos em um único monorepo:

1. **Backend em Node.js puro:** O servidor é criado com o módulo nativo `http`. O roteamento é feito manualmente em `taskRoutes.js`, verificando `req.url` e `req.method` em cada requisição. Não há nenhum framework — toda a lógica de parsing do body, status codes e serialização JSON é feita à mão.

2. **Frontend em React + Vite:** A interface consome a API via `Fetch API`. O estado da aplicação é gerenciado com `useState` e `useEffect` dentro de um custom hook (`useTarefas`), que centraliza todas as operações de CRUD.

3. **Integração:** O CORS foi habilitado manualmente no servidor Node (`Access-Control-Allow-Origin: *`), e as variáveis de ambiente foram separadas entre contexto Node (`process.env`) e contexto Vite (`import.meta.env`).

### Decisões técnicas

| Decisão | Motivo |
|---|---|
| ES Modules no backend | Compatibilidade com o React/Vite no mesmo repositório. O objetivo pedagógico (entender a API internamente) foi mantido |
| `db.json` para persistência | Sem dependências externas, mantendo o foco no módulo `fs` nativo |
| `concurrently` para execução | Facilita o desenvolvimento rodando os dois servidores com um único comando |
| `id` numérico como identificador | Evita bugs de filtragem ao usar índices de array que mudam após remoções |

---

## 📺 Demonstração em Vídeo

Confira a apresentação do projeto, onde explico as funcionalidades, a estrutura de pastas e a implementação técnica:

👉 **[Assista ao vídeo no YouTube](https://youtu.be/leRua6Tclwg)**

-----

> espero que tenha gostado =]