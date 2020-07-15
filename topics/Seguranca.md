# Segurança

Pensar em segurança durante o desenvolvimento de software é uma prática que é
tão essencial de ser pensada quanto qualidade, arquitetura e acessibilidade.

Esse guia tende a mostrar alguns itens de segurança que são importantes, com o
intuito de tornar o software mais seguro conforme o desenvolvimento do mesmo,
e prevenindo-se de sofrer alguns ataques por falta de conhecimento de algumas
ferramentas e práticas. Mas não se limite somente a esse guia.

<!-- toc -->

## Boas práticas de segurança

Existe uma lista de boas práticas de segurança que pode ser um guia bem completo
para quem possui interesse nessa área.

### Recursos

- [FallibleInc/security-guide-for-developers](https://github.com/FallibleInc/security-guide-for-developers)
  :uk:

### Chaves PGP

Tendo um par de chaves GPG é possível encriptar, decriptar e assinar os dados,
podendo assim manter a segurança e autenticidade dos mesmos.

#### Recursos

- [PGP](https://en.wikipedia.org/wiki/Pretty_Good_Privacy) :uk:
  (Pretty Good Privacy) é uma implementação que provê criptografia e autenticação
  de dados.
- [GPG](https://pt.wikipedia.org/wiki/GNU_Privacy_Guard) (Gnu Privacy Guard) é a
  implementação livre do PGP.

### Chaves SSH

[SSH](https://pt.wikipedia.org/wiki/Secure_Shell) (Secure Shell) é um protocolo
para acesso remoto ao shell de forma criptografada.

Recomenda-se utilizar chaves SSH ao invés de senhas para acesso a servidores,
repositórios git entre outros.

### Commit git assinado

Ao fazer commits com a ferramenta git, não há garantias de saber quem é o autor
dos commits, já que git config não faz nenhum tipo de autenticação durante as
configurações.

Um possível meio para ter garantia na autenticidade dos commits é assinando-os
com chave PGP, assim todas as pessoas da sua equipe e as ferramentas usadas
(como o Github, por exemplo) poderá verificar a assinatura do *commit*.

Efetuar commit assinado [git commit -S](https://git-scm.com/docs/git-commit) :uk:
Verificar commits
[git verify-commit](https://git-scm.com/docs/git-verify-commit) :uk:

### Gerenciador de senhas

Recomenda-se utilizar gerenciadores de senhas, criar senhas fortes e não
utilizar as mesmas senhas para serviços.

Exemplo, ter uma senha com caracteres especiais, letras maiusculas e minusculas
e números sendo elas diferentes para as contas que utilizas (ex. Heroku, Github,
SnapCI, etc)

Ferramentas para gerenciador de senhas:

- [1Password](https://1password.com/)
  - Pago
  - Mac OS, Windows, Android e iOS
- [KeepassX](https://www.keepassx.org/)
  - Grátis
  - Open source
  - Interface gráfica
  - Linux, Mac OS, Android, iOS
- [Pass](https://www.passwordstore.org/)
  - Grátis
  - Open source
  - Linha de comando
  - Utiliza o GPG para criptografar
  - Linux, Mac OS, Android.

### Gerenciar segredos com o time

Um meio seguro de compartilhar segredos com o time é utilizar gerenciador de
senhas compartilhado.

Um exemplo é usar o [Pass](https://www.passwordstore.org/) que utiliza GPG para
encriptar, o que permite que segredos sejam compartilhados para mais de uma
pessoa resultando em um único arquivo e o segredos são sincronizados através do
git para ser compartilhado por todos os membros do time.

Outra ferramenta é o [1Password for teams](https://1password.com/teams/), porém
essa ferramenta é paga.

### Dois fatores de autenticação

Possuir dois fatores de autenticação (Two factor authentication) é uma boa
prática para manter maior segurança no acesso as contas, principalmente quanto a
serviços que podem dar acesso ao codebase ou a algum ambiente, exemplo: Github,
Heroku, SnapCI e etc.

#### Recursos

Algumas ferramentas para fazer os dois fatores de autenticação são:

- [Okta](https://www.okta.com/) e
- [Google Authenticator](https://www.google.com/landing/2step/).

### OAuth2 para autenticação em APIs

Recomenda-se o uso de OAuth2 para autenticação em APIs, esse mecanismo permite
com que apps externos possam se conectar em APIs sem com que o mesmo saiba a
senha do usuário.

Um exemplo para isso é uma app que utiliza a API do Github, essa app basta
apenas pedir autorização pelo usuário para acessar determinadas informações, no
qual o usuário fará utilizando o próprio Github.

Para mais detalhes sobre o OAuth2 no site
[http://oauth.net/2/](http://oauth.net/2/) :uk:

### Segurança em aplicações web

Durante o desenvolvimento de aplicações web geralmente são pensados pontos de
usabilidade e performance. Assim como esses itens, segurança é algo que deve
ser levado em consideração durante todo o desenvolvimento da aplicação. Um guia
para os itens relacionados a segurança é o
[OWASP top 10](https://www.owasp.org/index.php/Category:OWASP_Top_Ten_Project)
:uk:.

#### Recursos

- Há um PDF em português através do link
  [OWASP top 10](https://www.owasp.org/images/9/9c/OWASP_Top_10_2013_PT-BR.pdf).

### HTTPS não significa estar seguro

Um item importante ao construir aplicações é sempre pensar em encriptar os meios
de comunicação entre APIs, microsserviços e usuário-aplicação.  HTTPS é um
recurso que pode-se dizer obrigatório e de baixo custo, que evita ataques
[*man-in-the-middle*](https://pt.wikipedia.org/wiki/Ataque_man-in-the-middle) e
garante que os dados trafegados na rede não foram lidos por mais ninguém
além das duas partes que estão trocando informações.

Existe um projeto chamado [Let's Encrypt](https://letsencrypt.org/) que fornece
certificados HTTPS de forma gratuita e clientes que automatizam a atualização
desses certificados em suas aplicações.

Para mais detalhes sobre o HTTPS acesse o link no
[Wikipedia](https://pt.wikipedia.org/wiki/Hyper_Text_Transfer_Protocol_Secure).

Porém, lembre-se que HTTPS é o mínimo para sua aplicação. Ter HTTPS ainda assim não
significa que sua aplicação está segura.

### Verificação de vulnerabilidades em bibliotecas e pacotes

Um modo de encontrar falhas de segurança é fazer uma verificação nas bibliotecas
e dependências que utilizas.

Exemplos de ferramentas:

- NodeJS
  - [NPM-Audit](https://docs.npmjs.com/cli/audit)
  - [Snyk](https://github.com/Snyk/snyk)
  - [Gemnasium](https://gemnasium.com/)
- Java
  - [OWASP Dependency check](https://github.com/jeremylong/DependencyCheck)
- Python
  - [dependency-check](https://pypi.python.org/pypi/dependency-check/0.1.0)
  - [Gemnasium](https://gemnasium.com/)
- Ruby
  - [OWASP Dependency check](https://github.com/jeremylong/DependencyCheck)
  - [RubySec](http://rubysec.com/)
  - [Gemnasium](https://gemnasium.com/)

Recomenda-se executar essa verificação de forma periódica. Para isso, pode-se utilizar
um script e integrar junto com uma ferramenta de [integração contínua](Entrega_de_Software.md).

### Gerenciando senhas em aplicações

Há casos de aplicações que costumam salvar o
[hash](https://pt.wikipedia.org/wiki/Fun%C3%A7%C3%A3o_hash) de senhas no banco
de dados, muitas vezes usando apenas um algoritmo simples para isso, como o
[MD5](https://pt.wikipedia.org/wiki/MD5) ou
[SHA1](https://pt.wikipedia.org/wiki/SHA-1). Porém recomenda-se que haja uma
camada extra de lógica antes de gerar esse hash.

Existe um método de criptografia para hash chamado
[bcrypt](https://pt.wikipedia.org/wiki/Bcrypt) que possui uma segurança maior
ao gerar o hash das senhas dos usuários.

### Dinâmica: Modelagem de Ameaças

Também conhecida como _Threat Modeling_, a modelagem de ameaças é um processo pelo qual é possível
identificar, entender, comunicar e priorizar as ameaças de segurança dentro do contexto do projeto.

#### Quem participa?
É importante que todos os envolvidos no projeto participem:
- **Pessoas desenvolvedoras:** _elas serão capazes de trazer a visão técnica da aplicação. Além disso, sua participação 
incentiva desenvolvimento seguro e fortalece conhecimento de vulnerabilidades._

- **Pessoas da área de negócio:** _são as melhores pessoas para compartilharem o contexto do negócio,
ajudar na priorização do backlog, identificação dos riscos e garantir a melhora contínua do projeto._

- **Times se segurança, qualidade, infra e outros:** _se há equipes separadas dentro do projeto, todas as equipes devem participar da dinâmica. A responsabilidade de manter a solução segura é de todos. A participação também ajuda
a quebrar os silos entre as equipes e promover uma visão unificada das ameaças e possíveis mitigações._

- **Clientes:** é quaze institinvo querer esconder qualquer vulnerabilidade de segurança dos clientes, entretanto, esse é o pior caminho. A participação do cliente promove a transparência quanto riscos do projeto, fortalece a confiança e compartilha também a visão dos riscos de segurança que devem ser priorizados. Essa é uma grande vantagem da dinâmica, facilitar a conversa e priorização inclusive com quem é o dono do produto.

#### Qual processo?

A dinâmica envolve 4 etapas:

- **Contexto**: _O que estamos construindo?_
- **Identificação**: _O que podemos melhorar?_
- **Mitigação**: _O que faremos sobre isso?_
- **Priorização**: _Quando faremos?_

#### Qual resultado?

Saiba mais em:
- [Application Threat Modeling - OWASP](https://owasp.org/www-community/Application_Threat_Modeling) :uk:
- [Agile Threat Modeling - Martin Fowler](https://martinfowler.com/articles/agile-threat-modelling.html) :uk:
