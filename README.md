# 📊 StudyDev – Word Usage Analyzer

Projeto desenvolvido com foco em **portfólio**, **aprendizado de JavaScript** e **apoio ao estudo de inglês**, analisando as palavras mais usadas no cotidiano a partir de textos reais do Reddit.

A aplicação compara conteúdos de subreddits dos **Estados Unidos** e do **Brasil**, processando os textos e exibindo as palavras mais frequentes de cada contexto.

---

## 🚀 Objetivo do Projeto

* Praticar **JavaScript moderno (ES Modules)**
* Trabalhar com **API REST própria (Node.js + Express)**
* Consumir dados reais sem precisar baixar datasets manualmente
* Analisar linguagem natural de forma simples
* Criar um projeto **explicável em entrevistas técnicas**

---

## 🧠 Como funciona

1. O frontend envia uma requisição para a API informando o país (EUA ou Brasil)
2. O backend busca textos de subreddits relevantes usando a API pública do Reddit
3. Os textos são processados:

   * normalização
   * remoção de caracteres desnecessários
   * contagem de frequência das palavras
4. A API retorna as **10 palavras mais usadas**
5. O frontend exibe o resultado em tabela

---

## 🛠️ Tecnologias Utilizadas

### Backend

* Node.js
* Express
* JavaScript (ESM)
* Reddit Public API

### Frontend

* HTML5 semântico
* CSS3 (layout limpo e responsivo)
* JavaScript puro (Vanilla JS)

---

## 📂 Estrutura do Projeto

```
StudyDev/
├── backend/
│   ├── routes/
│   │   └── analyzeRoutes.js
│   ├── services/
│   │   ├── redditService.js
│   │   └── textProcessingService.js
│   └── server.js
│
├── frontend/
│   ├── index.html
│   ├── styles.css
│   └── app.js
│
└── README.md
```

---

## 🔗 Endpoints da API

### `GET /analyze`

**Parâmetros de query:**

* `country=usa`
* `country=brazil`

**Exemplo:**

```
/analyze?country=usa
```

**Resposta:**

```json
{
  "country": "usa",
  "language": "en",
  "totalTexts": 50,
  "topWords": [
    { "word": "the", "count": 120 },
    { "word": "you", "count": 95 }
  ]
}
```

---

## ▶️ Como rodar o projeto localmente

### Pré-requisitos

* Node.js 18+

### Backend

```bash
cd backend
node server.js
```

Servidor rodando em:

```
http://localhost:3001
```

### Frontend

Abra o arquivo:

```
frontend/index.html
```

Diretamente no navegador.

---

## 📈 Possíveis melhorias futuras

* Comparação visual EUA x Brasil lado a lado
* Gráficos com Chart.js
* Filtro de quantidade de palavras
* Remoção de stopwords avançada
* Deploy (Vercel / Render)

---

## 👤 Autor

**Adriano Dantas**
Estudante de Análise e Desenvolvimento de Sistemas
Foco em JavaScript, Backend e Qualidade de Software

🔗 GitHub: [https://github.com/DantasDeveloperr](https://github.com/DantasDeveloperr)

---

## 📌 Observação

Projeto desenvolvido com foco educacional e de portfólio, utilizando dados públicos do Reddit apenas para fins de estudo.
