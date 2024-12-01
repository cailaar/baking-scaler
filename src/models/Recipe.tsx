export type Ingredient = {
    id: string
    name: string
    initialAmount: number
    adjustedAmount?: number
}


export type Recipe = Ingredient[]

