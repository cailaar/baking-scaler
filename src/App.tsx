
import { Heading, HStack, VStack } from '@chakra-ui/react'
import './App.css'
import InitialSlider from './components/slider/InitialSlider'
import NewSlider from './components/slider/NewSlider'
import RecipeTable from './components/table/RecipeTable'
import { useState } from 'react'
let ratio = 0;

function App() {

  const [initialVolume, setInitialVolume] = useState(0)
  const [desiredVolume, setDesiredVolume] = useState(0)

  us


  return (
    <>
    <Heading>Baking Scaler</Heading>
    <HStack>
    <RecipeTable/>
    <VStack>
    <InitialSlider setVolume={setInitialVolume} volume ={initialVolume}/>
    <NewSlider setVolume={setDesiredVolume} volume={desiredVolume}/>
    </VStack>
    </HStack>
    </>
  )
}

export default App
