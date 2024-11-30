import { Ingredient, Recipe } from "../models/Recipe";
import { Tin } from "../models/Tin";

export function calculateRecipeRatio(ratio: number, recipe: Recipe): Recipe {
    recipe.forEach((ingredient: Ingredient) => {
        ingredient.amount*=ratio
    })
    return recipe
}

export function calculateTinRatio(starterTins: Tin[], desiredTins: Tin[]): number {

    function totalVolume(acc: number, tin: Tin): number {
        return acc + tin.calculateBakingVolume();

    }

    const starterVolume = starterTins.reduce(totalVolume, 0)

    const desiredVolume = desiredTins.reduce(totalVolume, 0)

    return desiredVolume/starterVolume


}