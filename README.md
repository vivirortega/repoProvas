<div align="center">
<h1>RepoProvas. </h1>
</div>

<h1>Rotas:</h1>

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
