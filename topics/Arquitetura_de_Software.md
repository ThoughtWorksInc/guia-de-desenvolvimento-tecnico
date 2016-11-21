# Arquitetura de Software

    Uma arquitetura de software é o conjunto de estruturas necessárias para
    entender como um sistema funciona. Dessas estruras fazem parte elementos de
    software, relacões entre esses elementos e propriedades desses elementos e
    dessas relações. (Len Bass, Paul Clements, Rick Kazman,  Software Architecture
    in practice, tradução nossa)

A arquitetura de software é uma abstração que ajuda a comunicação e o
entendimento do funcionamento de um sistema. Ela inclui as funcionalidades do
sistema, mas o principal objetivo de uma arquitetura é determinar como o
sistema vai conseguir cumprir os requisitos de qualidade estabelecidos (como
performance, escalabilidade, segurança) e restrições impostas ao
desenvolvimento (restrições legais, de plataforma, etc).

Todos os sistemas têm uma arquitetura de software, mas nem toda arquitetura é
boa ou sequer adequada ao problema que o sistema tenta resolver.

<!-- toc -->

## Princípios, Padrões e Estilos Arquiteturais

Desenvolver uma arquitetura é um trabalho de ponderação. Muito frequentemente
diferentes objetivos são conflitantes. Por exemplo introduzir algoritmos de
encriptação mais robustos podem degradar a performance. Princípios, padrões
estilos arquiteturais ajudam a guiar o desenvolvimento da arquitetura e
ressaltam o objetivo principal daquela arquitetura. Nesta sessão, não estamos
preocupados em diferenciar padrões, princípios ou estilos arquiteturais. Alguns
exemplos são:

[12 factor apps](https://12factor.net/pt_br/) reúne fatores a serem seguidos
para que a aplicação seja amigável para ser instalada na nuvem (_cloud
friendly_). Um dos efeitos colaterais é que a aplicação também será mais fácil
de escalar horizontalmente além de ser portável entre ambientes.

[Clean Architecture](https://8thlight.com/blog/uncle-bob/2012/08/13/the-clean-architecture.html).
Os princípios descritos aqui podem ser seguidos para promover uma arquitetura
que é testável, independente de frameworks, da interface com o
usuário, do banco de dados utilizado e de qualquer outro recurso
externo como serviços externos à aplicação.

[[Livro] Microserviços](http://shop.oreilly.com/product/0636920033158.do) é
uma abordagem para desenvolver uma aplicação composta por um conjunto de
pequenos serviços que rodam em processos separados, se comunicam de forma leve
(como HTTP). Esses serviços devem ser desenvolvidos para encapsular capacidades
de negócio e devem ser possíveis de serem instalados independentemente. As
vantagens dessa abordagem incluem: possível heterogeneidade de tecnologia entre
serviços; escalabilidade; resiliência; facilidade de compor serviços.

[[Artigo] Command-Query Responsibility Separation (CQRS)](<http://antoniofcastro.blogspot.in/2015/01/cqrs.html>).
Como o nome diz esse estilo arquitetural sugere a separação de
responsabilidades entre consultas e comandos, onde comandos são ações que
resultam em mudanças nos dados e consultas são somente leitura. O padrão é
interessante para aplicações de alta performance especialmente quando há
diferentes requisitos de performance e disponibilidade para leitura e escrita.

### Recursos

* [[Livro] Software Architecture in
 Practice](https://www.amazon.com.br/dp/0321815734) :uk:
* [[Livro] Padrões de Arquitetura de Aplicações Corporativas](https://www.amazon.com.br/dp/8536306386)
* [[Livro] Software Architecture: Perspectives on an Emerging Discipline](https://www.amazon.com.br/dp/0131829572)
 :uk:
* [[Artigo] Event Sourcing](http://martinfowler.com/eaaDev/EventSourcing.html) :uk:
