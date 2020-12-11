const fetch = require('node-fetch');

const BASE_URL = "https://api.chucknorris.io"; // TODO: add to .env
/**
 * Fetch categories 
 * @returns
 */
const fetchCategories = async () => {
    const response =  await fetch(`${BASE_URL}/jokes/categories`);
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
    const response =  await fetch(`${BASE_URL}/jokes/random`);
    const randomJoke = await response.json();
    return randomJoke;
};

/**
 * Fetch a random joke in a selected category
 * @param {{cateory: string;}} joke
 * @returns
 */
const fetchCategoryJoke = async (parent, args, context, info) => {
    const { category } = args;
    const response = await fetch(`${BASE_URL}/jokes/random?category=${category}`);
    const categoryJoke = await response.json();
    return categoryJoke;
};

/**
 * Fetch jokes based on free text passed as query string
 * @param {{query: string;}} joke
 * @returns
 */
const searchForJokes = async (parent, args, context, info) => {
    const { query } = args;
    const response = await fetch(`${BASE_URL}/jokes/search?query=${query}`);
    const searchResults = await response.json();
    return {
        count: searchResults.total,
        results: searchResults.result
    }
};

module.exports = {
    fetchCategories,
    fetchCategoryJoke,
    fetchRandomJoke,
    searchForJokes
};
