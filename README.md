# Backend

<!-- toc -->

- [Por onde Come�ar](#por-onde-come�ar)
- [Interfaces](#interfaces)
  * [Customer](#Customer)
    + [Read](#Read)
    + [Create](#create)
    + [Update](#update)
	+ [Delete](#delete)
- [C�digo](#c�digo)
  * [Raiz](#raiz)
  * [M�dulos](#M�dulos)
	+ [app.api](#app.api)
	+ [app.routes](#app.routes)
	+ [infra.database](#infra.database)
	+ [infra.express](#infra.express)	
  
<!-- tocstop -->

Backend � uma api de backend para um simples cadastro de cliente.

  - Oferece m�todos CRUD para gerenciamento dos clientes.
  
## Por onde Come�ar

Voc� deve utilizar para constru��o do sistema:
 - node v8.12.0
 - npm v6.4.1
 - mongoDB db version v4.0.3
 - MongoDB shell version v4.0.3
 - Postman
 
No arquivo setup/API.postman_collection.json voc� encontrar� todas as requisi��es para fazer os testes b�sicos da API.

## Interfaces
### Customer
Atrav�s desta interface, � poss�vel gerenciar os clientes nas cole��es do banco de dados.

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

| Recurso |M�todo|Descri��o |
| ------ | ------ | ------ |
| /v1/customer | GET |Retorna todos os clientes cadastrados. |
| /v1/customer/param?id={id} | GET |Retorna um cliente dado o seu ID.|
| /v1/customer/param?email={email} | GET |Retorna um cliente dado o seu e-mail.|
| /v1/customer/param?name={nome ou parte do nome} | GET |Parametro Retorna um ou mais clientes dado um Nome ou parte dele.|

##### Error
>>C�digo 500: Caso n�o seja encontrado nenhum registro, ser� retornado um erro informando que nenhum registro foi informado.

#### Create
##### Url
url sintax: {servidor}:{porta}/{versao}/customer
Exemplo: 
```
POST: localhost:3000/v1/customer
```

| Recurso |M�todo|Descri��o |
| ------ | ------ | ------ |
| /v1/customer | POST |Insere um cliente na base. |

##### Header
� necess�rio informar o header
```
content-type:"application/json"
```

##### Parametros
Para completar a requisi��o � necess�rio enviar um json com os campos abaixo:
| Campo |Descri��o |
| ------ | ------ |
| nome | Nome do Cliente |
| telefone | N�mero do telefone do cliente |
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
>>Status 500: Caso j� exista um usu�rio com o email espec�ficado, ser� retornado um erro informando que o cliente j� existe.

#### Update
##### Url
url sintax: {servidor}:{porta}/{versao}/customer/{id do customer}

Exemplo: 
```
PUT: localhost:3000/v1/customer/abc
```

| Recurso |M�todo|Descri��o |
| ------ | ------ | ------ |
| /v1/customer/{id} | PUT |Atualiza um cliente na base, com base no seu id. |

##### Header
� necess�rio informar o header
```
content-type:"application/json"
```

##### Parametros
Para completar a requisi��o � necess�rio enviar um json com os campos que se deseja atualizar, conforme a tabela abaixo:
| Campo |Descri��o |
| ------ | ------ |
| nome | Nome do Cliente |
| telefone | N�mero do telefone do cliente |
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
>>Status 500: Caso ocorra algum erro durante a atualiza��o, o sistema retornar� um erro.

#### Delete
##### Url
url sintax: {servidor}:{porta}/{versao}/customer/{id}
Exemplos: 
```
DELETE: localhost:3000/v1/customer/abc
```

| Recurso |M�todo|Descri��o |
| ------ | ------ | ------ |
| /v1/customer/{id} | Delete |Remove o cliente dado o seu id. |

##### Error
>>C�digo 500: Caso ocorra algum erro durante a execu��o do procedimento, ser� retornado um erro.

## C�digo

### Raiz
Na raiz do sistema, voce ver� o arquivo server.js respons�vel por iniciar o servidor da aplica��o, al�m de v�rios outros arquivos e pastas descritos abaixo:

| Nome |Descri��o |
| ------ | ------ |
| app | Cont�m o c�digo fonte da aplica��o, dividido em dois m�dulos: api e routes. Esse c�digo � respons�vel por implementar as regras de neg�cio por tras da API, fazer o tratamento de dados e tratamento de erros. |
| data | Arquivos do banco de dados. |
| infra | Possuindo dois m�dulos, esta sess�o tem por finalidade definir as configura��es do servidor Express, configurar e disponibilizar uma interface de m�todos do banco de dados. |
| setup | Algumas configura��es interessantes, como os comandos para selecionar o banco de dados da aplica��o e criar um �ndice, o shellScript mongo.sh, que visa iniciar o servi�o do banco de dados e a collection do postman, com todas as requests necess�rias para invocar as interfaces da API. |

### M�dulos

A aplica��o est� dividida em tr�s partes principais:
    - APP (core): esta � a parte respons�vel por implementar as rotas que ser�o expostas pelo servidor e implementar as regras de neg�cio que definem os comportamentos da aplica��o.
    - INFRA (configura��o): Configura o express, o framework de comunica��o http e o banco de dados. Tamb�m prov� os m�todos de acesso a dados para a a aplica��o.

#### app.api
Este m�dulo � respons�vel por definir os m�todos utilizados para invocar as interfaces do banco de dados, gerenciar erros e transformar dados para retornar ao usu�rio.

##### M�todos

| Nome |Descri��o |
| ------ | ------ |
| api.getAllCustomers | Retorna todos os clientes existentes na base de dados. N�o possui nenhum parametro e retorna um erro caso n�o seja encontrado nenhum cliente. |
| api.getCustomer | Retorna todos os clientes existentes na base de dados que atendam aos parametros informados. Os parametros aceitos por este m�todo devem ser informados como request query parameters: "id", "email" e "name". |
| api.createCustomer | Cria um cliente na base de dados com base em um json enviado no corpo da requisi��o. |
| api.updateCustomer | Atualiza um cliente na base de dados com base em um json enviado no corpo da requisi��o e no id enviado por parametro. Este m�todo n�o suporta query parameters, apenas "request params". |
| api.deleteCustomer | Remove um cliente na base de dados com base no id enviado por parametro. Este m�todo n�o suporta query parameters, apenas "request params". |

#### app.routes
Este m�dulo � respons�vel por definir as rotas da aplica��o que exp�e os m�todos HTTPS.

##### Rotas

| Nome |Descri��o |
| ------ | ------ |
| app.route('/v1/customer') | Define rotas para a cria��o de clientes e leitura da lista de clientes cadastrados. Ambos s�o m�todos que n�o dependem de nenhum parametro. |
| app.route('/v1/customer/:param') | Define rotas que dependem de parametros para serem executadas: getCustomer, updateCustomer e deleteCustomer. |
| api.createCustomer | Cria um cliente na base de dados com base em um json enviado no corpo da requisi��o. |
| app.use(function(err, req, res, next) | Esta rota � utilizada como um middleware de tratamento de erros. |

#### infra.database
Este m�dulo � respons�vel por configurar e instanciar a base de dados e define os m�todos da interface a ser consumida pelo m�dulo app.api.
Tamb�m � respons�vel por configurar e instanciar o express, utilizado para instanciar o servidor no arquivo server.js e permitir a constru��o das rotas no m�dulo app.routes.

##### M�todos

| Nome |Descri��o |
| ------ | ------ |
| findAllCustomer | Retorna todos os clientes cadastrados no sistema. |
| getCustomer | Retorna todos os clientes existentes na base de dados que atendam aos parametros informados. Os parametros aceitos por este m�todo s�o: "id", "email" e "name". |
| insertCustomer | Cria um cliente na base de dados com base em um json enviado como parametro. |
| updateCustomer | Atualiza um cliente na base de dados com base em um json enviado por parametro.. |
| deleteCustomer | Remove um cliente na base de dados com base no id enviado por parametro. |

#### infra.express
M�dulo respons�vel por configurar o express. tamb�m configura midwares para codificar e decodificar json.