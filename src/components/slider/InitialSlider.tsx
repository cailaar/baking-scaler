import { Card } from "@chakra-ui/react";
import SliderOption from "./SliderOption";

export default function InitialSlider() {

    return(
        <Card.Root width = "30vw">
  <Card.Body>
    <Card.Title>Initial Values</Card.Title>
    <Card.Description>
      <SliderOption
      initialValue={0}
      maxValue={10}
      title={"Initial number of tins"}
      />
      <SliderOption
      initialValue={3}
      maxValue={10}
      title={"Initial diameter of tins (inches)"}
      />
      <SliderOption
      initialValue={6}
      maxValue={10}
      title={"Initial height of tins (inches)"}
      />

    </Card.Description>
  </Card.Body>
  <Card.Footer />
</Card.Root>
    )
}