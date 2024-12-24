import { Ingredient, Recipe } from "../models/Recipe";
import { calculateVolume } from "./Volume";

export function calculateRecipeRatio(ratio: number, recipe: Recipe): Recipe {
    return recipe.map((ingredient: Ingredient) => {
        const adjustedAmount = Math.round(((ingredient.initialAmount * ratio) + Number.EPSILON) * 100) / 100;
        return { ...ingredient, adjustedAmount };
    });
}

export function calculateBatterTins(batterAmount: number, tinDiameter: number, tinHeight: number): number {
    if (!batterAmount) {
        return 0;
    }
    const totalVolume = calculateVolume(1, tinDiameter, tinHeight);
    return Math.floor(batterAmount/totalVolume)

}



