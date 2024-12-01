"use client";

import { createListCollection, Input } from "@chakra-ui/react";
import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "@/components/ui/select";
import { Ingredient } from "@/models/Recipe";
import { useState } from "react";

export type IngredientOptionsProps = {
  setIngredients: React.Dispatch<React.SetStateAction<Ingredient[]>>;
};

export default function IngredientOptions({ setIngredients }: IngredientOptionsProps) {
  const ingredientsCollection = createListCollection({
    items: [
      { label: "Flour", value: "FLOUR" },
      { label: "Sugar", value: "SUGAR" },
      { label: "Oil", value: "OIL" },
      { label: "Butter", value: "BUTTER" },
      { label: "Baking powder", value: "BAKING_POWDER" },
      { label: "Eggs", value: "EGGS" },
      { label: "Other", value: "OTHER" },
    ],
  });

  const [selectedName, setSelectedName] = useState<string>("");

  const updateAmount = (ingredients: Ingredient[], name: string, amount: number): Ingredient[] => {
    return ingredients.map((ingredient) =>
      ingredient.name === name ? { ...ingredient, amount } : ingredient
    );
  };

  return (
    <>
      <SelectRoot collection={ingredientsCollection} size="md" width="320px">
        <SelectLabel>Select ingredient</SelectLabel>
        <SelectTrigger>
          <SelectValueText placeholder="Select ingredient" />
        </SelectTrigger>
        <SelectContent>
          {ingredientsCollection.items.map((ingredient) => (
            <SelectItem
              item={ingredient}
              key={ingredient.value}
              onSelect={() => {
                setIngredients((oldArray) => {
                  if (!oldArray.some((ing) => ing.name === ingredient.label)) {
                    return [...oldArray, { name: ingredient.label, amount: 0 }];
                  }
                  return oldArray; 
                });
                setSelectedName(ingredient.label); 
              }}
            >
              {ingredient.label}
            </SelectItem>
          ))}
        </SelectContent>
      </SelectRoot>

      <Input
        placeholder="Enter amount"
        type="number"
        onChange={(event) => {
          const amount = Number(event.target.value);
          if (!selectedName) return; 

          setIngredients((oldArray) => updateAmount(oldArray, selectedName, amount));
        }}
        disabled={!selectedName} 
      />
    </>
  );
}
