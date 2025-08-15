import { IngredientsFilter } from "./FilterByIngredient";
import { MealTypeFilter } from "./FilterByMealTypes";

export const Filters = () => {

    return (
        <div>
            <div className="flex flex-col space-y-5">
                <IngredientsFilter />
                <MealTypeFilter />
            </div>
        </div>
    )
}

