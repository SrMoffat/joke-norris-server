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

module.exports = {
    fetchCategories,
    fetchCategoryJoke,
    fetchRandomJoke
};