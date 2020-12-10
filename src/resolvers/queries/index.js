const fetch = require('node-fetch');
/**
 * Fetch categories 
 * @returns
 */
const fetchCategories = async (parent, args, context, info) => {
    const response =  await fetch("https://api.chucknorris.io/jokes/categories");
    const categories = await response.json();
    return {
        categories
    };
};

// Fetch Random Joke
const fetchRandomJoke = () => {
    return {
        "categories": [],
        "created_at": "2020-01-05 13:42:25.099703",
        "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        "id": "j8eVPeCBTpiuKxlsWRRagg",
        "updated_at": "2020-01-05 13:42:25.099703",
        "url": "https://api.chucknorris.io/jokes/j8eVPeCBTpiuKxlsWRRagg",
        "value": "Chuck Norris throws massive Roman orgies for Lent."
    };
};

// Fetch Category Joke
const fetchCategoryJoke = () => {
    return {
        "categories": [
            "animal"
        ],
        "created_at": "2020-01-05 13:42:19.104863",
        "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        "id": "zjuwql5ns-mklqumqezlhg",
        "updated_at": "2020-01-05 13:42:19.104863",
        "url": "https://api.chucknorris.io/jokes/zjuwql5ns-mklqumqezlhg",
        "value": "Chuck Norris can skeletize a cow in two minutes."
    }
};

module.exports = {
    fetchCategories,
    fetchCategoryJoke,
    fetchRandomJoke
};