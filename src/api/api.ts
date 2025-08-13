const API_KEY = '62bf9fa758b749009ded451fa07c163b';
//const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

export const searchRecipes = async() => {
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=burger&addRecipeInformation=true&number=2&apiKey=${API_KEY}`)

    if(!response.ok) {
        throw new Error('Failed to fetch recipes')
    }

    const data = await response.json()

    return data
}



