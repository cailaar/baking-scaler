import { Card } from "@chakra-ui/react"
import IngredientOptions from "./IngredientOption"
import { useState } from "react"
import { Ingredient } from "@/models/Recipe"

export default function Form() {
const [ingredients, setIngredients] = useState<Ingredient[]>([])

    return (
        <Card.Root>
  <Card.Body>
    <Card.Title>Ingredients</Card.Title>
    <Card.Description><IngredientOptions setIngredients={setIngredients}/>
    </Card.Description>
  </Card.Body>
  <Card.Footer />
</Card.Root>
    )
}