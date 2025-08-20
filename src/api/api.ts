import type { RecipeFilters } from '../types';

const apiKey = import.meta.env.VITE_API_KEY;

const BASE_URL = 'https://api.spoonacular.com/recipes';

export const searchRecipes = async(query: string) => {
    const response = await fetch(`${BASE_URL}/complexSearch?apiKey=${apiKey}&query=${query}&number=5`)

    if(!response.ok) {
        throw new Error('Failed to fetch recipes')
    }

    const data = await response.json()

    return data
}

export const fetchRecipes = async(filters: RecipeFilters = {}) => {
  const { mealTypes = [], includeIngredients = [] } = filters;

    const queryParams = new URLSearchParams({
        apiKey,
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

export const fetchRecipe = async(id: string) => {
    const response = await fetch(`${BASE_URL}/${id}/information?apiKey=${apiKey}`)
    if(!response.ok) {
        throw new Error('Failed to get recipe information')
    }
    const data = await response.json() 
    return data
}