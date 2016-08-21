# Segurança

Pensar em segurança surante o desenvolvimento de software é uma prática que deveria ser mais comum
entre os desenvolvedores, assim como pensa-se em qualidade, arquitetura e acessibilidade.

Esse guia tende a mostrar alguns itens de segurança que são importantes, com o intuito de tornar o software mais seguro
conforme o desenvolvimento do mesmo, fazendo-o mais seguro e previnindo-se de sofrer alguns ataques por falta de conhecimento
de algumas ferramentas e práticas. Mas não se limite somente a esse guia.

## Boas práticas de segurança

Existe uma lista de boas praticas de segurança que pode ser um guia bem completo para quem possui interesse
na parte de segurança [FallibleInc/security-guide-for-developers](https://github.com/FallibleInc/security-guide-for-developers) :us:

### Chaves PGP

[PGP](https://en.wikipedia.org/wiki/Pretty_Good_Privacy) :us: (Pretty Good Privacy) é uma implementação que provê criptografica e autenticação de dados.

[GPG](https://pt.wikipedia.org/wiki/GNU_Privacy_Guard) (Gnu Privacy Guard) é a implementação livre do PGP

Tendo um par de chaves GPG é possível encriptar, decriptar e assinar dados, podendo assim manter a segurança e autenticidade dos dados.

### Chaves SSH

[SSH](https://pt.wikipedia.org/wiki/Secure_Shell) (Secure Shell) é um protocolo para acesso remoto ao shell de forma criptografada.

Recomenda-se utilizar chaves SSH ao invés de senhas para acesso a servidores, repositórios git entre outros.

### Commit git assinado

Ao fazer commits com a ferramenta git, não há garantias de saber quem é o autor dos commits, sendo que git config não faz nenhum tipo de autenticação durante as configurações.

Um possivel meio para ter garantia na autenticidade dos commits é assinando-os com chave PGP, assim todos e qualquer ferramenta (como o Github por exemplo)
poderá verificar a assinatura do commit.

Efetuar commit assinado [git commit -S](https://git-scm.com/docs/git-commit) :us:
Verificar commits [git verify-commit](https://git-scm.com/docs/git-verify-commit) :us:

### Gerenciador de senhas

Recomenda-se utilizar gerenciadores de senhas, criar senhas fortes e não utilizar as mesmas senhas para serviços.

Exemplo, ter uma senha com caracteres especiais, letras maiusculas e minusculas e números sendo elas diferentes
para as contas que utilizas (ex. Heroku, Github, SnapCI, etc)

Ferramentas para gerenciador de senhas:

[1Password](https://1password.com/) Ferramenta paga compatível com Mac OS, Windows, Android e IOS
[KeepassX](https://www.keepassx.org/) Ferramenta gratis e open source, com interface gráfica compativel com Linux, Mac OS, Android, IOS
[Pass](https://www.passwordstore.org/) Ferramenta gratis e open source, roda no terminal e utiliza o GPG para criptografar compativel para Linux, Mac OS, Android

### Gerenciar segredos com o time

Um meio seguro de compartilhar segredos com o time é utilizar gerenciador de senhas compartilhado

Um examplo é usar o [Pass](https://www.passwordstore.org/) que utiliza GPG para encriptar o que permite
que segredos sejam compartilhados para mais de uma pessoa resultando em um único arquivo e o segredos
são sincronizados através do git para ser compartilhado por todos os membros do time

### Dois fatores de autenticação

Possui dois fatores de autenticação (Two factor authentication) é uma boa pratica para manter maior
segurança no acesso as contas, principalemnte quanto a serviços que podem dar acesso ao codebase ou a
algum ambiente, exemplo: Github, Heroku, SnapCI e etc.

Algumas ferramentas para fazer os dois fatores de autenticação são [Okta](https://www.okta.com/) e [Google Autenticator](https://www.google.com/landing/2step/).

### OAuth2 para authenticação em APIs

Recomenda-se o uso de OAuth2 para autenticação em APIs, essa mecanismo permite com que apps externos possam se conectar em APIs
sem com que o mesmo saiba a senha do usuário.

Um exemplo para isso é uma app que utiliza a API do Github, essa app basta apenas pedir autorização pelo usuário para acessar
deferminadas informações, no qual o usuário fará utilizando o próprio Github.

Para mais detalhes sobre o OAuth2 no site [http://oauth.net/2/](http://oauth.net/2/) :us:

### Segurança em aplicações web

Durante o desenvolvimento de aplicações web geralmente são pensandos pontos de usuabilidade e performance,
mas assim como esses itens segurança é algo que deve ser levado em consideração durando o desenvolvimento da
aplicação, um guia para os itens relacionados a segurança é o [OWASP top 10](https://www.owasp.org/index.php/Category:OWASP_Top_Ten_Project) :us:.

Há um PDF em português através do link [OWASP top 10](https://owasptop10.googlecode.com/files/OWASP_Top_10_-_2013_Brazilian_Portuguese.pdf).

### HTTPS não significa estar seguro

Um item importante ao construir aplicações é sempre pensar em encriptar os meios de comunicação entre APIs, microserviços e usuário-aplicação.
HTTPS é um recurso que pode-se dizer obrigatório e de baixo custo, que irá evitar ataques *man-in-the-middle* e irá garantir que os dados
trafegados na rede não foram lidos por mais ninguém atém das duas partes que estão trocando informações.

Existe um projeto chamado [Let's Encrypt](https://letsencrypt.org/) que fornece certificados HTTPS de forma gratuíta e clientes que
automatizam a atualização desses sertificados em suas aplicações.

Para mais detalhes sobre o HTTPS acesse o link no [Wikipedia](https://pt.wikipedia.org/wiki/Hyper_Text_Transfer_Protocol_Secure).

Porém lembre-se HTTPS é o minimo para sua aplicação, ter HTTPS ainda sim não significa que sua aplicação estão segura.

### Verificação de vulnerabilidades em bibliotecas e pacotes

Como um dos processos que pode ser feito para verificar falhas de segurança é uma verificação nas bibliotecas e dependencias.

Exemplo de ferramentas:
- NodeJS
 - [Snyk](https://github.com/Snyk/snyk)
 - [Gemnasium](https://gemnasium.com/)
- Java
 - [OWASP Depency check](https://github.com/jeremylong/DependencyCheck)
- Python
 - [dependency-check](https://pypi.python.org/pypi/dependency-check/0.1.0)
 - [Gemnasium](https://gemnasium.com/)
- Ruby
 - [OWASP Depency check](https://github.com/jeremylong/DependencyCheck)
 - [RubySec](http://rubysec.com/)
 - [Gemnasium](https://gemnasium.com/)

### Gerenciando senhas em aplicações

Há casos de aplicações que costumam salvar o [hash](https://pt.wikipedia.org/wiki/Fun%C3%A7%C3%A3o_hash) de senhas no banco de dados, muitas vezes usando apenas um algoritmo simples
para isso como o [MD5](https://pt.wikipedia.org/wiki/MD5) ou [SHA1](https://pt.wikipedia.org/wiki/SHA-1), porém recomenda-se que haja uma camada extra de lógica antes de gerar esse hash.

Existe um método de criptografia para hash chamado [bcrypt](https://pt.wikipedia.org/wiki/Bcrypt) que possui uma segurança maior
no gerar o hash das senhas dos usuários.
