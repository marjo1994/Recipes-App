import { useCallback, useEffect, useState, type JSX } from "react"
import { fetchRecipes } from "../api/api"
import type { Recipe, RecipeFilters } from "../types";
import { Filters } from "./Filters";
import { RecipeCard } from "./RecipeCard";


export const RecipesList = (): JSX.Element => {

    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const loadInitialRecipes = async () => {
            setIsLoading(true);
            try {
                const data = await fetchRecipes();
                setRecipes(data.results);
            } catch (error) {
                console.error("Initial load failed:", error);
            } finally {
                setIsLoading(false)
            }
        };
        loadInitialRecipes();
    }, []);

    const handleFilterChange = useCallback(async (filters: RecipeFilters) => {
        setIsLoading(true);
        try {
            const data = await fetchRecipes({
                includeIngredients: filters.includeIngredients,
                mealTypes: filters.mealTypes
            });
            setRecipes(data.results);
        } catch (error) {
            console.error("Filter error:", error);
        } finally {
            setIsLoading(false)
        }
    }, []);


    return (
        <>
          <div className="container py-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="md:col-span-1">
                     <div className="sticky top-4">
                        <Filters onFilterChange={handleFilterChange} />
                     </div>
                </div>
               <div className="md:col-span-3">
                {isLoading ? (
                    <div>Loading recipes...</div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {recipes.map((recipe) => (
                             <RecipeCard recipe={recipe}/>
                         ))}
                    </div>
                )}
               </div>
            </div>
         
        </div>
        </>
    )
}
