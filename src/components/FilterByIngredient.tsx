import { useState } from "react"

export const IngredientsFilter = () => {
    const commonIngredients = [
    'chicken', 'beef', 'fish', 'pasta', 'rice',
    'tomato', 'cheese', 'garlic', 'onion', 'potato',
    'carrot', 'broccoli', 'mushroom', 'spinach', 'egg'
    ]

    const [selectedIngredients, setSelectedIngredients] = useState<string[]>([])

}