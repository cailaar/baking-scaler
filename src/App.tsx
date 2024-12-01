
import { Heading, HStack, VStack } from '@chakra-ui/react'
import './App.css'
import InitialSlider from './components/slider/InitialSlider'
import NewSlider from './components/slider/NewSlider'
import RecipeTable from './components/table/RecipeTable'
import { useEffect, useState } from 'react'
import { Recipe } from './models/Recipe'
import { calculateRecipeRatio } from './utils/Ratio'

function App() {
  
  const [initialVolume, setInitialVolume] = useState(0)
  const [desiredVolume, setDesiredVolume] = useState(0)
  const [recipe, setRecipe] = useState<Recipe>([]);

  useEffect(() => {
    if (initialVolume == 0) return;
    const ratio = desiredVolume/initialVolume
    const newRecipe = calculateRecipeRatio(ratio, recipe)
    setRecipe(newRecipe)

  }, [initialVolume, desiredVolume, recipe])


  return (
    <>
    <Heading>Baking Scaler</Heading>
    <HStack>
    <RecipeTable
    recipe={recipe}
    setRecipe={setRecipe}
    />
    <VStack>
    <InitialSlider setVolume={setInitialVolume} volume ={initialVolume}/>
    <NewSlider setVolume={setDesiredVolume} volume={desiredVolume}/>
    </VStack>
    </HStack>
    </>
  )
}

export default App
