# Estratégia de Qualidade

A qualidade de software deve estar presente em todo o desenvolvimento de software.
Ela não deve ser pensada apenas como uma etapa a ser realizada após a
codificação.

Não se resumindo apenas a testes manuais e exploratórios, ela compreende a
entrega de código bem escrito, criação de soluções guiadas por testes e entrega
de código continuamente. Em suma, a partir de boas práticas de engenharia de software
é possível garantir qualidade.

Entretanto, garantir qualidade é também ter a certeza de que as necessidades dos
usuários finais são atendidas e que o software em questão adiciona valor ao negócio.

Pensar em estratégia de qualidade compreende:

<!-- toc -->

## Tipos de testes

Para assegurar a qualidade em projetos de desenvolvimento de software, existem alguns
tipos de testes que podem ser aplicados como parte da estratégia de qualidade.
Os tipos de testes podem variar conforme o contexto em questão e em alguns projetos
talvez seja necessária a aplicação de mais de um tipo. Alguns exemplos de testes
mais comumente encontrados, mas não se limitando aos citados abaixo, são:

### Testes funcionais

Estes testes tem como propósito verficar *o que* o sistema faz,
bem como se atende as necessidades pré-determinadas para o mesmo.

Alguns testes considerados funcionais são:

* **Testes manuais**: são testes realizados pela equipe do projeto, que simulam a
  iteração do usuário final com o sistema em questão. Deve seguir uma especificação
  de teste (plano de teste, caso de teste ou cenário de teste) criada pela própria
  equipe do projeto e baseada nos requisitos da aplicação.
* **Testes automatizados de interface**: visam a automação de cenários de testes
 a nível de tela, aonde simulam os comportamentos realizados manualmente por usuários.
* **Testes automatizados de integração**: testam a interação entre sistemas e parte
  isoladas de software afim de garantir que o conjunto se comporte da forma esperada
  quando integrados.
* **Testes exploratórios**: aqui a ideia é a mesma dos testes manuais, porém,
  não existe uma especificação de teste a ser seguida.
  Geralmente testes exploratórios são baseados em experiência,
  uma vez que o testador deve explorar o sistema de forma a diversificar
  ao máximo as opções de uso, encontrando assim falhas não identificadas nos testes
  baseados em documentação.
* **Testes de regressão**: visam garantir que outras partes do software não
  tenham sido impactados por alterações recentes.
  Tais testes podem ser manuais ou automatizados.
* **Testes de fumaça**: são compostos por uma pequena suite de todos os testes do
  sistema em questão, onde apenas as principais funcionalidades são validadas.
  Tais testes podem ser manuais ou automatizados e
  geralmente são executados após uma nova versão do software ser gerada.

### Testes não funcionais

Estes testes tem como finalidade verificar *como* o sistema
se comporta mediante alguma situação. Alguns testes considerados não funcionais são:

* **Testes de performance**: são testes que básicamente verificam como sua aplicação
  se comporta em situações extremas, por exemplo,
  quando vários usuários estão acessando a mesma página em um curto período de tempo.
  Esses testes tem como objetivo captar possíveis pontos de gargalo no sistema.
* **Teste de segurança**: visam garantir o quão seguro um sistema é,
  expondo o mesmo a situações que simulam ataques que aproveitam vulnerabilidades
  específicas, como por exemplo SQL Injection, Cross-Site Scripting e quebra de autenticação.
* **Teste de usabilidade**: esses testes são usados para compreender melhor a interação
  do usuário com o produto.
  Geralmente é usado como uma técnica de avaliação,
  onde existe um roteiro a ser seguido e um grupo de analistas observando e
  coletando feedbacks ou problemas, como por exemplo,
  ambiguidade de informações ou complicações no fluxo do sistema.

### Recursos

