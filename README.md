PokeAPI construida com React

# Iniciar o App

1. Para rodar o aplicativo é necessario rodar os seguintes comandos:

```sh
$ npm install
$ npm start
```

A aplicação abrirá no navegador em: http://localhost:3000

# Status

Essa versão está desatuatilizada em comparação aos padrões atuais.

Para procurar o Pokémon, a pesquisa deverá ser feita com nome inteiramente escrito em
minusculo ou pelo seu número da Pokedex. Ex.: charizard, pikachu, raichu, etc.

# Passo a Passo

1. Logo após ter criado o Projeto "POKEDEX", foi feito a pasta "src" e dentro dela foi criado a
   pasta "components" para podermos criar o arquivo "Navbar.js". Ele irá atuar como uma espécie
   de titulo para nossa aplicação.

2. Com Navbar já concluido, foi realizado a implementação dele no Projeto. Foi utilizada a imagem
   do site PokeApi como src para atuar como um titulo.

3. Foi criado mais um arquivo chamado "Searchbar.js" para representar o campo onde será realizado
   a busca pelo Pokémon. No mesmo arquivo, utilizei um onChange para que seja disparado uma ação
   quando uma mudança ocorrer na barra de pesquisa. Também foi utilizado o useState para que a
   página seja renderizada.

4. O arquivo "api.js" será responsável por exportar métodos que serão usados pela
   aplicação onde os mesmos também irão interagir com essa Api.

5. Logo após, o componente "Pokedex.js" foi criado para que seja possível exibir os Pokemons,
   assim como um novo método chamado "getPokemon" no arquivo "api.js". Dentro do arquivo
   "App.js" foi desenvolvida a função "fetchPokemons" para realizar a chamada da api.

6. Em "Pokedex.js" será passado os Pokemóns que estão sendo buscados e também, se a pesquisa
   está sendo carregada ou não (caso esteja carregando, a tela mostrará o texto
   "Carregando Pokémon").

7. Dentro da api, foi feito outro método que irá buscar a url chamado getPokemonData.
   O componente que será responsável por mostrar os dados do Pokémon na aplicação, será o
   "Pokemon.js"(nome, id, sprites, tipo).

8. Para poder realizar a paginação da aplicação, foi feito o arquivo "Pagination.js" que será
   responsável pelos botões na página.Dados a serem recebidos:

- "page" = Onde está;
- "totalPages" = Total de Páginas;
- "setPages" = Altera o Estado da Página;
- Função "onClickLeft"e "onLeftRight" para navegação.
  As funções foram implementadas dentro do arquivo "Pokedex.js".

9. Será utilizado o Context para trabalhar com os Favoritos, então para isso, foi criado uma pasta
   "context" e dentro dela o arquivo "favoritesContext.js". Nele haverá uma lista de favoritos (favoritePokemons)
   e um método para atualizar os favoritos (updateFavoritePokemons).

10. No arquivo "Pokemon.js" foi feito uma chamada de contexto para os Favoritos, assim como o botão "onHeartClick"
    onde é feito a chamada do método "updateFavoritePokemons". Para que as informações dos favoritos permaneça, foi utilizado LocalStorage.
