# Guia de Excelência Técnica

[![License](https://img.shields.io/aur/license/yaourt.svg?maxAge=2592000)](https://github.com/ThoughtWorksInc/technical-excellence-guide/blob/master/LICENSE)

## Visão
 - **Para** indivíduos e times
 - **Que** buscam desenvolver-se tecnicamente
 - **O** Guia de Excelência Técnica é um guia
 - **Que** sugere recursos para crescimento
 - **Diferentemente** de outros guias
 - **Nosso produto** tem como base as experiências da ThoughtWorks e tem como objetivo ensinar não só quem quer entrar na ThoughtWorks mas qualquer desenvolvedor

## Introdução

Esse guia provê dicas e recursos para auxiliar no desenvolvimento de suas
habilidades técnicas através de recursos de aprendizagem já existentes.

Esse guia é para todas as pessoas que desejam aprender como se tornar
melhores desenvolvedoras de software.

## Índice

1. [Codificação](#codificacao)
  2. [Programe em (pelo menos) uma linguagem de programação orientada a objetos](#programe-em-uma-linguagem-oo)
  2. [Construa soluções guiadas por testes (TDD)](#construa-com-tdd)
  2. [Saiba utilizar uma IDE e/ou editor de texto](#utilizando-ide-editor)
  2. [Saiba utilizar um sistema de controle de versão]()
  2. [Saiba como refatorar seu código]()
  2. [Programe em (pelo menos) uma linguagem de programação funcional]()
2. [Projeto de Sistemas Orientado a Objetos]()
  1. [Aplique Domain-Driven Design no seu dia-a-dia](#aplique-ddd)
  2. [Escreva código limpo]()
3. [Arquitetura de Software]()
  1. [Entenda os diferentes tipo de arquitetura de software]()
  2. [Entenda como conciliar requisitos ortogonais com sua arquitetura]()
  3. [Entenda como conciliar segurança com sua arquitetura]()
4. [Entrega de Software]()
  1. [Integre seu código continuamente]()
  2. [Entregue seu código continuamente]()
5. [Infraestrutura](#infraestrutura)
  1. [Entenda o que é a cultura DevOps](#entenda-a-cultura-devops)
  2. [Entenda o que é infraestrutura como código](#entenda-infraestrutura-como-codigo)
  2. [Entenda o que é computação em nuvem](#entenda-computacao-em-nuvem)
6. [Processos]()
1. [Estratégia de qualidade](#estrategia-de-qualidade)
  2. [Escreva testes automatizados](#escreva-testes-automatizados)
  2. [Análise de Código]()
  2. [Estratégia de testes]()
8. [Armazenamento de dados]()
  1. [Bancos de dados relacionais]()
  2. [Bancos de dados não-relacionais]()
9. [Segurança]()

<a name="codificacao" />
## Codificação

A codificação é a principal tarefa relalizada por um desenvolvedor
de software e nesta seção abordaremos linguagens de programação,
ferramentas e práticas utilizados para tal finalidade.

<a name="programe-em-uma-linguagem-oo" />
### Programe em (pelo menos) uma linguagem de programação orientada a objetos

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

<a name="construa-com-tdd" />
### Construa soluções guiadas por testes (TDD)

#### Recursos

* [[Artigo] Introdução ao TDD](http://martinfowler.com/bliki/TestDrivenDevelopment.html) :us:
* [[Livro] Desenvolvimento Guiado por Testes - Kent Beck](https://www.amazon.com.br/TDD-Desenvolvimento-Guiado-por-Testes/dp/857780724X/1?ie=UTF8&qid=1470091695&sr=8-1&keywords=tdd)

<a name="utilizando-ide-editor" />
### Saiba utilizar uma IDE e/ou editor de texto

Para programar é importante dominar ao menos um editor de texto
ou IDE(Integrated Development Environment).
Existem vários disponíveis, é importante escolher aquele que te
faça sentir mais confortável. Abaixo encontram-se alguns exemplos:

* [Atom](https://atom.io/)
  * [Documentação](https://atom.io/docs) :us:
* [Eclipse](http://www.eclipse.org/)
  * [Documentação](http://www.eclipse.org/documentation) :us:
* [IntelliJ](https://www.jetbrains.com/)
  * [Início Rápido](https://confluence.jetbrains.com/pages/viewpage.action?pageId=54919977)
* [Sublime Text](https://www.sublimetext.com/)
  * [Dicas Sublime](http://sublimetextdicas.com.br/)
* [Vim](http://www.vim.org/)
  * [Folha de Dicas](http://vim.rtorr.com/lang/pt_br/)
* [Visual Studio Code](https://code.visualstudio.com/)
  * [Documentação](https://code.visualstudio.com/docs/) :us:

### Projeto de Sistemas Orientado a Objetos

<a name="aplique-ddd" />
#### Aplique Domain-Driven Design no seu dia-a-dia

#### Recursos

* [[Artigo] Uma introdução a Domain-Driven Design](http://www.agileandart.com/2010/07/16/ddd-introducao-a-domain-driven-design/)

<a name="infraestrutura" />
## Infraestrutura

Nos últimos anos várias tecnologias de gerenciamento de infraestrutura emergiram.

Times de infraestrutura e desenvolvimento de software tem trabalhado cada vez mais
próximos, construindo e gerenciando componentes de infraestrutura utilizando ferramentas
de automatização que são categorizadas como "Infraestrutura como código".

Essas ferramentas partem do princípio de que servidores, rede e outros
componentes de infraestrutura são definidos através de código-fonte executável.

O intuito dessa seção é tratar sobre essa cultura, suas práticas e ferramentas disponíveis.

<a name="entenda-a-cultura-devops" />
### Entenda o que é a cultura DevOps

#### Recursos

* [[Artigo] DevOps Culture](http://martinfowler.com/bliki/DevOpsCulture.html) :us:

<a name="entenda-infraestrutura-como-codigo" />
### Entenda o que é infraestrutura como código

Infraestrutura como código é a prática de definir e gerenciar seus
serviços e componentes através de código-fonte.

Os grandes objetivos dessa prática são criar um processo seguro,
consistente e replicável. Dessa forma, sua infraestrutura potencialmente
se torna mais simples de manter e crescer

#### Recursos

<a name="entenda-computacao-em-nuvem" />
### Entenda o que é computação em nuvem

#### Recursos

## Contribuições

Ficaremos felizes em aceitar contribuições via GitHub pull requests.

## Aviso Legal

Esse não é um guia ou produto oficial da ThoughtWorks Brasil,
mas contém material de propriedade intelectual da mesma.

Esse guia é resultado da compilação de opiniões de funcionários da
ThoughtWorks Brasil e não necessariamente refletem o posicionamento da empresa.
