import { Card } from "@chakra-ui/react"
import IngredientOptions from "./IngredientOption"
import { useState } from "react"
import { Ingredient } from "@/models/Recipe"
import { Button } from "@/components/ui/button"

export default function Form() {
const [ingredients, setIngredients] = useState<Ingredient[]>([])

const addIngredient = () => {
  setIngredients((oldArray) => [...oldArray, { name: "", amount: 0 }]);
};

    return (
      <Card.Root width = "70vw" height="80vh">
  <Card.Body>
    <Card.Title>Ingredients</Card.Title>
    <Card.Description>
      {ingredients.map(() => (
        <IngredientOptions setIngredients={setIngredients}/>))
      }
    <Button onClick={addIngredient}>Add Ingredient</Button>
    </Card.Description>
  </Card.Body>
  <Card.Footer />
</Card.Root>
    )
}