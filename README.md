# Backend

<!-- toc -->

- [Por onde Começar](#por-onde-começar)
- [Interfaces](#interfaces)
  * [Customer](#Customer)
    + [Read](#Read)
    + [Create](#create)
    + [Update](#update)
	+ [Delete](#delete)
- [Código](#código)
  * [Raiz](#raiz)
  * [Módulos](#Módulos)
	+ [app.api](#app.api)
	+ [app.routes](#app.routes)
	+ [infra.database](#infra.database)
	+ [infra.express](#infra.express)	
  
<!-- tocstop -->

Backend é uma api de backend para um simples cadastro de cliente.

  - Oferece métodos CRUD para gerenciamento dos clientes.
  
## Por onde Começar

Você deve utilizar para construção do sistema:
 - node v8.12.0
 - npm v6.4.1
 - mongoDB db version v4.0.3
 - MongoDB shell version v4.0.3
 - Postman
 
No arquivo setup/API.postman_collection.json você encontrará todas as requisições para fazer os testes básicos da API.

## Interfaces
### Customer
Através desta interface, é possível gerenciar os clientes nas coleções do banco de dados.

#### Read
##### Url
url sintax: {servidor}:{porta}/{versao}/customer/(param?={id|email|nome})
Exemplos: 
```
GET: localhost:3000/v1/customer
GET: localhost:3000/v1/customer/param?id=abcd
GET: localhost:3000/v1/customer/param?email=marcelo@gmail.com
GET: localhost:3000/v1/customer/param?name=maRc
```

| Recurso |Método|Descrição |
| ------ | ------ | ------ |
| /v1/customer | GET |Retorna todos os clientes cadastrados. |
| /v1/customer/param?id={id} | GET |Retorna um cliente dado o seu ID.|
| /v1/customer/param?email={email} | GET |Retorna um cliente dado o seu e-mail.|
| /v1/customer/param?name={nome ou parte do nome} | GET |Parametro Retorna um ou mais clientes dado um Nome ou parte dele.|

##### Error
>>Código 500: Caso não seja encontrado nenhum registro, será retornado um erro informando que nenhum registro foi informado.

#### Create
##### Url
url sintax: {servidor}:{porta}/{versao}/customer
Exemplo: 
```
POST: localhost:3000/v1/customer
```

| Recurso |Método|Descrição |
| ------ | ------ | ------ |
| /v1/customer | POST |Insere um cliente na base. |

##### Header
É necessário informar o header
```
content-type:"application/json"
```

##### Parametros
Para completar a requisição é necessário enviar um json com os campos abaixo:
| Campo |Descrição |
| ------ | ------ |
| nome | Nome do Cliente |
| telefone | Número do telefone do cliente |
| email | Email do cliente |
| password | Senha do cliente |

Exemplo:
``` json
{
    "nome": "Lucas Silva e Silva",
    "username": "lucasssilva",
    "telefone": "11544443335",
    "email": "lucas.silva@gmail.com",
    "password": "123456"
}
```
##### Error
>>Status 500: Caso já exista um usuário com o email específicado, será retornado um erro informando que o cliente já existe.

#### Update
##### Url
url sintax: {servidor}:{porta}/{versao}/customer/{id do customer}

Exemplo: 
```
PUT: localhost:3000/v1/customer/abc
```

| Recurso |Método|Descrição |
| ------ | ------ | ------ |
| /v1/customer/{id} | PUT |Atualiza um cliente na base, com base no seu id. |

##### Header
É necessário informar o header
```
content-type:"application/json"
```

##### Parametros
Para completar a requisição é necessário enviar um json com os campos que se deseja atualizar, conforme a tabela abaixo:
| Campo |Descrição |
| ------ | ------ |
| nome | Nome do Cliente |
| telefone | Número do telefone do cliente |
| email | Email do cliente |
| password | Senha do cliente |

Exemplo:
``` json
{
    "nome": "Lucas Silva e Silva",
    "username": "lucasssilva",
    "telefone": "11544443335",
    "email": "lucas.silva@gmail.com",
    "password": "123456"
}
```

Exemplo 2:
``` json
{
    "email": "lucas.silva@gmail.com"
}
```
##### Error
>>Status 500: Caso ocorra algum erro durante a atualização, o sistema retornará um erro.

#### Delete
##### Url
url sintax: {servidor}:{porta}/{versao}/customer/{id}
Exemplos: 
```
DELETE: localhost:3000/v1/customer/abc
```

| Recurso |Método|Descrição |
| ------ | ------ | ------ |
| /v1/customer/{id} | Delete |Remove o cliente dado o seu id. |

##### Error
>>Código 500: Caso ocorra algum erro durante a execução do procedimento, será retornado um erro.

## Código

### Raiz
Na raiz do sistema, voce verá o arquivo server.js responsável por iniciar o servidor da aplicação, além de vários outros arquivos e pastas descritos abaixo:

| Nome |Descrição |
| ------ | ------ |
| app | Contém o código fonte da aplicação, dividido em dois módulos: api e routes. Esse código é responsável por implementar as regras de negócio por tras da API, fazer o tratamento de dados e tratamento de erros. |
| data | Arquivos do banco de dados. |
| infra | Possuindo dois módulos, esta sessão tem por finalidade definir as configurações do servidor Express, configurar e disponibilizar uma interface de métodos do banco de dados. |
| setup | Algumas configurações interessantes, como os comandos para selecionar o banco de dados da aplicação e criar um índice, o shellScript mongo.sh, que visa iniciar o serviço do banco de dados e a collection do postman, com todas as requests necessárias para invocar as interfaces da API. |

### Módulos

A aplicação está dividida em três partes principais:
    - APP (core): esta é a parte responsável por implementar as rotas que serão expostas pelo servidor e implementar as regras de negócio que definem os comportamentos da aplicação.
    - INFRA (configuração): Configura o express, o framework de comunicação http e o banco de dados. Também provê os métodos de acesso a dados para a a aplicação.

#### app.api
Este módulo é responsável por definir os métodos utilizados para invocar as interfaces do banco de dados, gerenciar erros e transformar dados para retornar ao usuário.

##### Métodos

| Nome |Descrição |
| ------ | ------ |
| api.getAllCustomers | Retorna todos os clientes existentes na base de dados. Não possui nenhum parametro e retorna um erro caso não seja encontrado nenhum cliente. |
| api.getCustomer | Retorna todos os clientes existentes na base de dados que atendam aos parametros informados. Os parametros aceitos por este método devem ser informados como request query parameters: "id", "email" e "name". |
| api.createCustomer | Cria um cliente na base de dados com base em um json enviado no corpo da requisição. |
| api.updateCustomer | Atualiza um cliente na base de dados com base em um json enviado no corpo da requisição e no id enviado por parametro. Este método não suporta query parameters, apenas "request params". |
| api.deleteCustomer | Remove um cliente na base de dados com base no id enviado por parametro. Este método não suporta query parameters, apenas "request params". |

#### app.routes
Este módulo é responsável por definir as rotas da aplicação que expõe os métodos HTTPS.

##### Rotas

| Nome |Descrição |
| ------ | ------ |
| app.route('/v1/customer') | Define rotas para a criação de clientes e leitura da lista de clientes cadastrados. Ambos são métodos que não dependem de nenhum parametro. |
| app.route('/v1/customer/:param') | Define rotas que dependem de parametros para serem executadas: getCustomer, updateCustomer e deleteCustomer. |
| api.createCustomer | Cria um cliente na base de dados com base em um json enviado no corpo da requisição. |
| app.use(function(err, req, res, next) | Esta rota é utilizada como um middleware de tratamento de erros. |

#### infra.database
Este módulo é responsável por configurar e instanciar a base de dados e define os métodos da interface a ser consumida pelo módulo app.api.
Também é responsável por configurar e instanciar o express, utilizado para instanciar o servidor no arquivo server.js e permitir a construção das rotas no módulo app.routes.

##### Métodos

| Nome |Descrição |
| ------ | ------ |
| findAllCustomer | Retorna todos os clientes cadastrados no sistema. |
| getCustomer | Retorna todos os clientes existentes na base de dados que atendam aos parametros informados. Os parametros aceitos por este método são: "id", "email" e "name". |
| insertCustomer | Cria um cliente na base de dados com base em um json enviado como parametro. |
| updateCustomer | Atualiza um cliente na base de dados com base em um json enviado por parametro.. |
| deleteCustomer | Remove um cliente na base de dados com base no id enviado por parametro. |

#### infra.express
Módulo responsável por configurar o express. também configura midwares para codificar e decodificar json.