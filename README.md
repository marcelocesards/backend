# Backend

Backend � uma api de backend para um simples cadastro de cliente.

  - Oferece m�todos CRUD para gerenciamento dos clientes.
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