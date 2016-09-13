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

## Escreva testes automatizados

### Recursos

[[Livro Gratuito] Práticas e Tendências em Teste](https://info.thoughtworks.com/praticas-e-tendencias-em-teste-ebook.html)

[[Artigo] Boas Práticas de Teste Automatizado](http://www.bugbang.com.br/agile-brazil-2012-boas-praticas-de-teste-automatizado/)

[[Artigo] Testes Funcionais - Como decidir o que automatizar?](https://www.thoughtworks.com/pt/insights/blog/functional-tests-how-decide-what-automate)

[[Artigo] Escreva Testes Melhores em 5 Passos](https://www.thoughtworks.com/pt/insights/blog/write-better-tests-5-steps)

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

### Por pessoas

Uma outra forma de realizar a análise de código é por meio da prática de [Pull Request](https://help.github.com/articles/about-pull-requests/),
onde a cada push realizado para o repositório,
um outro membro da equipe se responsabiliza por revisar o código
com a intenção de encontrar possíveis problemas e sugerir melhorias na implementação.

### Recursos

* [[Artigo]Melhorando a qualidade do código com sonarqube](http://www.infobip.com/pt/desenvolvedor/melhorando-a-qualidade-do-codigo-com-sonarqube)
* [[Artigo]The benefits of pull request](https://www.madetech.com/blog/deployment-by-pull-requests) :uk:

## Estratégia de testes
