import { Card } from "@chakra-ui/react"
import RecipeTable from "./RecipeTable"


export default function RecipeDisplay() {

    return (
      <Card.Root width = "70vw" height="80vh">
  <Card.Body>
    <Card.Title>Ingredients</Card.Title>
    <Card.Description>
        <RecipeTable/>
    </Card.Description>
  </Card.Body>
  <Card.Footer />
</Card.Root>
    )
}