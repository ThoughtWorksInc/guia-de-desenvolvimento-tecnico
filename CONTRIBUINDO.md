# Contribuindo

## Padrão

Temos definido como padrão:

```md
<a name="topico" />
## 1. Tópico

Introdução ao Tópico

<a name="subtopico" />
### Subtópico

Descrição do subtópico

#### Recursos

* [[Tipo do Recurso] Título](link)

```

Os tipos de recurso podem ser: artigos, livros, vídeos, cursos, folha de dicas,
documentação, etc.

Caso o recurso seja noutra língua, adicione o ícone da bandeira. Exemplo:

```md
* [[Tipo do Recurso] Título](link) :uk:
```

## Testes

Lembre de checar suas alterações instalando as dependências necessárias e
rodando o teste:

```sh
npm install
npm test
```

Para rodar os testes continuamente enquanto escreve, utilize o comando abaixo:

```sh
npm run watch
```

Em caso de erro, mais informações sobre as regras aqui:
[Markdownlint - Rules](https://github.com/mivok/markdownlint/blob/master/docs/RULES.md)