* [[Artigo] Tipos de testes de software](http://testesdesoftware.com/tipos-de-teste-de-software/)
* [[Artigo] Os 13 principais tipos de testes de software](http://www.targettrust.com.br/blog/desenvolvimento/testes/os-13-principais-tipos-de-testes-de-software/)
* [[Artigo] Performance testing in a Nutshell](https://www.thoughtworks.com/insights/blog/performance-testing-nutshell)
  :uk:
* [[Artigo] Breve introdução a teste de performance](https://medium.com/@pedrro/uma-breve-introdu%C3%A7%C3%A3o-a-teste-de-performance-31e788337157#.f7gfk7koc)
* [[Artigo] Boas Práticas de Teste Automatizado](http://www.bugbang.com.br/agile-brazil-2012-boas-praticas-de-teste-automatizado/)
* [[Artigo] Testes Funcionais - Como decidir o que automatizar?](https://www.thoughtworks.com/pt/insights/blog/functional-tests-how-decide-what-automate)
* [[Artigo] Escreva Testes Melhores em 5 Passos](https://www.thoughtworks.com/pt/insights/blog/write-better-tests-5-steps)
* [[Livro Gratuito] Práticas e Tendências em Teste](https://info.thoughtworks.com/praticas-e-tendencias-em-teste-ebook.html)

## Pirâmide de testes

A pirâmide de testes é um conceito proposto por Mike Cohn que tem como objetivo
guiar uma equipe de desenvolvimento para um conjunto de verificações eficientes,
assim permitindo que um dado produto ou solução evolua com segurança.

Nesse conceito, é muito comum encontrar três níveis de testes:

* No primeiro nível (base da pirâmide), temos os testes unitários
  que devem estar presentes em maior número por proporcionarem execução
  e feedback mais rápidos às pessoas que desenvolvem o software. Esses testes
  guiam o desenvolvimento e nos dão garantias de como o produto está sendo construído.

* No nível intermediário, estão os testes de integração. Estes testes
  não devem estar presentes em um número tão elevado quanto os testes
  unitários, por serem menos eficientes com relação a execução e feedback. Aqui
  a ideia é garantir que módulos da aplicação funcionam em conjunto ou com algum
  colaborador externo, por exemplo um banco de dados.

* Por fim, no topo da pirâmide, encontramos os testes de interface automatizados
  que tendem a ser os testes onde se gasta maior investimento de tempo
  para se escrever e dar manutenção. Além disso, sua execução é lenta,
  não oferecendo um feedback rápido o suficiente para uma equipe de
  desenvolvimento ágil. Desta forma, são os testes que devem aparecer
  em menor quantidade quando comparado aos demais níveis da pirâmide. Jornadas de
  usuários e fluxos que trazem mais valor ao produto devem ser priorizados nesse
  tipo de teste.

Além disso, podemos considerar que os testes presentes em qualquer pirâmide de teste
têm como objetivo dar suporte a decisões de desenvolvimento ou de negócio.

* Os testes da base da pirâmide garantem que o código está correto, o foco é a
  implementação da solução. *Nós estamos construindo corretamente o produto?*
* Os testes do topo da pirâmide garantem que a intenção do produto está de acordo
  como a visão dos usuários e negócio. *Nós estamos construindo o produto correto?*

### Derivações da pirâmide de testes

É comum encontrar em projetos algumas derivações da pirâmide de testes,
as quais são advindas de uma estratégia de testes por vezes equivocada.
Os principais anti-padrões que podemos encontrar e tentar evitar são:

* A casquinha de sorvete, que na verdade trata-se de uma pirâmide invertida,
  pode ser observada em cenários onde testes de interface automatizados e manuais
  são encontrados em grande quantidade, enquanto os unitários e de integração
  praticamente não existem.

* O cupcake é comumente encontrado em ambientes onde diferentes equipes
  são responsáveis por testes em diferentes níveis. Desta forma, cada time acaba
  por tentar ter uma cobertura máxima em seus testes e o resultado disto
  é o excesso de testes em todos os níveis da pirâmide, além de muita redundância.

### Recursos

* [[Artigo] Test Pyramid](http://martinfowler.com/bliki/TestPyramid.html) :uk:
* [[Artigo] The Forgotten Layer of the Test Pyramid](https://goo.gl/vYIKPw) :uk:
* [[Artigo] Melhorando sua Estratégia de Testes Automatizados](https://goo.gl/U9ddnM)
* [[Artigo] Introducing the Software Testing Cupcake (Anti-Pattern)](https://goo.gl/P9NgQN)
  :uk:

## Análise de Código

### Análise de Código com ferramentas automatizadas

A cada linha de código escrita, provavelmente mais complexidade é adicionada a aplicação.
Isso torna mais difícil manter a aplicação e assim consequentemente mais complicado
criar novas funcionalidades.
Para ajudar nesse processo existem ferramentas que analisam o código de maneira automática.
Como por exemplo:

* [Sonarqube](http://www.sonarqube.org/)
* [Checkstyle](http://checkstyle.sourceforge.net/)
* [FindBugs](http://findbugs.sourceforge.net/)

Essas ferramentas podem identificar
pequenos problemas no código e, geralmente, ajudam nos seguintes cenários:

* Duplicações de código
* Comentários desnecessários
* Complexidade ciclomática
* Cobertura de testes inexistente

### Recursos

* [[Artigo] Melhorando a qualidade do código com sonarqube](https://goo.gl/brR0YF)

## Cobertura de Testes

Existem ferramentas que têm como objetivo determinar se um código de
uma aplicação possui ou não testes.
Isso é muito útil quando queremos entender o quanto do
comportamento ou intenção da aplicação está sendo validado.
Assim, consequentemente, pode-se alterar a aplicação com maior segurança e
eventuais falhas podem ser percebidas mais rapidamente.

É importante dizer que a maioria dessas ferrramentas trabalha com testes do tipo
unitário. Além disso, o foco delas é realizar uma avaliação quantitativa, sem
focar na qualidade exata dos cenários de testes existentes.
Por exemplo: é possível ter uma
boa cobertura de testes unitários sem cobrir partes importantes da aplicação.
Ou, ainda ter uma cobertura de testes razoável,
mas que não cobre cenários de borda do código.

Então, para se ter uma noção exata e qualitativa dos testes existentes,
utilizam-se ferramentas específicas, que alteram o código da aplicação e avaliam
a qualidade do testes a partir de falhas ou não dos cenários cobertos. Esses são
os testes de mutação.

### Recursos

* [Jacoco](http://www.eclemma.org/jacoco/)
* [Cobertura](https://github.com/cobertura/cobertura)
* [Coveralls](https://coveralls.io/)
* [Ferramenta para testes de mutação em Java](http://pitest.org/)

## Cultura de qualidade em projetos

### Pull request

Em alguns projetos que utilizam desenvolvimento orientado por branches,
é comum realizar a análise de código, por meio da prática de [Pull Request](https://goo.gl/SxiPGr),
onde a cada push realizado para o repositório é criado um "pull request"
e outro membro da equipe se responsabiliza por revisar o código,
com a intenção de encontrar possíveis problemas e sugerir melhorias na implementação.

### Kick-Off

Kick-Off é uma prática realizada antes de uma estória começar,
onde é feita uma revisão com os responsáveis pela estória,
geralmente desenvolvedores, analistas de negócios e analistas de qualidade.
Nessa revisão são verificados quais os pontos importantes daquela estória,
deixando claro os critérios de aceitação, eventuais dependências e também
esclarecendo quaisquer dúvidas que possam surgir.
A finalidade é garantir que antes de se começar a nova estória,
as pessoas envolvidas saibam o que realmente tem que ser feito.

### Desk-Check

Na prática de Desk-Check geralmente temos uma revisão,
do que foi desenvolvido na estória,
envolvendo as pessoas que trabalharam no desenvolvimento da mesma,
além de analistas de negócio e de qualidade.
Nesta revisão algumas verificações que podem ser feitas são:

* Todos os critérios de aceitação foram alcançados?
* Toda a implementação está coberta por testes em seus níveis?
* Ficou algum dívida técnica nessa estória?

### Recursos

* [[Artigo] The benefits of pull request](https://goo.gl/s62Xjk) :uk:
* [[Artigo] Defect Prevention Using Agile Techniques](https://goo.gl/sbkWr4) :uk:
