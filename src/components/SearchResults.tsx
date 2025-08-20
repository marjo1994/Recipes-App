import { searchRecipes } from "../api/api"
import type { Recipe } from "../types"
import { Link } from "react-router-dom";
import { useFetch } from "../hooks";

export const SearchResults = ({search} : {search: string }) => {
    const { data, loading, error } = useFetch(searchRecipes, search) 
    
    if (loading) return (
        <div className="flex justify-center items-center p-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-800"></div>
        </div>
    );
    if (error) return <div className="p-2 text-red-500">{error}</div>;
    if (data.length === 0) return <div className="p-2">No results found</div>;
   
    return data.results.map((recipe : Recipe) => (
        <li className="mb-2 last:mb-0" key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`} className="w-full flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <img className="w-12 h-12 object-cover rounded-md" src={recipe.image} alt={recipe.title}/>
                <span className="text-left truncate">{recipe.title}</span>
            </Link>
        </li>
    ))
}