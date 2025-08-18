import type { RecipeFilters } from '../types';

//const API_KEY = '396599591c3c4d2cb2ed85ffa0abce06';
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

export const fetchRecipes = async(filters: RecipeFilters = {}) => {
  const { mealTypes = [], includeIngredients = [] } = filters;

    const queryParams = new URLSearchParams({
        apiKey: API_KEY,
        addRecipeInformation: 'true',
        number: '9',
        ...(includeIngredients.length > 0 && { 
        includeIngredients: includeIngredients.join(',') 
        }),
        ...(mealTypes.length > 0 && { 
        type: mealTypes.join(',') 
        }),
    });


    const response = await fetch(`${BASE_URL}/complexSearch?${queryParams}`)

    if(!response.ok) {
        throw new Error('Failed to fetch recipes')
    }

    const data =  await response.json()

    return data
}

