import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Recipe } from "../types";
import { fetchRecipe } from "../api/api";

export const SingleRecipePage = () => {
  const { id } = useParams<{id: string}>();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(true)

  //console.log(fetchRecipe(id));
  useEffect(() => {
    if (!id) {
      setLoading(false)
      return
    }
    const recipeInformation = async (id: string) => {
      try {
        const data = await fetchRecipe(id)
        setRecipe(data)
      } catch(error) {
        console.log("Error fetching recipe:", error)
      } finally {
        setLoading(false)
      }
    }
    recipeInformation(id)
  }, [id])

  if (loading) return <div>Loading recipe...</div>;
  if (!recipe) return <div>Recipe not found</div>;
  
  return (
    <div className="recipe-page">
      <div className="recipe-header two-columns">
        <div>
          {recipe.image && <img src={recipe.image} alt={recipe.title}/>}
        </div>
        <div>
          {recipe.title && <h1>{recipe.title}</h1>}
        </div>
      </div>
      <div className="recipe-content">
        <div className="ingredients-section">
            <h2>Ingredients</h2>
            <ul className="ingredients-grid">
              {recipe.extendedIngredients?.map((ingredient) => (
              <li key={ingredient.id} className="ingredient-card">
                  {ingredient.image && (
                    <img src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`} alt={ingredient.name} className="ingredient-img"/>
                  )}
                  <div className="ingredient-info">
                    <span className="ingredient-amount">
                      {ingredient.amount} {ingredient.unit}
                    </span>
                    <span className="ingredient-name">{ingredient.nameClean}</span>
                  </div>
              </li>
              ))}
            </ul>
        </div>
        <div>
          {recipe.summary && <div dangerouslySetInnerHTML={{ __html: recipe.summary }} />}
          {recipe.instructions && (
            <div>
              <h2>Instructions</h2>
              <div dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
            </div>
          )}
        </div>
      </div>
    </div>
    
  )
}
