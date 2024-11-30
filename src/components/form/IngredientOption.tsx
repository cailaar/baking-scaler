"use client"

import { createListCollection, Input } from "@chakra-ui/react"
import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "@/components/ui/select"
import { Ingredient } from "@/models/Recipe"
import { useState } from "react"

export type IngredientOptionsProps = {
    setIngredients: React.Dispatch<React.SetStateAction<Ingredient[]>>
}

export default function IngredientOptions({setIngredients}: IngredientOptionsProps){
    const ingredients = createListCollection({
        items: [
        {label: "Flour", value: "FLOUR"},
        {label: "Sugar", value: "SUGAR"},
        {label: "Oil", value: "OIL"},
        {label: "Butter", value: "BUTTER"},
        {label: "Baking powder", value: "BAKING_POWDER"},
        {label: "Eggs", value: "EGGS"},
        {label: "Other", value: "OTHER"}
      ]})

 function updateAmount(ingredients: Ingredient[],name: string, amount: number ): Ingredient[] {
    let index = -1;

    ingredients.forEach((ingredient, ingredientIndex) => {
        if (ingredient.name == name) {
            index = ingredientIndex
        }
    })
    if (index != -1) {
        ingredients[index] = {
            name,
            amount
        }
    }
    return ingredients
 }    
 const [name, setName] = useState<string>(""); 
  return (
    <>
      <SelectRoot collection={ingredients} size="md" width="320px">
      <SelectLabel>Select ingredient</SelectLabel>
      <SelectTrigger>
        <SelectValueText placeholder="Select ingredient" />
      </SelectTrigger>
      <SelectContent>
        {ingredients.items.map((ingredient) => (
          <SelectItem item={ingredient} key={ingredient.value}
          onSelect={() => {setIngredients(oldArray => [...oldArray, {name: ingredient.label, amount: 0}])
          setName(ingredient.label)}}>
            {ingredient.label}
          </SelectItem>
    ))}
      </SelectContent>
    </SelectRoot>
    <Input placeholder="Enter amount"
    onChange={(event) => {
        setIngredients(oldArray => updateAmount(oldArray, name,event.target.valueAsNumber ))
    }}/>
    </>

  )
}

