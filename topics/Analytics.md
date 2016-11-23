# Análise de Dados (*Analytics*)

Cada vez mais tem sido recorrente a utilização de análise de dados no
desenvolvimento de projetos de software. Através de *Analytics* é
possível compreender o comportamento de pessoas e até mesmo guiar
modelos de negócios/vendas. Muitos são os atores que utilizam dados
para melhorar serviços oferecidos:

- O Netflix quando faz sugestões de séries ou o Spotify quando faz
  indicações de músicas
- O Facebook, utilizando reconhecimento de imagem para automaticamente
  marcar seus amigos em fotos publicadas
- A Amazon, quando te envia livros antes mesmo de você concluir uma
  compra
- ...e por aí vai...

São inúmeras as aplicações de *Analytics* no dia-a-dia. Mas afinal, o que
é *Analytics*?

De maneira sucinta e direta, *Analytics* nada mais é do que um conjunto
de áreas multidisciplinares que tem como objetivo final analisar dados.

Você pode obter mais detalhes através deste [artigo na
Wikipedia](https://en.wikipedia.org/wiki/Analytics) :uk:

Podemos extrapolar um pouco mais e comparar análises de dados a dois
momentos: passado e futuro. A imagem a seguir ilustra esses momentos.
![Níveis de maturidade de Análise de
Dados](/gitbook/images/Analytics/niveis_maturidade.png)

É fácil observar que quanto mais complexa é a análise proposta, maior é
o valor obtido. As análises *Descritiva* e *Diagnóstica* procuram entender o
que aconteceu e o motivo pelo qual eventos aconteceram. É como se
estivéssemos tirando uma fotografia dos dados e observássemos o passado.
A análise *Preditiva* busca, a partir dos dados, prever algum evento que
ainda não ocorreu. Além de prever eventos, é possível sugerir ações, e é
neste momento que entra a análise *Prescritiva*.

Análises que lidam com o futuro (*Preditiva* e *Prescritiva*) podem ser
definidas como **Analytics Avançado**. Poucas são as empresas que aplicam
com acurácia esse tipo de análise. Temos a Netflix e o Spotify como bons
exemplos.

As análises *Descritiva* e *Diagnóstica* fazem parte Data Warehousing e
Business Intelligence (DW/BI), mas não são somente isso. O Google
Analytics, por exemplo, performa esses tipos de análise, mas não se
trata de um DW/BI.

Abaixo seguem as principais áreas que fazem parte de um projeto de
análise de dados.

<!-- toc -->

## Engenharia de Dados

*Engenharia de Dados* (ou *Data Engineering* :uk:) pode ser considerada uma área
específica da *Engenharia de Software* voltada para solucionar problemas de
armazenamento, transformação, processamento, manutenção e escalabilidade de
dados.

Existe muita colaboração entre *Engenharia de Dados* e *Ciência de Dados*. A
*Engenharia de Dados* é responsável pela criação e manutenção de ferramentas e
plataformas para a *Ciência de Dados*. Além disso, ela também é responsável por
resolver problemas de implementação e escalabilidade de algoritmos e fluxos de
processamento, enquanto a *Ciência de Dados* é mais focada no aspecto analítico
e exploratório da Análise de Dados.

Existem tecnologias específicas que visam resolver muitos dos problemas
recorrentes da *Engenharia de Dados* em escala, essas tecnologias geralmente são
encontradas sob termo guarda-chuva de **Big Data**.

Algumas perguntas para clarificar o que a *Engenharia de Dados* tenta resolver:

- Como armazenar de maneira escalável, confiável e segura petabytes de dados?
- Para um dado processo de negócio envolvendo algoritmos de recomendação, será
  melhor utilizar uma arquitetura orientada a eventos ou processamento em lote?
- Como aplicar um modelo científico de Análise Preditiva em larga escala e
  deixar seu resultado disponível para ser utilizada em produtos?

### Recursos

- [[Wikipedia] Big Data](https://pt.wikipedia.org/wiki/Big_data)
- [[Artigo] Data Science e Big Data: Dois mundos muito diferentes](https://www.thoughtworks.com/pt/insights/blog/data-science-and-big-data-two-very-different-beasts)
- [[Pergunta & Resposta] O que é Engenharia de Dados?](https://www.quora.com/What-is-data-engineering)
  :uk:
- [[Artigo] The Rise of the Data Engineer](https://www.datanami.com/2014/09/08/rise-big-data-engineer/)
  :uk:
- [[Artigo] Ciência de Dados vs Engenharia de Dados](https://blog.insightdatascience.com/data-science-vs-data-engineering-62da7678adaa#.1a2xg69mb)
  :uk:

## Ciência de Dados

### Recursos

## Visualização de Dados

Esta é uma área ampla e essencial para efetuar análise de dados.

Em um primeiro momento, Visualização de Dados é importante como um
processo exploratório, uma vez que permite descobrir alguns padrões
escondidos antes mesmo de aplicar qualquer análise aos dados que se tem
em mãos. Quando nos deparamos com um determinado problema, é frequente a
dúvida sobre quais atributos são relevantes, ou simplesmente, que tipo
de dados estamos explorando? Existem muitos dados faltantes?  Existem
_[valores atípicos](https://pt.wikipedia.org/wiki/Outlier)_? Qual é a
qualidade dos dados que estamos coletando? Tais perguntas podem ser
facilmente respondidas dependendo de como utilizamos Visualização de
Dados para análises exploratórias.

Quando estamos falando sobre análise exploratória, a visualização de
dados é direcionada basicamente a cientistas/analistas de dados.
Raramente, todas as visualizações geradas durante esta fase são
apresentadas para o usuário final, interessado na análise em si. Por ser
voltada para para analistas de dados, esta área pode ser
vista como uma ferramenta poderosa, a medida que permite o conhecimento
prévio e profundo dos dados aos quais estão expostos antes de qualquer
análise, através da construção de diferentes visualizações. Tal
conhecimento prévio coloca o cientetista de dados em vantagem em relação
a quais hipóteses podem ser relevantes mediante ao resultado gráfico
obtido.

Visualização de Dados também é algo relevante quando queremos comunicar
os resultados de uma análise. Qual é a melhor maneira de apresentar
resultados encontrados? É fundamental saber traduzir resultados
matemáticos em visualizações gráficas. Para se chegar a melhor forma de
visualização, é importante também pensar na audiência: quem são as
pessoas interessadas nos resultados obtidos? É necessário ter habilidade
para que resultados obtidos não sejam compreendidos apenas por
profissionais envolvidos na área de dados.

As melhores visualizações são as que não exigem muita reflexão por parte
do receptor. Existem técnicas para que a visualização gerada seja a mais
clara possível, tais como posicionamento de legenda (ou apenas rotulação
dos pontos de dados graficados) e até mesmo a escolha de cores (e neste
caso, deve-se levar em consideração a existência de pessoas daltônicas,
por exemplo). Uma boa visualização de dados introduz novas perguntas de
interesse, abrindo espaço para mais análises, mas também deve ser capaz
de explicar resultados para uma ampla audiência.

### Recursos

- [[Livro] Storytelling with
  Data](http://www.storytellingwithdata.com/book/) :uk:
- [[Curso] Visualização de Dados com
  d3.js](https://br.udacity.com/course/data-visualization-and-d3js--ud507/)
- [[Projeto] React-Vis](https://github.com/uber/react-vis)

## Análise de Dados Ágil

### Recursos
