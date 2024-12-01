import { Slider } from "@/components/ui/slider"
import { Heading } from "@chakra-ui/react"


export type SliderOptionProps = {
    title: string
    initialValue: number
    maxValue: number
    step?: number
    onChange: React.Dispatch<React.SetStateAction<number>>

}

export default function SliderOption({title, initialValue, maxValue,onChange, step = 1} : SliderOptionProps) {

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
    defaultValue={[initialValue]}
    step={step}
    marks={marks}
    max={maxValue}
    onValueChangeEnd={(e) => onChange(e.value[0])}
    />
</>
    
        
    )
}