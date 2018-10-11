# Backend

Backend é uma api de backend para um simples cadastro de cliente.

  - Oferece métodos CRUD para gerenciamento dos clientes.
## Interfaces
### Customer
Através desta interface, é possível gerenciar os clientes nas coleções do banco de dados.

sintax: {servidor}:{porta}/{versao}/customer
Exemplo: 
```
GET: localhost:3000/v1/customer
```
| Recurso | Descrição |
| ------ | ------ |
| /v1/customer |Retorna todos os clientes cadastrados. |
