# Backend

Backend é uma api de backend para um simples cadastro de cliente.

  - Oferece métodos CRUD para gerenciamento dos clientes.
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