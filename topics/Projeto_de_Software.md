# Projeto de Software

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
* [[Minilivro] Domain-Driven Design Quickly](https://www.infoq.com/minibooks/domain-driven-design-quickly)
  :uk:
