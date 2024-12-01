
import { Heading, HStack, VStack } from '@chakra-ui/react'
import './App.css'
import InitialSlider from './components/slider/InitialSlider'
import NewSlider from './components/slider/NewSlider'
import RecipeTable from './components/table/RecipeTable'

function App() {

  return (
    <>
    <Heading>Baking Scaler</Heading>
    <HStack>
    <RecipeTable/>
    <VStack>
    <InitialSlider/>
    <NewSlider/>
    </VStack>
    </HStack>
    </>
  )
}

export default App
