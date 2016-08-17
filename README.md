# Guia de Desenvolvimento Técnico

[![License](https://img.shields.io/aur/license/yaourt.svg?maxAge=2592000)](https://github.com/ThoughtWorksInc/guia-de-desenvolvimento-tecnico/blob/master/LICENSE)

## Visão

* **Para** indivíduos e times
* **Que** buscam desenvolver-se tecnicamente
* **O** Guia de Desenvolvimento Técnico é um guia
* **Que** sugere recursos para crescimento
* **Diferentemente** de outros guias
* **Nosso produto** tem como base as experiências da ThoughtWorks e tem como
  objetivo ensinar não só quem quer entrar na ThoughtWorks mas qualquer
  desenvolvedor.

## Introdução

Esse guia provê dicas e recursos para auxiliar no desenvolvimento de suas
habilidades técnicas através de recursos de aprendizagem já existentes.

Esse guia é para todas as pessoas que desejam aprender como se tornar
melhores desenvolvedoras de software.

## 2. Projeto de Sistemas Orientado a Objetos

Orientação a objetos é um dos paradigmas de programação mais usados atualmente.
Entender os conceitos e saber aplicá-los são passos importantes para escrever
bons sistemas.

### Aplique Domain-Driven Design no seu dia-a-dia

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

#### Recursos

* [[Portal] Portal da comunidade Domain-Driven Design](http://dddcommunity.org)
  :us:
* [[Artigo] O que é Domain-Driven Design](http://dddcommunity.org/learning-ddd/what_is_ddd/)
  :us:
* [[Artigo] Uma introdução a Domain-Driven Design](http://www.agileandart.com/2010/07/16/ddd-introducao-a-domain-driven-design/)
* [InfoQ BR](https://www.infoq.com/br/domain-driven-design)
* [InfoQ EN](https://www.infoq.com/domain-driven-design)
  :us:
* [[Minilivro] Domain-Driven Design Quickly](https://www.infoq.com/minibooks/domain-driven-design-quickly)

### Padrões de Projeto Orientado a Objeto

## 3. Arquitetura de Software

## 4. Entrega de Software

Um software, conforme vai sendo desenvolvido, precisa ser entegre, ou "colocado
em produção".

Ao reduzir o tempo de entrega entre uma iteração e outra, podemos encontrar
erros mais rapidamente, entregar valor mais rápido para os clientes do produto
e receber feedback para guiar as próximas iterações.

Para se conseguir atingir uma entrega eficiente, é necessário reduzir os riscos
e o custo do processo, através de automação de testes, automação de
infraestrutura e uma boa integração entre times de desenvolvimentos e operações.

Essa seção trata de técnicas e processos que podem ser utilizados para integrar
e entregar software de maneira mais efetiva.

### Integre seu código continuamente

Integração Contínua é uma prática de desenvolvimento para que os
desenvolvedores do time possam integrar suas mudanças no mesmo repositório de
forma frequente, até várias vezes ao dia.

Isso permite detectar erros mais rapidamente, aumentando a qualidade e trazendo
mais segurança para fazer uma entrega.

#### Recursos

* [[Artigo] Conceitos de Integração Contínua](http://www.linhadecodigo.com.br/artigo/1252/dividir-conquistar-e-integrar-conceitos-de-integracao-continua-para-testadores-ageis.aspx)
* [[Artigo] Continuous Integration](http://martinfowler.com/articles/continuousIntegration.html)
  :us:

### Entregue seu código continuamente

Entrega Contínua significa levar o seu código até o consumidor final de forma
contínua, de forma a conseguir feedback e já usar como insumo para as próximas
entregas.

Entrega Contínua é o próximo passo após a Integração Contínua, a diferença é que
aqui buscamos pegar o que já está integrado e transformar em valor para o
usuário final.

#### Recursos

* [[Livro] Entrega Contínua](https://www.amazon.com.br/Entrega-Cont%C3%ADnua-Entregar-Software-Confi%C3%A1vel/dp/8582601034)
* [[Artigo] E esse negócio de Entrega Contínua?](https://brizeno.wordpress.com/2014/01/27/e-esse-negocio-de-entrega-continua/)
* [[Artigo] Continuous Delivery](http://martinfowler.com/bliki/ContinuousDelivery.html)
  :us:

## 5. Infraestrutura

Nos últimos anos várias tecnologias de gerenciamento de infraestrutura emergiram.

Times de infraestrutura e desenvolvimento de software tem trabalhado cada vez mais
próximos, construindo e gerenciando componentes de infraestrutura utilizando ferramentas
de automatização que são categorizadas como "Infraestrutura como código".

Essas ferramentas partem do princípio de que servidores, rede e outros
componentes de infraestrutura são definidos através de código-fonte executável.

O intuito dessa seção é tratar sobre essa cultura, suas práticas e ferramentas disponíveis.

### Entenda o que é a cultura DevOps

#### Recursos

* [[Artigo] DevOps Culture](http://martinfowler.com/bliki/DevOpsCulture.html) :us:

### Entenda o que é infraestrutura como código

Infraestrutura como código é a prática de definir e gerenciar seus
serviços e componentes através de código-fonte.

Os grandes objetivos dessa prática são criar um processo seguro,
consistente e replicável. Dessa forma, sua infraestrutura potencialmente
se torna mais simples de manter e crescer

#### Recursos

### Entenda o que é computação em nuvem

#### Recursos

## 6. Processos

## 7. Estratégia de qualidade

## 8. Armazenamento de dados

## 9. Segurança

## Contribuições

Ficaremos felizes em aceitar contribuições via GitHub pull requests.

## Aviso Legal

Esse não é um guia ou produto oficial da ThoughtWorks Brasil,
mas contém material de propriedade intelectual da mesma.

Esse guia é resultado da compilação de opiniões de funcionários da
ThoughtWorks Brasil e não necessariamente refletem o posicionamento da empresa.
