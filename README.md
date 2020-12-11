### Joke-Norris
This is the serverside project that wraps the [ChuckNorris.io API](https://api.chucknorris.io). This API is hosted on [this heroku url](https://joke-norris-server.herokuapp.com/) and on [Github](https://github.com/SrMoffat/joke-norris-server)

### Project Requirements	
- [x] Apollo GraphQL API
- [x] GraphQL API should wrap the [ChuckNorris.io API](https://api.chucknorris.io)
- [x] GraphQL API should have a Query type that resolves all categories `https://api.chucknorris.io/jokes/categories`
- [x] GraphQL API should have a Query type that resolves a random joke given a Category as an argument `https://api.chucknorris.io/jokes/random?category={category}`

### Stretch Features
- [x] GraphQL API has a Query type that resolves a random `https://api.chucknorris.io/jokes/random`
- [x] GraphQL API has a Query type that resolves free text search a random `https://api.chucknorris.io/jokes/search?query={query}`

### Technicial Requirements	
- [x] NodeJS
- [x] Apollo Server
