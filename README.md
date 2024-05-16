# Aplicação Nest para catálogo de filmes

Este é um projeto de uma API RESTful em JSON para um catálogo de filmes, com autenticação JWT e uma CRUD para gerenciar os filmes. Todos os endpoints da CRUD só podem ser acessados por um usuário autenticado, que tem o login como admin, e sua senha é definida como admin123, essas informações podem ser modificadas,e  podem ser definidas no arquivo .env. A aplicação foi desenvolvida usando TypeScript, Nest.js, TypeORM, Swagger, Docker, Redis e PostgreSQL.

### 📋 Pré-requisitos

Para conseguir acompanhar esse projeto, tem que ter conhecimento principalmente de nest, a partir desse conhecimento pode buscar como funciona outras ferramentes aqui utilizadas. Não é necessário conhecimento de docker.

### 🔧 Rodando Localmente

Para rodar localmente tem que ter o docker instalado para rodar o nosso container, com o docker instalado basta seguir os seguintes passos:

- docker-compose up -> necessário para rodar o nosso conteiner com o banco de dados. Ao rodar ele um banco postgress tem que ser criado no endpoint http://localhost:8080/ . A partir desse endpoint as seguintes informações tem que ser preenchidas => sistema: PostgreSQL, servidor: db, usuário: pguser, senha: pgpassword.
- para rodar a aplicação nest basta usar o comando npm run dev.

## ⚙️ Executando os testes

Para executar os testes temos que olhar os endpoints presentes na api, eles podem ser vistos no endpoint do swagger http://localhost:3000/api#/ , lá todos os endpoints estão presentes. Mas para conseguir rodar tudo certo, utilizando autenticação jwt, temos que rodar da seguinte forma:

- primeiro devemos fazer uma requisição para o endpoint /auth/login o body deve conter as seguintes informações que foram pré-definidas em nossa aplicação : {"username":"admin","password": "admin123"}. A resposta desse endpoint será um token jwt que terá que ser utilizado em todas as outras requisições.
- para fazer os outros testes, basta ir no endpoint do swagger e rodar de acordo com o body que está lá.
