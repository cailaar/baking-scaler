import { Ingredient, Recipe } from "../models/Recipe";

export function calculateRecipeRatio(ratio: number, recipe: Recipe): Recipe {
    recipe.forEach((ingredient: Ingredient) => {
        ingredient.initialAmount*=ratio
    })
    return recipe
}

export function calculateTinRatio(startedVolume: number, desiredVolume: number): number {

    return desiredVolume/startedVolume

}