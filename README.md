# Guia de Desenvolvimento Técnico

[![License](https://img.shields.io/aur/license/yaourt.svg?maxAge=2592000)](https://github.com/ThoughtWorksInc/guia-de-desenvolvimento-tecnico/blob/master/LICENSE)
[![Build Status](https://snap-ci.com/ThoughtWorksInc/guia-de-desenvolvimento-tecnico/branch/master/build_image)](https://snap-ci.com/ThoughtWorksInc/guia-de-desenvolvimento-tecnico/branch/master)

## Visão

* **Para** indivíduos e times
* **Que** buscam desenvolver-se tecnicamente
* **O** Guia de Desenvolvimento Técnico é um guia
* **Que** sugere recursos para crescimento
* **Diferentemente** de outros guias
* **Nosso produto** tem como base as experiências da ThoughtWorks e tem como
  objetivo ensinar não só quem quer entrar na ThoughtWorks mas qualquer
  desenvolvedor.

## Introdução

Esse guia provê dicas e recursos para auxiliar no desenvolvimento de suas
habilidades técnicas através de recursos de aprendizagem já existentes.

Esse guia é para todas as pessoas que desejam aprender como se tornar
melhores desenvolvedoras de software.

## Contribuições

Ficaremos felizes em aceitar contribuições via GitHub pull requests.

## Aviso Legal

Esse não é um guia ou produto oficial da ThoughtWorks Brasil,
mas contém material de propriedade intelectual da mesma.

Esse guia é resultado da compilação de opiniões de funcionários da
ThoughtWorks Brasil e não necessariamente refletem o posicionamento da empresa.

## Segurança

### Boas praticas de segurança

Check list sobre segurança https://github.com/FallibleInc/security-guide-for-developers

#### Chaves PGP

[PGP](https://en.wikipedia.org/wiki/Pretty_Good_Privacy) :us: (Pretty Good Privacy) é uma implementação que provê criptografica e autenticação de dados.

[GPG](https://pt.wikipedia.org/wiki/GNU_Privacy_Guard) (Gnu Privacy Guard) é a implementação livre do PGP

Tendo um par de chaves GPG é possível encriptar, decriptar e assinar dados, podendo assim manter a segurança e autenticidade dos dados.

#### Chaves SSH

[SSH](https://pt.wikipedia.org/wiki/Secure_Shell) (Secure Shell) é um protocolo para acesso remoto ao shell de forma criptografada.

Recomenda-se utilizar chaves SSH ao invés de senhas para acesso a servidores, repositórios git entre outros.

#### Commit git assinado

O mecanismo do git possui uma forma flexivel de configuração e não possui autenticação, ou seja, não tem-se garantia no autor dos commits.

Um possivel meio para ter garantia na autenticidade dos commits é assinando-os com chave PGP, assim todos e qualquer ferramenta (como o Github por exemplo)
poderá verificar a assinatura do commit.

Efetuar commit assinado [git commit -S](https://git-scm.com/docs/git-commit) :us:
Verificar commits [git verify-commit](https://git-scm.com/docs/git-verify-commit) :us:

#### Gerenciador de senhas

<!--Comentar sobre o pass, KeePassX e 1password-->
<!--TODO-->

#### Gerenciar segredos com o time

<!--Comentar sobre o pass e o Vault-->
<!--TODO-->

#### Dois fatores de autenticação

<!--Okta verify, Google auth-->
<!--TODO-->

#### OAuth2 para authenticação em APIs

<!--TODO-->

#### Segurança em aplicações web

<!--OWASP top 10-->
<!--TODO-->

#### HTTPS não significa estar seguro

<!--TODO-->

#### Verificação de vulnerabilidades em bibliotecas e pacotes

<!--TODO-->

#### Gerenciando senhas em aplicações

<!--TODO-->
