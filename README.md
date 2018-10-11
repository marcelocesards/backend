# Backend

Backend � uma api de backend para um simples cadastro de cliente.

  - Oferece m�todos CRUD para gerenciamento dos clientes.
## Interfaces
### Customer
Atrav�s desta interface, � poss�vel gerenciar os clientes nas cole��es do banco de dados.
#### Read
##### Url
url sintax: {servidor}:{porta}/{versao}/customer
Exemplo: 
```
GET: localhost:3000/v1/customer
```

| Recurso |M�todo|Descri��o |
| ------ | ------ | ------ |
| /v1/customer | GET |Retorna todos os clientes cadastrados. |
| /v1/customer?customerId={id} | GET |Retorna um cliente dado o seu ID. |

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
Para completar a requisi��o � necess�rio enviar um json com os parametros abaixo:
| Parametro |Descri��o |
| ------ | ------ |
| nome | Nome do Cliente |
| username | nome de usu�rio |
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