# Projeto de Sistemas Orientado a Objetos

Orientação a objetos é um dos paradigmas de programação mais usados atualmente.
Entender os conceitos e saber aplicá-los são passos importantes para escrever
bons sistemas.

<!-- toc -->

## Os pilares da Orientação a Objetos

São muitos os conceitos que compõe esse paradigma e não é fácil resumí-los
em poucas linhas. Você vai ver que com experiência você criará seus próprios
pontos de vista. De qualquer forma, esse paradigma se constrói sobre os
seguintes pilares:

* Encapsulamento: Quando Alan Key criou o SmallTalk por volta de 1970,
ele acreditava que cada objeto era uma representação de todos os recursos
do computador, sendo, dessa forma, completamente independente. É nesse
contexto que se formou a ideia de encapsulamento. Os seus componentes devem
ser simples o suficiente para poderem ser transportados por toda a aplicação,
sem perderem suas propriedades;
* Polimofismo: É a propriedade de ter várias formas de implementar a mesma
 coisa.
Essa propriedade permite mudanças de comportamento para um mesmo
tipo de componente;
* Herança: É a propriedade de poder extender o comportamento de um componente
sem alterá-lo.

### Recursos

* [[Wikipedia] Orientação a Objetos](https://pt.wikipedia.org/wiki/Orienta%C3%A7%C3%A3o_a_objetos)
* [[Artigo] Orientação a Objetos](http://www.training.com.br/lpmaia/pub_prog_oo.htm)
* [[Artigo] Pilares da Orientação a Objetos]
(https://renatomotzko.wordpress.com/2011/08/29/pilares-da-orientao-a-objetos/)
* [[Artigo] Curiosidade - Early History of SmallTalk (história do SmallTalk)]
(http://worrydream.com/EarlyHistoryOfSmalltalk/) :uk:

## Padrões de Projeto Orientado a Objeto

Os padrões de projeto surgiram e surgem devido a solução de problemas
recorrentes em aplicações orientadas a objetos. São aplicações diretas
dos três pilares citados anteriormente. Conhecer padrões de projeto vai
ajudar você a entender melhor como esse paradigma funciona e como usar
seus poderosos recursos.

### Recursos

* [[Artigo] Padrões de projeto](https://brizeno.wordpress.com/padroes/)
* [[Artigo] Conheça os padrões de projeto](http://www.devmedia.com.br/conheca-os-padroes-de-projeto/957)
* [[Livro] Use a cabeça! Padrões de projeto](https://www.amazon.com.br/Cabe%C3%A7a-Padr%C3%B5es-Projetos-Eric-Freeman/dp/8576081741)
* [[Wikipedia] Padrões de projeto de software](https://pt.wikipedia.org/wiki/Padr%C3%A3o_de_projeto_de_software)

## Domain-Driven Design

Domain-Driven Design é uma abordagem de trabalho em desenvolvimento de software
que não é restrita a orientação a objetos, mas é nesse paradigma que as práticas
e padrões são descritos.

Nessa abordagem, o _domínio_ é o que mais importa, sendo o núcleo do produto, as
necessidades que ele deve atender. Nele estão contidas todas as regras,
restrições e ações que realmente refletem o negócio.

Para falar em domínio, ninguém melhor do que o _cliente_ para descrevê-lo, e
para que o sistema atenda as necessidades desse cliente, a comunicação é
fundamental. Portanto, é necessário que uma **linguagem ubíqua**, uma linguagem
comum, seja construída e utilizada tanto pelo cliente quanto pelos
desenvolvedores que estiverem trabalhando nesse produto.

Seguindo nessa linha, é importante deixar claro o que deve ser desenvolvido de
forma que tanto o cliente quanto os desenvolvedores consigam trocar ideias e
gerar algum tipo de documentação de todas as regras implementadas no sistema.
Em DDD, é indicado que usemos o conceito de **desenvolvimento orientado pelo
modelo**, que pode ser um desenho, um diagrama ou qualquer coisa que facilite a
comunicação. Esse modelo deve ser _vivo_, ou seja, qualquer alteração no modelo
deve refletir alteração no sistema, e qualquer alteração do sistema deve ser
refletida no modelo. Isso ajuda a guiar o trabalho e facilita a organização da
aplicação.

Esse domínio pode ter várias peças, componentes organizados de maneira a
executar uma determinada tarefa ou para refletir um processo de negócio usado
pelo cliente. _Dividir para conquistar_, é um ditado conhecido. Cada componente
deve ter seu **contexto** bem definido e **limitado**, deve ser responsável por
um único aspecto do sistema. Por exemplo: em um sistema de compras _on line_
temos o contexto do cliente, do pagamento, do catálogo, etc. Cada um desses
aspectos da aplicação deve ter uma única preocupação. A isso chamamos de
**contextos limitados**.

É interessante notar que DDD fundamenta várias outras práticas em voga hoje em
dia: _microserviços_, arquitetura _CQRS_ e arquitetura baseada em eventos
(_Event Driven Architecture_) são alguns exemplos.

Mais informações sobre DDD podem ser encontradas nos recursos abaixo.

### Recursos

* [[Portal] Portal da comunidade Domain-Driven Design](http://dddcommunity.org)
  :uk:
* [[Artigo] O que é Domain-Driven Design](http://dddcommunity.org/learning-ddd/what_is_ddd/)
  :uk:
* [[Artigo] Uma introdução a Domain-Driven Design](http://www.agileandart.com/2010/07/16/ddd-introducao-a-domain-driven-design/)
* [InfoQ BR](https://www.infoq.com/br/domain-driven-design)
* [InfoQ EN](https://www.infoq.com/domain-driven-design) :uk:
* [[Minilivro] Domain-Driven Design Quickly]
(https://www.infoq.com/minibooks/domain-driven-design-quickly) :uk: