const API_KEY = 'e6c26367428747cabb99420bd48dc259';
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



