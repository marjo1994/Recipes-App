export interface Recipe {
  id: string;
  title: string;
  image: string;
  summary: string;
  readyInMinutes: number;
  servings: number;
  sourceUrl: string;
  instructions: string;
  type?: string[];
  includeIngredients?: string[];
  extendedIngredients?: ExtendedIngredient[]
}

interface Measure {
  amount: number;
  unitShort: string;
  unitLong: string;
}

interface Measures {
  us: Measure;
  metric: Measure;
}

export interface ExtendedIngredient {
  id: number;
  aisle: string;
  image: string;
  consistency: string;
  name: string;
  nameClean: string;
  original: string;
  originalName: string;
  amount: number;
  unit: string;
  meta: string[];
  measures: Measures;
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
export interface UseFetchResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}