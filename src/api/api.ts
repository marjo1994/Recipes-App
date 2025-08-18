const API_KEY = '62bf9fa758b749009ded451fa07c163b';
const BASE_URL = 'https://api.spoonacular.com/recipes';

export const searchRecipes = async(query: string) => {
    const response = await fetch(`${BASE_URL}/complexSearch?apiKey=${API_KEY}&query=${query}&number=5`)

    if(!response.ok) {
        throw new Error('Failed to fetch recipes')
    }

    const data = await response.json()

    return data
}

export const defaultRecipes = async() => {
    const response = await fetch(`${BASE_URL}/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=9`)

    if(!response.ok) {
        throw new Error('Failed to fetch recipes')
    }

    const data = await response.json()

    return data
}



