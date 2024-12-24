import { calculateBatterTins } from "@/utils/Ratio";
import { calculateMinTinVolume } from "@/utils/Volume";
import { Table, VStack } from "@chakra-ui/react";

type CompareTableProps = {
  amount: number;
  tinHeight: number;
};

const tinDiameters = [4, 5, 6, 7, 8, 9];

export default function CompareTable({ amount, tinHeight }: CompareTableProps) {
  return (
    <VStack width="70vw">
      <Table.Root variant={"outline"} striped showColumnBorder interactive>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Tin Diameter (inches)</Table.ColumnHeader>
            <Table.ColumnHeader>Tin Height (inches)</Table.ColumnHeader>
            <Table.ColumnHeader>Number of tins</Table.ColumnHeader>
            <Table.ColumnHeader>Grams per tin</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {tinDiameters.map((diameter, index) => {
            return (
              <Table.Row key={index}>
                <Table.Cell>{diameter}</Table.Cell>
                <Table.Cell>{isNaN(tinHeight) ? 0 : tinHeight}</Table.Cell>
                <Table.Cell>
                  {calculateBatterTins(amount, diameter, tinHeight)}
                </Table.Cell>
                <Table.Cell>
                  {calculateMinTinVolume(amount, diameter, tinHeight)} grams
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table.Root>
    </VStack>
  );
}
