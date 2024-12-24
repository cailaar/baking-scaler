import { HStack, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";
import CompareTable from "../table/CompareTable";
import { Field } from "../ui/field";
import { InputGroup } from "../ui/input-group";

export default function ComparePage() {
  const [batterAmount, setBatterAmount] = useState<number>(0);
  const [tinHeight, setTinHeight] = useState<number>(0);
  return (
    <VStack>
      <HStack>
        <Field label="Batter amount">
          <InputGroup endElement={"grams"}>
            <Input
              type="number"
              onChange={(e) => setBatterAmount(e.target.valueAsNumber)}
            />
          </InputGroup>
        </Field>
        <Field label="Tin Height">
          <InputGroup endElement={"inches"}>
            <Input
              type="number"
              onChange={(e) => setTinHeight(e.target.valueAsNumber)}
            />
          </InputGroup>
        </Field>
      </HStack>
      <CompareTable amount={batterAmount} tinHeight={tinHeight} />
    </VStack>
  );
}
