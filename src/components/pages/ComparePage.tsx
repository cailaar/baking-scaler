import { Input, VStack } from "@chakra-ui/react";
import { useState } from "react";
import CompareTable from "../table/CompareTable";
import { Field } from "../ui/field";
import { InputGroup } from "../ui/input-group";

export default function ComparePage() {
  const [batterAmount, setBatterAmount] = useState<number>(0);
  return (
    <VStack>
      <Field label="Batter amount">
        <InputGroup endElement={"grams"}>
          <Input
            type="number"
            onChange={(e) => setBatterAmount(e.target.valueAsNumber)}
          />
        </InputGroup>
      </Field>
      <CompareTable amount={batterAmount} />
    </VStack>
  );
}
