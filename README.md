# API de Transferências e Usuários

Esta API permite registrar usuários, realizar login, consultar usuários e efetuar transferências de valores entre usuários. O banco de dados é em memória, ideal para testes e automação de APIs.

## Instalação

1. Clone o repositório ou copie os arquivos para seu ambiente.
2. Instale as dependências:
   ```bash
   npm install express swagger-ui-express
   ```

## Execução

Para iniciar o servidor:
```bash
node server.js
```
A API estará disponível em `http://localhost:3000`.

## Documentação Swagger

Acesse a documentação interativa em:
```
http://localhost:3000/api-docs
```

## Endpoints

- `POST /users/register`: Registra novo usuário
- `POST /users/login`: Realiza login
- `GET /users`: Lista usuários
- `POST /transfer`: Realiza transferência
- `GET /transfer`: Lista transferências

## Regras de Negócio

- Login exige usuário e senha.
- Não é permitido registrar usuários duplicados.
- Transferências para destinatários não favorecidos só podem ser realizadas se o valor for menor que R$ 5.000,00.

## Estrutura de Diretórios

- `controller/`: Rotas e lógica de entrada
- `service/`: Regras de negócio
- `model/`: Dados em memória
- `app.js`: Configuração do Express
- `server.js`: Inicialização do servidor
- `swagger.json`: Documentação Swagger

## Testes

Para testes automatizados, importe o `app.js` em seu framework de testes (ex: Supertest).

---
