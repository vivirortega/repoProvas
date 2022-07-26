<div align="center">
<h1>RepoProvas. 📖 </h1>
<a href="https://repoprovasz.herokuapp.com/">deploy: repoprovas - heroku</a>
</div>
<h2>Sobre o projeto:</h1>
RepoProvas é um sistema de compartilhamento de provas entre estudantes!
<h2>Tecnologias:</h1>
<div align="center">
<img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white">
<img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB">
<img src="https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens">
</div>
<h2>Rotas:</h1>

```yml 
POST /sign-up
    - Rota para cadastrar um novo usuário
    - headers: {}
    - body:{
        "email": "lorem@gmail.com",
        "password": "loremipsum" 
} 
```

```yml 
POST /login
    - Rota para fazer login
    - headers: {}
    - body:{
        "email": "lorem@gmail.com",
        "password": "loremipsum" 
} 
```

```yml 
POST /create-test
    - Rota para criar um cadastro de prova
    - headers: "Authorization": "Bearer $token"
    - body:{
        "name": "javascript",
        "pdfUrl": "loremipsum",
        "categoryId": 1,
        "teacherDisciplineId": 1
} 
```

```yml 
GET /tests/disciplines
    - Rota para ver as provas por disciplinas
    - headers: "Authorization": "Bearer $token"
    - body:{} 
```

```yml 
GET /tests/teachers
    - Rota para ver as provas por professores
    - headers: "Authorization": "Bearer $token"
    - body:{} 
```

<h2>Como rodar a aplicação:</h1>

<h3>Clone o repositório:</h3>

```
$ git clone https://github.com/matheuslnmoura/projeto17-linkr_back-end:git
```
<h3>Instale as dependências:</h3>

```
$ npm or yarn install
```
<h3>Inicie a API com o comando:</h3>

```
$ npm run dev
```
