# Backend

Backend é uma api de backend para um simples cadastro de cliente.

  - Oferece métodos CRUD para gerenciamento dos clientes.
## Interfaces
### Customer
Através desta interface, é possível gerenciar os clientes nas coleções do banco de dados.
#### Read
##### Url
url sintax: {servidor}:{porta}/{versao}/customer
Exemplo: 
```
GET: localhost:3000/v1/customer
```

| Recurso |Método|Descrição |
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

| Recurso |Método|Descrição |
| ------ | ------ | ------ |
| /v1/customer | POST |Insere um cliente na base. |

##### Header
É necessário informar o header
```
content-type:"application/json"
```

##### Parametros
Para completar a requisição é necessário enviar um json com os parametros abaixo:
| Parametro |Descrição |
| ------ | ------ |
| nome | Nome do Cliente |
| username | nome de usuário |
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