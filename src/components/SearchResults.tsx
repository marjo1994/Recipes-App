import { useEffect, useState } from "react"
import { searchRecipes } from "../api/api"
import type { Recipe } from "../types"
import { Link } from "react-router-dom";

export const SearchResults = ({search} : {search: string }) => {
    const [results, setResults] = useState<Recipe[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

   useEffect(() => {

    const fetchRecipes = async () => {
      setLoading(true);
      setError(null);
      try {
          const data = await searchRecipes(search);
          setResults(data.results || []);
      } catch (err) {
          setError("Failed to fetch recipes");
          console.error(err);
      } finally {
          setLoading(false);
      }
    };

    fetchRecipes();
    }, [search]);

    if (loading) return <div className="p-2">Searching...</div>;
    if (error) return <div className="p-2 text-red-500">{error}</div>;
    if (results.length === 0) return <div className="p-2">No results found</div>;
   
    return results.map((recipe : Recipe) => (
        <li className="mb-2 last:mb-0" key={recipe.title}>
            <Link to={`/recipe/${recipe.id}`} target="_blank" rel="noopener noreferrer" className="w-full flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <img className="w-12 h-12 object-cover rounded-md" src={recipe.image} alt={recipe.title}/>
                <span className="text-left truncate">{recipe.title}</span>
            </Link>
        </li>
    ))
}