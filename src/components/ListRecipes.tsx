import { useEffect, useState, type JSX } from "react"
import { searchRecipes } from "../api/api"
import type { Recipe } from "../types";
import { Filter } from "./Filter";
import { fakeRecipes } from '../example';
import { RecipeCard } from "./RecipeCard";


export const ListRecipes = (): JSX.Element => {

    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    //console.log(searchRecipes());

    useEffect(() => {
        const fetchData = async () => {
            try {
                //const result = await searchRecipes();
                setRecipes(fakeRecipes.results);
            } catch (error) {
                if(error instanceof Error) {
                    setError(error.message);
                }
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [])

    if(isLoading) {
        return <div>Loading data...</div>;
    }

    if(error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
          <div className="container py-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="md:col-span-1">
                     <div className="sticky top-4">
                        <Filter />
                     </div>
                </div>
               <div className="md:col-span-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {recipes.map((recipe) => (
                          <RecipeCard recipe={recipe}/>
                        ))}
                    </div>
               </div>
            </div>
         
        </div>
        </>
    )
}
