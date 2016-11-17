# Padrões de Código

Sistemas complexos requerem padrões de código bem formulados para garantir
extensibilidade, manutenabilidade, flexibilidade, fácil entendimento e
qualidade. Cada linguagem de programação é construída em cima de um paradigma
diferente que, muitas vezes, tenta resolver esse problema de formas diferentes.
Porém, cabe a pessoa desenvolvedora ter conhecimento desses conceitos para o bom
uso dessas ferramentas.

Nessa sessão focaremos em alguns padrões e práticas de código mais usados. É
importante notar que alguns desses conceitos derivam do paradigma de orientação
a objeto e outros do paradima funcional, e funcionam melhor em contextos
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
causadas por concorrência, que fazer a aplicação impossível de debugar.

### Recursos

* [[Wikipedia] Orientação a Objetos](https://pt.wikipedia.org/wiki/Orienta%C3%A7%C3%A3o_a_objetos)
* [[Artigo] Orientação a Objetos](http://www.training.com.br/lpmaia/pub_prog_oo.htm)
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
