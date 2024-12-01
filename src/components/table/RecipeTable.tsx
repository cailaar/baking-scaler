import { Ingredient, Recipe } from "@/models/Recipe";
import { Table, IconButton, VStack, Input } from "@chakra-ui/react";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { Button } from "../ui/button";

export default function RecipeTable() {
    const [recipe, setRecipe] = useState<Recipe>([])

    const addIngredient = () => {
        setRecipe(oldRecipe => [...oldRecipe, {name: "", initialAmount: 0}])
    }

    const removeIngredient = (name: string) => {
        const newRecipe = [...recipe]
        newRecipe.filter(item => item.name != name);
        setRecipe(newRecipe)
    }

    const updateIngredient = (index: number,field: keyof Ingredient, value: string| number ) => {
        const newRecipe = [...recipe]
        if (field == "name") {
            newRecipe[index].name = value as string
        } else if (field == "initialAmount") {
            newRecipe[index].initialAmount = value as number
        }
        setRecipe(newRecipe)

    }

    return (
        <VStack width="70vw">
        <Table.Root 
        variant={'outline'} 
        striped 
        showColumnBorder
        interactive>
  <Table.Header>
    <Table.Row>
      <Table.ColumnHeader>Ingredient</Table.ColumnHeader>
      <Table.ColumnHeader>Amount</Table.ColumnHeader>
      <Table.ColumnHeader>Amount for new tin</Table.ColumnHeader>
      <Table.ColumnHeader>Delete</Table.ColumnHeader>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    {
        recipe.map((ingredient: Ingredient, index) => (
            <Table.Row key ={index}>
                <Table.Cell>
                <Input
                placeholder="Enter ingredient"
                onChange={(e) => {
                    updateIngredient(index, "name", e.target.value)
                }}
                />
                </Table.Cell>
                <Table.Cell>
                    <Input
                    type="number"
                    placeholder="Enter amount"
                    onChange={(e) => {
                        updateIngredient(index, "initialAmount", e.target.valueAsNumber)
                    }}
                    />
                </Table.Cell>
                <Table.Cell>
                    {ingredient.adjustedAmount}
                </Table.Cell>
                <Table.Cell>
            <IconButton onClick={() => removeIngredient(ingredient.name)}>
                <MdDelete/>
            </IconButton>
                </Table.Cell>


            </Table.Row>
        ))
    }
   
  </Table.Body>
</Table.Root>
<Button onClick={addIngredient}>Add Ingredient</Button>
</VStack>
    )
}