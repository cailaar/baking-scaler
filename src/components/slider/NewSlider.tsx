import { Card } from "@chakra-ui/react";
import SliderOption from "./SliderOption";

export default function NewSlider() {

    return(
        <Card.Root width = "30vw">
  <Card.Body>
    <Card.Title>New Values</Card.Title>
    <Card.Description>
      <SliderOption
      initialValue={0}
      maxValue={10}
      title={"New number of tins"}
      />
      <SliderOption
      initialValue={3}
      maxValue={10}
      title={"New diameter of tins (inches)"}
      />
      <SliderOption
      initialValue={6}
      maxValue={10}
      title={"New height of tins (inches)"}
      />

    </Card.Description>
  </Card.Body>
  <Card.Footer />
</Card.Root>
    )
}