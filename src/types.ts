export interface Recipe {
  id: number;
  title: string;
  image: string;
  readyInMinutes: number;
  servings: number;
  sourceUrl: string;
  type?: string[];
  includeIngredients?: string[];
}
//Filters
export interface RecipeFilters {
  mealTypes?: string[];
  includeIngredients?: string[];
}
export interface FiltersProps {
  onFilterChange: (filters: {
    mealTypes: string[];
    includeIngredients: string[];
  }) => void;
}
export interface MealTypeFilterProps {
  selectedMealTypes: string[];
  onMealTypeChange: (mealTypes: string[]) => void;
}

export interface IngredientsFilterProps {
  selectedIngredients: string[];
  onIngredientsChange: (ingredients: string[]) => void;
}