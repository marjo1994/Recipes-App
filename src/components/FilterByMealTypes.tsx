import type { MealTypeFilterProps } from "../types"

export const MealTypeFilter = ({ selectedMealTypes, onMealTypeChange }: MealTypeFilterProps) => {

    const mealTypes = [
    'dessert', 'salad', 'breakfast', 'main course', 'snack',
    'drink']

    const toggleMealTypes = (meal: string) => {
        const newMealTypes = selectedMealTypes.includes(meal) 
        ? selectedMealTypes.filter(item => item != meal)
        : [...selectedMealTypes, meal]
        onMealTypeChange(newMealTypes);
    }

    return (
        <div>
            <span className="text-xl">By Meal Types</span>
            <div className="flex flex-wrap gap-2 mt-3">
               {mealTypes.map(meal => (
                <button
                    key={meal}
                    type="button"
                    onClick={() => toggleMealTypes(meal)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    selectedMealTypes.includes(meal)
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                >
                    {meal.charAt(0).toUpperCase() + meal.slice(1)}
                </button>
                ))}
            </div>
        </div>
    )
}