import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Heading } from "@chakra-ui/react"

export type SliderOptionProps = {
    title: string
    initialValue: number
    maxValue: number
    step?: number

}

export default function SliderOption({title, initialValue, maxValue, step = 1} : SliderOptionProps) {
    const [value, setValue] = useState([initialValue])

    const marks = []
    for (let i=0; i< maxValue+1; i+=step) {
        marks.push(
            {value: i, label: `${i}`}
        )
    }


    return (
<>
<Heading size={'sm'}>{title}</Heading>
<Slider
    value={value}
    onValueChange={(e) => setValue(e.value)}
    step={step}
    marks={marks}
    max={maxValue}
    />
</>
    
        
    )
}