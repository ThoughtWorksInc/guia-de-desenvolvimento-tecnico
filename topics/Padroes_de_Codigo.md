# Padrões de Código

Sistemas complexos requerem padrões de código bem formulados para garantir
extensibilidade, manutenabilidade, flexibilidade, fácil entendimento e
qualidade. Cada linguagem de programação é construída em cima de um paradigma
diferente que, muitas vezes, tenta resolver esse problema de formas diferentes.
Porém, cabe a pessoa desenvolvedora ter conhecimento desses conceitos para o bom
uso dessas ferramentas.

Nessa sessão focaremos em alguns padrões e práticas de código mais usados. É
importante notar que alguns desses conceitos derivam do paradigma de orientação
a objeto e outros do paradigma funcional, e funcionam melhor em contextos
espefícos. Porém, aqui, veremos cada conceito separadamente, pois cada software
tem requisitos diferentes.

<!-- toc -->

## Imutabilidade

Imutabilidade é um conceito muito presente em linguagens funcionais, que buscam
garantir que uma função sempre retornará o mesmo valor, possibilitando até que
a funcionalidade alí definida possa ser provada matemáticamente. Para que isso
seja verdade, é preciso garantir que funções não mantenham estado e não tenham
valores variáveis (ou seja, sejam imutáveis).

Porém, esse conceito tem evoluido além de linguagens funcionais, pois
imutabilidade evita também que a sua aplicação retorne informações conflitantes,
causadas por concorrência, que fazem a aplicação impossível de debugar.

### Recursos

* [[Artigo] Objects Should be Immutable](http://www.yegor256.com/2014/06/09/objects-should-be-immutable.html)
  :uk:

## SOLID

SOLID é um acrônimo que engloba os cinco princípios básicos de orientação a
objetos. Existem variações, mas em geral eles se resumem a:

* *Single responsibility principle* (princípio de responsabilidade única)
  O principio de responsabilidade única define que uma classe ou método deveria
  existir somente para implementar uma funcionalidade, mas que essa
  responsabilidade seja completamente encapsulada pela entidade.
* *Open/close principle* (princípio aberto/fechado)
  O princípio aberto/fechado dita que entidades de software deveriam ser abertas
  a extensão, mas fechadas a modificação. A ideia é que essas entidades
  (classes, objetos, metodos...) possam ter suas funcionalidades extendidas,
  mas não seu código modificado.
* *Liskov substitution principle* (princípio da substituição de Liskov)
  Esse princípio visa definir o conceito de subtipo, garantindo que subtipos
  mantém as propriedades defininas no tipo original. Esse princípio afirma que
  se S é um subtipo do objeto T, qualquer objeto de tipo T pode ser substituído
  por objetos de tipo S.
* *Interface segregation principle* (princípio de separação de interfaces)
  ISP diz que nenhum cliente deveria dependender de metodos que ele não vai
  usar. Promove interfaces menores, desacopladas, e expressivas.
* *Dependency inversion principle* (princípio de inversão de depêndencias)
  Esse príncipio define que módulos de alto-nível não dependem de módulos de
  baixo-nível, mas que os dois dependem de abstrações. Além disso, abstrações
  não deveriam depender de detalhes de implementação, mas o contrário.

### Recursos

* [[Wikipedia] SOLID (object-oriented design)](https://en.wikipedia.org/wiki/SOLID_(object-oriented_design))
  :uk:
* [[Artigo] Pilares da Orientação a Objetos](https://renatomotzko.wordpress.com/2011/08/29/pilares-da-orientao-a-objetos/)

## Encapsulamento

Quando Alan Kay criou o SmallTalk por volta de 1970,
ele acreditava que cada objeto era uma representação de todos os recursos
do computador, sendo, dessa forma, completamente independente. É nesse
contexto que se formou a ideia de encapsulamento. Os seus componentes devem
ser simples o suficiente para poderem ser transportados por toda a aplicação,
sem perderem suas propriedades.

### Recursos

* [[Artigo] Curiosidade - Early History of SmallTalk (história do SmallTalk)](http://worrydream.com/EarlyHistoryOfSmalltalk/)
  :uk:

## Polimorfismo

Polimorfismo é a propriedade de ter uma só interface para vários tipos. Ou seja,
uma funcionalidade tomaria várias formas.

Pode ser tanto implementado como uma interface ou classe abstrata em Java, ou
por herança em muitas linguagens orientadas a objeto.

Linguagens dinamicas, como Ruby, oferecem ainda mais flexibilidade para
polimorfismo, dando pouca importancia ao tipo do objeto mas apenas se
preocupando que o objeto implemente a funcionalidade desejada. Assim, o código
fica mais flexivél para, por exemplo, iterar sobre uma lista e chamar um mesmo
método sobre objetos diferentes.

### Recursos

* [[Wikipedia] Orientação a Objetos](https://pt.wikipedia.org/wiki/Orienta%C3%A7%C3%A3o_a_objetos)
* [[Artigo] Orientação a Objetos](http://www.training.com.br/lpmaia/pub_prog_oo.htm)


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
