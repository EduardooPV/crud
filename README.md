### Step 01: 
- Downlaod [XAMPP](https://www.apachefriends.org/pt_br/index.html)
- Download [HeidiSQL](https://www.heidisql.com/download.php) (IDE MYSQL)
- Criação do banco de dados (MySQL)
- Criação de duas tabelas (FK entre elas)
  - Usuario
  - Profissao
- Teste de uma query básica
   - ```sql
      SELECT usuario.nome, profissao.nome 
      FROM profissao 
      JOIN usuario 
      ON profissao.id = usuario.profissao_id
- Adicionar dotenv (Segurança para a conexão com o banco)
---

### Step 02:
- Conexão com o banco de dados
- Criação da API [Express](https://expressjs.com/)
- Criação das rotas
  - GET()
  - POST()
  - DELETE()
- Criação das funções CRUD 
  - Create;
  - Read;
  - Delete;

### Step 03:
  - Criação da rota 
    - PUT/PATCH()
  - Criação da função
    - Update;
    
  - Adição do Cors()
  - Frontend
    - Tabela listagem
    - Botão de cadastro
    - Formulário criação
    - Na listagem, botão de deletar/atualizar
  - Integração com o backend

### Step 04: 
  - Refinamento do projeto.
