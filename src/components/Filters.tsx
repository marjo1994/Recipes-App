import { useEffect, useState } from "react";
import type { FiltersProps } from "../types";
import { IngredientsFilter } from "./FilterByIngredient";
import { MealTypeFilter } from "./FilterByMealTypes";

export const Filters = ({ onFilterChange }: FiltersProps) => {

    const [selectedMealTypes, setSelectedMealTypes] = useState<string[]>([]);
    const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);

    useEffect(() => {
        onFilterChange({
        mealTypes: selectedMealTypes,
        includeIngredients: selectedIngredients
        });
    }, [selectedMealTypes, selectedIngredients, onFilterChange]);


    return (
        <div>
            <div className="flex flex-col space-y-5">
                <MealTypeFilter selectedMealTypes={selectedMealTypes} onMealTypeChange={setSelectedMealTypes} />                
                <IngredientsFilter selectedIngredients={selectedIngredients} onIngredientsChange={setSelectedIngredients} />
            </div>
        </div>
    )
}

