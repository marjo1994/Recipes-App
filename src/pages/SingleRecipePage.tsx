import { useParams } from "react-router-dom";
import type { ExtendedIngredient } from "../types";
import { fetchRecipe } from "../api/api";
import { useFetch } from "../hooks";
import BroccoliImg from '../assets/broccoli-img.png';

export const SingleRecipePage = () => {

  const { id } = useParams<{id: string}>();

  const { data, loading, error } = useFetch(fetchRecipe, id ?? '') 
  
  if (loading) return (
    <div className="loader-container">
      <div className="loader">
        <img src={BroccoliImg} className="spinning-broccoli" alt="Loading recipe" />
      </div>
    </div>
  );
  if (!data) return <div>Recipe not found</div>;
  if (error) return <div className="p-2 text-red-500">{error}</div>;

  
 return (
 <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          <div className="lg:w-1/2">
            {data.image && (
              <img 
                src={data.image} 
                alt={data.title}
                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl shadow-lg"
              />
            )}
          </div>
          <div className="lg:w-1/2 flex items-center">
            {data.title && (
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {data.title}
              </h1>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                Ingredients
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {data.extendedIngredients?.map((ingredient: ExtendedIngredient) => (
                  <div
                    key={ingredient.id} 
                    className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    {ingredient.image && (
                      <img 
                        src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`} 
                        alt={ingredient.name}
                        className="w-12 h-12 object-cover rounded-lg flex-shrink-0"
                      />
                    )}
                    <div className="flex-1 min-w-0">
                      <span className="text-sm font-medium text-gray-900 block truncate">
                        {ingredient.nameClean}
                      </span>
                      <span className="text-sm text-gray-600">
                        {ingredient.amount} {ingredient.unit}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-8">
            {data.summary && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About this recipe</h2>
                <div 
                  className="prose prose-gray max-w-none"
                  dangerouslySetInnerHTML={{ __html: data.summary }}
                />
              </div>
            )}
            {data.instructions && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Instructions</h2>
                <div 
                  className="prose prose-gray max-w-none"
                  dangerouslySetInnerHTML={{ __html: data.instructions }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
