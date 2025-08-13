import type { Recipe } from "../types";
import { ArrowRightIcon } from '@heroicons/react/24/solid';

export const RecipeCard = ({recipe} : {recipe: Recipe}) => {
    return (
        <div key={recipe.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm">
            <img className="rounded-t-lg" src={recipe.image} alt={recipe.title} />
            <div className="p-5">
                <h5 className="mb-2 text-xl font-bold tracking-tight">{recipe.title}</h5>
                <p>Ready in {recipe.readyInMinutes} minutes</p>
                <p>Serves {recipe.servings}</p>
                <a className="inline-flex items-center px-3 py-2 mt-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" href={recipe.sourceUrl} target="_blank" rel="noopener noreferrer">
                    View Recipe
                    <ArrowRightIcon className="ml-2 w-4 h-4" />
                </a>
            </div>
        </div>
    )
}
