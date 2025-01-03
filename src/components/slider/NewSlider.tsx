import { Card } from "@chakra-ui/react";
import SliderOption from "./SliderOption";
import { calculateVolume } from "@/utils/Volume";
import { useState, useEffect } from "react";

export type NewSliderProps = {
  setVolume: React.Dispatch<React.SetStateAction<number>>
  volume: number
}

export default function NewSlider({setVolume, volume}: NewSliderProps) {
  const [tinNumber, setTinNumber] = useState(0);
  const [tinDiameter, setTinDiameter] = useState(3);
  const [tinHeight, setTinHeight] = useState(6);

  useEffect(() => {
    const newVolume = calculateVolume(tinNumber, tinDiameter, tinHeight);
    setVolume(newVolume);
  }, [tinNumber, tinDiameter, tinHeight, setVolume]);

    return(
        <Card.Root width = "30vw">
  <Card.Body>
    <Card.Title>New Values</Card.Title>
    <Card.Description>
      <SliderOption
      initialValue={0}
      maxValue={10}
      title={"New number of tins"}
      onChange={setTinNumber}
      />
      <SliderOption
      initialValue={3}
      maxValue={10}
      title={"New diameter of tins (inches)"}
      onChange={setTinDiameter}
      />
      <SliderOption
      initialValue={6}
      maxValue={10}
      title={"New height of tins (inches)"}
      onChange={setTinHeight}
      />

    </Card.Description>
  </Card.Body>
  <Card.Footer>
  Total Volume: {Math.round((volume + Number.EPSILON) * 100) / 100} inches<sup>3</sup>
  </Card.Footer>
</Card.Root>
    )
}