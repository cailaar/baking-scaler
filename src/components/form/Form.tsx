import { Card } from "@chakra-ui/react"
import IngredientOptions from "./IngredientOption"
import { useState } from "react"
import { Ingredient } from "@/models/Recipe"
import { Button } from "@/components/ui/button"

export default function Form() {
const [ingredients, setIngredients] = useState<Ingredient[]>([])

    return (
        <Card.Root>
  <Card.Body>
    <Card.Title>Ingredients</Card.Title>
    <Card.Description><IngredientOptions setIngredients={setIngredients}/>
    <Button>Add Ingredient</Button>
    </Card.Description>
  </Card.Body>
  <Card.Footer />
</Card.Root>
    )
}