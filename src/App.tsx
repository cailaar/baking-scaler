
import { Heading, HStack, VStack } from '@chakra-ui/react'
import './App.css'
import Form from './components/form/Form'
import InitialSlider from './components/slider/InitialSlider'
import NewSlider from './components/slider/NewSlider'

function App() {

  return (
    <>
    <Heading>Baking Scaler</Heading>
    <HStack>
    <Form/>
    <VStack>
    <InitialSlider/>
    <NewSlider/>
    </VStack>
    </HStack>
    </>
  )
}

export default App
