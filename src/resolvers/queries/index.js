const fetch = require('node-fetch');

/**
 * Fetch categories 
 * @returns
 */
const fetchCategories = async () => {
    const response =  await fetch("https://api.chucknorris.io/jokes/categories");
    const categories = await response.json();
    return {
        categories
    };
};

/**
 * Fetch a random joke
 * @returns
 */
const fetchRandomJoke = async () => {
    const response =  await fetch("https://api.chucknorris.io/jokes/random");
    const randomJoke = await response.json();
    return randomJoke;
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