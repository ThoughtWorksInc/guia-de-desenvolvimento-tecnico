# Estratégia de Qualidade

A qualidade de software está presente em todo o desenvolvimento de software.
Ela não deve ser pensada apenas como uma etapa a ser realizada após a
codificação.

Não se resumindo apenas a testes manuais e exploratórios, ela compreende a
entrega de código bem escrito, criação de soluções guiadas por testes, entrega
de código continuamente, entre outros tópicos anteriormente citados.

Garantir a qualidade é ter a certeza de que as necessidades dos usuários finais
estão sendo atendidas. Pensar em estratégia de qualidade compreende:

<!-- toc -->

## Pirâmide de testes

A pirâmide de testes é um conceito proposto por Mike Cohn,
geralmente discutido em meio a equipes ágeis que visa descrever
uma estratégia de testes mais eficiente. A ideia central da
pirâmide é a identificação de três níveis de testes:

* No primeiro nível (base da pirâmide), temos os testes unitários
  que devem estar presentes em maior número por proporcionarem execução
  e feedback mais rápidos às pessoas que desenvolvem o software.

* No nível intermediário, estão os testes de integração. Estes testes
  não devem estar presentes em um número tão elevado quanto os testes
  unitários, por serem menos eficientes com relação a execução e feedback.

* Por fim, no topo da pirâmide, encontramos os testes de interface automátizados
  que tendem a ser os testes onde se gasta maior investimento de tempo
  para se escrever e dar manutenção. Além disso, sua execução é lenta,
  não oferecendo um feedback rápido o suficiente para uma equipe de
  desenvolvimento ágil. Desta forma, são os testes que devem aparecer
  em menor quantidade quando comparado aos demais níveis da pirâmide.

### Derivações da pirâmide de testes

É comum encontrar em projetos algumas derivações da pirâmide de testes,
as quais são advindas de uma estratégia de testes por vezes equivocada.
Os principais anti-padrões que podemos encontrar e tentar evitar são:

* A casquinha de sorvete, que na verdade trata-se de uma pirâmide invertida,
  pode ser observada em cenários onde testes de interface automátizados e manuais
  são encontrados em grande quantidade, enquanto os unitários e de integração
  praticamente não existem.

* O cupcake é comumente encontrado em ambientes onde diferentes equipes
  são responsáveis por testes em diferentes níveis. Desta forma, cada time acaba
  por tentar ter uma cobertura máxima em seus testes e o resultado disto
  é o excesso de testes em todos os níveis da pirâmide, além de muita redundância.

### Recursos

* [[Artigo] Test Pyramid](http://martinfowler.com/bliki/TestPyramid.html) :uk:
* [[Artigo] The Forgotten Layer of the Test Automation Pyramid](http://www.mountaingoatsoftware.com/blog/the-forgotten-layer-of-the-test-automation-pyramid) :uk:
* [[Artigo] Melhorando sua Estratégia de Testes Automatizados](http://blog.myscrumhalf.com/2014/03/melhorando-sua-estrategia-de-testes-automatizados/)
* [[Artigo] Introducing the Software Testing Cupcake (Anti-Pattern)](https://www.thoughtworks.com/insights/blog/introducing-software-testing-cupcake-anti-pattern) :uk:

## Escreva testes automatizados

### Recursos

* [[Livro Gratuito] Práticas e Tendências em Teste](https://info.thoughtworks.com/praticas-e-tendencias-em-teste-ebook.html)
* [[Artigo] Boas Práticas de Teste Automatizado](http://www.bugbang.com.br/agile-brazil-2012-boas-praticas-de-teste-automatizado/)
* [[Artigo] Testes Funcionais - Como decidir o que automatizar?](https://www.thoughtworks.com/pt/insights/blog/functional-tests-how-decide-what-automate)
* [[Artigo] Escreva Testes Melhores em 5 Passos](https://www.thoughtworks.com/pt/insights/blog/write-better-tests-5-steps)

## Análise  de Código

### Por ferramentas automatizadas

A cada linha de código escrita, mais complexidade é adicionada a aplicação,
 então, mais difícil fica criar novas funcionalidades.
Para isso existem ferramentas que são responsáveis por realizar análise do código.
Como por exemplo:

* [Sonarqube](http://www.sonarqube.org/)
* [FindBugs](http://findbugs.sourceforge.net/)

Essas ferramentas tem a função de analisar o código escrito, podendo identificar
alguns pequenos problemas que por sua vez podem deixar o código mais complexo ou
sujo, como por exemplo:

* Comentários desnecessários
* Duplicações de código
* Complexidade ciclomáticas
* Cobertura de código por testes

### Recursos

* [[Artigo]Melhorando a qualidade do código com sonarqube](http://www.infobip.com/pt/desenvolvedor/melhorando-a-qualidade-do-codigo-com-sonarqube)

## Estratégia de testes

## Cultura de qualidade em projetos

### Pull request

Em alguns projetos que utilizam desenvolvimento orientado por branch's, é comum realizar a análise de código,
por meio da prática de [Pull Request](https://help.github.com/articles/about-pull-requests/),
onde a cada push realizado para o repositório, é criado um "pull request" aonde membros da equipe se responsabiliza por revisar o código com a intenção de encontrar possíveis problemas e sugerir melhorias na implementação.

### Kick-Off

Kick-Off é uma prática realizada antes de uma estória começar,
aonde é feita uma revisão com os responsáveis pela estória,
geralmente desenvolvedores, analistas de negócios e analistas de qualidade. Nessa revisão é verificado se a estória realmente pode ir para desenvolvimento, quais são seus critérios de aceites, se existem wireframes, como será validada e etc.

### Desk-Check

Na prática de Desk-Check é realizada uma revisão depois que a estória é finalizada pelos desenvolvedores. Nessa revisão algumas verificações que podem ser feitas são:

* Todos os critérios de aceitação foram alcançados?
* Toda a implementação está coberta por testes em seus niveis
* Ficou algum débito tecnico nessa estória?

### Recursos

* [[Artigo]The benefits of pull request](https://www.madetech.com/blog/deployment-by-pull-requests) :uk:
*  [[Artigo]Defect Prevention Using Agile Techniques](https://www.thoughtworks.com/de/insights/blog/defect-prevention-using-agile-techniques) :uk:
