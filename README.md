<h1 align="center">
  Desafio: API para Controle de
  Pets de uma ONG
</h1>

<p align="center">
 <img src="https://img.shields.io/static/v1?label=Dev&message=Ivan Santos&color=8257E5&labelColor=000000" alt="@ivan_santos" />
 <img src="https://img.shields.io/static/v1?label=Tipo&message=Desafio&color=8257E5&labelColor=000000" alt="Desafio" />
</p>

API para gerenciar cadastro de animais/pets (CRUD) que faz parte do desafio para desenvolvedores, que se candidatam para a NectarLabs.

## Tecnologias
 
- [NodeJs - v21.6.1](https://nodejs.org/en)
- [Express](https://expressjs.com/pt-br/)
- [MySQL](https://www.mysql.com/)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [Docker](https://www.docker.com/)
- [Postman](https://www.postman.com/)

## Práticas adotadas

- API REST
- Consultas com express Data
- Injeção de Dependências
- Tratamento de respostas de erro

## Como Executar

- Clonar repositório git
```
$ git clone https://github.com/ivancarlosantos/backend.git
```
- Construir o projeto:

Caso desejar usar container Docker para persistência, na raíz do projeto, executar:
```
$ docker-compose up -d
```

Com a base de dados ativa, inicializar o projeto
- Executar a aplicação:
```
$ npm start
```

A API poderá ser acessada em [http://localhost:5000](http://localhost:5000).

## API Endpoints

Para fazer as requisições HTTP abaixo, foi utilizada a ferramenta [Postman](https://www.postman.com/):

- Cadastrar um Pet 
```
$ http POST :5000/pets nome="nome" idade=1 especie="especie" raca="raça" adotado="sim/nao" data_adocao="1999-01-31"

[
  {
    "id": 1,
    "nome": "nome",
    "idade": 1,
    "especie": "especie",
    "raca": "raça",
    "adotado": "sim/nao",
    "data_adocao": "1999-01-31",
  }
]
```

- Listar Pets cadastrados
```
$ http GET :5000/pets

[
  {
    "id": 1,
    "nome": "nome",
    "idade": 1,
    "especie": "especie",
    "raca": "raça",
    "adotado": "sim/nao",
    "data_adocao": "1999-01-31",
  }
]
```
- Listar Pets adotados e não adotados
```
$ http GET :5000/pets/adopt/{sim/nao}

[
  {
    "id": 1,
    "nome": "nome",
    "idade": 1,
    "especie": "especie",
    "raca": "raça",
    "adotado": "sim/nao",
    "data_adocao": "1999-01-31",
  }
]
```

- Atualizar Pet
```
$ http PUT 5000:pets/adopt/1 nome="nome" idade=1 especie="especie" raca="raça" adotado="sim/nao" data_adocao="1999-01-31"

[
  {
    "id": 1,
    "nome": "nome",
    "idade": 1,
    "especie": "especie",
    "raca": "raça",
    "adotado": "sim/nao",
    "data_adocao": "1999-01-31",
  }
]
```

- Remover Pet
```
http DELETE :5000/pets/1
[ ]
```