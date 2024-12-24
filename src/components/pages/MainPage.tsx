import { Recipe } from "@/models/Recipe";
import { calculateRecipeRatio } from "@/utils/Ratio";
import { HStack, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import InitialSlider from "../slider/InitialSlider";
import NewSlider from "../slider/NewSlider";
import RecipeTable from "../table/RecipeTable";

export default function MainPage() {
  const [initialVolume, setInitialVolume] = useState(0);
  const [desiredVolume, setDesiredVolume] = useState(0);
  const [recipe, setRecipe] = useState<Recipe>([]);

  useEffect(() => {
    if (initialVolume == 0) return;
    const ratio = desiredVolume / initialVolume;
    const newRecipe = calculateRecipeRatio(ratio, recipe);
    setRecipe(newRecipe);
  }, [initialVolume, desiredVolume, recipe]);
  return (
    <HStack>
      <RecipeTable recipe={recipe} setRecipe={setRecipe} />
      <VStack>
        <InitialSlider setVolume={setInitialVolume} volume={initialVolume} />
        <NewSlider setVolume={setDesiredVolume} volume={desiredVolume} />
      </VStack>
    </HStack>
  );
}
