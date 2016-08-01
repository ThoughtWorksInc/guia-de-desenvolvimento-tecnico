# Guia de Excelência Técnica

[![License](https://img.shields.io/aur/license/yaourt.svg?maxAge=2592000)](https://github.com/ThoughtWorksInc/technical-excellence-guide/blob/master/LICENSE)

## Introdução

Esse guia provê dicas e recursos para auxiliar no desenvolvimento de suas
habilidades técnicas através de recursos de aprendizagem já existentes.

Esse guia é para todas as pessoas que desejam aprender como se tornar
melhores desenvolvedoras de software.

## Recomendações e Recursos

##### Índice

1. [Codificação](#codificacao)
  1. [Programe em (pelo menos) uma linguagem de programação orientada a objetos](#programe-em-uma-linguagem-oo)
  2. [Escreva testes automatizados]()
  3. [Construa soluções guiado por testes (TDD)]()
  4. [Saiba utilizar uma IDE e/ou editor de texto]()
  5. [Saiba utilizar um sistema de controle de versão]()
  6. [Saiba como refatorar seu código]()
  7. [Programe em (pelo menos) uma linguagem de programação funcional]()
2. [Projeto de Sistemas Orientado a Objetos](#projeto_oo)
  1. [Aplique Domain-Driven Design no seu dia-a-dia](#aplique-ddd)
  2. [Escreva código limpo]()
3. [Arquitetura de Software]()
  1. [Entenda os diferentes tipo de arquitetura de software]()
  2. [Entenda como conciliar requisitos ortogonais com sua arquitetura]()
  3. [Entenda como conciliar segurança com sua arquitetura]()
4. [Entrega de Software]()
  1. [Integre seu código continuamente]()
  2. [Entregue seu código continuamente]()
5. [Infra-estrutura]()
  1. [Entenda o que é infraestrutura como código]()
  2. [Entenda o que é computação em nuvem]()
6. [Processos]()
7. [Estratégia de qualidade]()
  1. [Análise de Código]()
  2. [Estratégia de testes]()
8. [Armazenamento de dados]()
  1. [Bancos de dados relacionais]()
  2. [Bancos de dados não-relacionais]()
9. [Segurança]()

<a name="codificacao" />
### Codificação

<a name="programe-em-uma-linguagem-oo" />
#### Programe em (pelo menos) uma linguagem de programação orientada a objetos

Programação orientada a objetos é um paradigma de programação que
abstrai os conceitos do mundo real em objetos. Cada objeto possui
seus próprios dados e apenas ele é capaz de manipulá-los.
Esse é um dos paradigmas de programação mais utilizados em aplicações
corporativas. Algumas das linguagens mais famosas são (em ordem
alfabética):

* [C#](https://www.microsoft.com/net)
* [Java](https://java.net)
* [Python](https://www.python.org)
* [Ruby](https://www.ruby-lang.org)

#### Recursos

* [[Curso] Programação Orientada a Objetos em Java](https://www.coursera.org/learn/object-oriented-java) :us:
* [[Curso] Codecademy Java](https://www.codecademy.com/learn/learn-java) :us:
* [[Curso] Codecademy Ruby](https://www.codecademy.com/pt-BR/learn/ruby)
* [[Curso] Codecademy Python](https://www.codecademy.com/pt-BR/learn/python)

<a name="projeto-oo"/>

Orientação a objetos é um dos paradigmas de programação mais usados atualmente. Entender os conceitos e saber aplicá-los são passos importantes para escrever bons sistemas. 

<a name="aplique-ddd" />
#### Aplique Domain-Driven Design no seu dia-a-dia

Domain-Driven Design é uma abordagem de trabalho em desenvolvimento de software que não é restrita a orientação a objetos, mas é nesse paradigma que as práticas e padrões são descritos. 

Nessa abordagem, o _domínio_ é o que mais importa, sendo o núcleo do produto, as necessidades que ele deve atender. Nele estão contidas todas as regras, restrições e ações que realmente refletem o negócio. 

Para falar em domínio, ninguém melhor do que o _cliente_ para descrevê-lo, e para que o sistema atenda as necessidades desse cliente, a comunicação é fundamental. Portanto, é necessário que uma **linguagem ubíqua**, uma linguagem comum, seja construída e utilizada tanto pelo cliente quanto pelos desenvolvedores que estiverem trabalhando nesse produto. 

Seguindo nessa linha, é importante deixar claro o que deve ser desenvolvido de forma que tanto o cliente quanto os desenvolvedores consigam trocar ideias e gerar algum tipo de documentação de todas as regras implementadas no sistema. Em DDD, é indicado que usemos o conceito de **desenvolvimento orientado pelo modelo**, que pode ser um desenho, um diagrama ou qualquer coisa que facilite a comunicação. Esse modelo deve ser _vivo_, ou seja, qualquer alteração no modelo deve refletir alteração no sistema, e qualquer alteração do sistema deve ser refletida no modelo. Isso ajuda a guiar o trabalho e facilita a organização da aplicação.

Esse domínio pode ter várias peças, componentes organizados de maneira a executar uma determinada tarefa ou para refletir um processo de negócio usado pelo cliente. _Dividir para conquistar_, é um ditado conhecido. Cada componente deve ter seu **contexto** bem definido e **limitado**, deve ser responsável por um único aspecto do sistema. Por exemplo: em um sistema de compras _on line_ temos o contexto do cliente, do pagamento, do catálogo, etc. Cada um desses aspectos da aplicação deve ter uma única preocupação. A isso chamamos de **contextos limitados**. 

Há mais para ser falado sobre DDD:

[Uma introdução a Domain-Driven Design](http://www.agileandart.com/2010/07/16/ddd-introducao-a-domain-driven-design/)

## Contribuições

Ficaremos felizes em aceitar contribuições via GitHub pull requests.

## Aviso Legal

Esse não é um guia ou produto oficial da ThoughtWorks Brasil,
mas contém material de propriedade intelectual da mesma.

Esse guia é resultado da compilação de opiniões de funcionários da
ThoughtWorks Brasil e não necessariamente refletem o posicionamento da empresa.
