# Contribuindo

## Categorias de Pessoas Contribuidoras

* [Contribuidoras](CONTRIBUIDORAS.md)
* [Campeãs](CAMPEAS.md)
* [Curadoras](CURADORAS.md)

## Padrão

Cada tópico tem um arquivo Markdown na pasta `topics/` e para seu conteúdo
temos definido como padrão:

```md
# Tópico

Introdução ao Tópico

<!-- toc -->

## Subtópico

Descrição do subtópico

### Recursos

* [[Tipo do Recurso] Título](link)

```

A linha `<!-- toc -->` é para a geração automática do índice do tópico.

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

## Visualizando alterações

Caso deseje visualizar como será a página gerada pelo Gitbook, execute:

```sh
npm start
```

## Validação de links

Para garantir que links externos novos que você adicionou não estão quebrados,
execute:

```sh
npm run check-link-diff
```

O comando acima só valida links que você adicionou. Porém, se quiser ajudar o
guia a se manter atualizado e verificar todos os links, execute:

```sh
npm run check-link-local
```

## Submetendo mudanças

Para submeter suas mudanças:

* Crie um fork do repositório
* Em uma feature branch, faça suas mudanças
* Garanta que suas sugestões seguem o padrão e passam os testes
* Crie uma pull request para mergear seu código nesse repositório
* Muito provavelmente, você receberá feedbacks ou nosso selo de aprovação
* Quando receber um "PBPM", ou uma aprovação, você está pronto para mergear suas
  mudanças!

Se você não teve muitas experiências contribuindo para projetos open source com
git, sugerimos ler as [dicas do Github](https://guides.github.com/activities/contributing-to-open-source/#contributing)
:uk:.
