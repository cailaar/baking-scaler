import { calculateVolume } from "@/utils/Volume";
import { Card } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import SliderOption from "./SliderOption";

export type InitialSliderProps = {
  setVolume: React.Dispatch<React.SetStateAction<number>>;
  volume: number;
};

export default function InitialSlider({
  setVolume,
  volume,
}: InitialSliderProps) {
  const [tinNumber, setTinNumber] = useState(0);
  const [tinDiameter, setTinDiameter] = useState(3);
  const [tinHeight, setTinHeight] = useState(6);

  useEffect(() => {
    const newVolume = calculateVolume(tinNumber, tinDiameter, tinHeight);
    setVolume(newVolume);
  }, [tinNumber, tinDiameter, tinHeight, setVolume]);

  return (
    <Card.Root width="30vw">
      <Card.Body>
        <Card.Title>Initial Values</Card.Title>
        <Card.Description>
          <SliderOption
            initialValue={0}
            maxValue={10}
            title={"Initial number of tins"}
            onChange={setTinNumber}
          />
          <SliderOption
            initialValue={3}
            maxValue={10}
            title={"Initial diameter of tins (inches)"}
            onChange={setTinDiameter}
          />
          <SliderOption
            initialValue={6}
            maxValue={10}
            title={"Initial height of tins (inches)"}
            onChange={setTinHeight}
          />
        </Card.Description>
      </Card.Body>
      <Card.Footer>
        Total Volume: {Math.round((volume + Number.EPSILON) * 100) / 100} inches
        <sup>3</sup>
      </Card.Footer>
    </Card.Root>
  );
}
