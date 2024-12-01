import { Ingredient, Recipe } from "@/models/Recipe";
import { Table, IconButton, VStack, Input } from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";
import { Button } from "../ui/button";
import { v4 as uuidv4 } from 'uuid';

export type RecipeTableProps = {
    setRecipe: React.Dispatch<React.SetStateAction<Recipe>>
    recipe: Recipe
}

export default function RecipeTable({recipe, setRecipe}: RecipeTableProps) {

    const addIngredient = () => {
        setRecipe(oldRecipe => [...oldRecipe, { id: uuidv4(), name: "", initialAmount: 0 }]);
    };

    const removeIngredient = (id: string) => {
        setRecipe(oldRecipe => oldRecipe.filter(item => item.id !== id));
    };

    const updateIngredient = (id: string, field: keyof Ingredient, value: string | number) => {
        setRecipe(oldRecipe =>
            oldRecipe.map(ingredient =>
                ingredient.id === id
                    ? { ...ingredient, [field]: value }
                    : ingredient
            )
        );
    };

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
        recipe.map((ingredient: Ingredient) => (
            <Table.Row key ={ingredient.id}>
                <Table.Cell>
                <Input
                placeholder="Enter ingredient"
                onChange={(e) => {
                    updateIngredient(ingredient.id, "name", e.target.value)
                }}
                />
                </Table.Cell>
                <Table.Cell>
                    <Input
                    type="number"
                    placeholder="Enter amount"
                    onChange={(e) => {
                        updateIngredient(ingredient.id, "initialAmount", e.target.valueAsNumber)
                    }}
                    />
                </Table.Cell>
                <Table.Cell>
                    {ingredient.adjustedAmount}
                </Table.Cell>
                <Table.Cell>
            <IconButton onClick={() => removeIngredient(ingredient.id)}>
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