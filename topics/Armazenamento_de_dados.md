# Armazenamento de dados

Nas últimas décadas do século XX o banco de dados relacional tornou-se tão
importante que era praticamente uma unamidade. Até que Amazon.com e Google
publicaram papers seminais revelando que utilizavam internamente bancos de dados
não relacionais projetados para escalar horizontalmente -- algo que sempre foi
muito difícil no modelo relacional normalizado.

Esse movimento deu origem ao termo **NoSQL** que significa "não SQL" ou "não
apenas SQL" (Not Only SQL), dependendo de quem define. Em projetos de alguma
complexidade não é raro o uso de um banco de dados relacional junto com um ou
mais bancos de dados não-relacionais. Essa tendência é conhecida como "Poliglot
Persistency", termo cunhado pelo nosso colega Neal Ford e popularizado por outro
colega, o Martin Fowler, em seu
[blog](http://martinfowler.com/bliki/PolyglotPersistence.html).

<!-- toc -->

## Conheça bem o modelo relacional e a linguagem SQL

## Adquira prática com um gerenciador banco de dados relacional

Os mais importantes GBDR no mercado são:

* [MySQL](https://www.mysql.com/) e [MariaDB](https://mariadb.org/) (fork do
  MySQL independente da Oracle)
* [PostgreSQL](https://www.postgresql.org/) (também conhecido como Postgres,
  mas por favor nunca "postgre")
* [Oracle Database](https://www.oracle.com/database/index.html)
* [Microsoft SQL Server](https://www.microsoft.com/pt-br/server-cloud/products/sql-server/overview.aspx)

Além desses sistemas para servidores, também é importante a
[SQLite](https://www.sqlite.org/), uma biblioteca em C com pacotes para várias
linguagens de programação que permite gerenciar um banco de dados relacional no
mesmo processo de uma aplicação. Por economizar recursos, essa solução é muito
popular em aplicativos mobile nativos.

## Conheça alguns modelos diferentes de banco de dados não-relacional

Não é fácil categorizar os bancos de dados não-relacionais -- eles são muito
diversificados em seus modelos de dados e características operacionais. Uma boa
analogia é pensar que bancos de dados não-relacionais são [veículos
especializados](http://www.slideshare.net/ramalho/modelos-ricos/39), tão
especializados que muitas vezes não faz sentido compará-los porque não concorrem
para os mesmos casos de uso.

Mesmo entre sistemas que possuem modelos de dados parecidos, há diferenças
importantes de arquitetura. Por exemplo, o MongoDB e o CouchDB ambos adotam o
modelo de dados documental, com registros complexos, aninhados e sem esquemas
pré-definidos. Porém o MongoDB é otimizado para cenários de atualizações
frequentes, enquanto o CouchDB não lida tão bem com atualizações rápidas mas é
mais avançado na sincronização entre réplicas distribuídas de forma
descentralizada (sem mestres).

### Bancos de dados documentais

* [Amazon DynamoDB](https://aws.amazon.com/pt/dynamodb/) (SaaS)
* [Google Datastore](https://cloud.google.com/datastore/docs/) (SaaS)
* [MongoDB](https://www.mongodb.com/) (multiplataforma)
* [Apache CouchDB](http://couchdb.apache.org/) (multiplataforma)
* [Couchbase](http://www.couchbase.com/) (multiplataforma)
* [RavenDB](https://ravendb.net/) (plataforma .Net)

### Recursos

* [[Livro]NoSQL Essencial](http://novatec.com.br/livros/nosql-essencial/): uma
  visão geral sobre diferentes tipos de bancos de dados não-relacionais.
* [[Artigos]O que é NoSQL?](https://aws.amazon.com/pt/nosql/), a visão da
  Amazon.com, que iniciou o movimento NoSQL com seu
  [DynamoDB](https://aws.amazon.com/pt/dynamodb/)
