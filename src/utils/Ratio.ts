import { Ingredient, Recipe } from "../models/Recipe";

export function calculateRecipeRatio(ratio: number, recipe: Recipe): Recipe {
    return recipe.map((ingredient: Ingredient) => {
        const adjustedAmount = Math.round(((ingredient.initialAmount * ratio) + Number.EPSILON) * 100) / 100;
        return { ...ingredient, adjustedAmount };
    });
}