import { quotes } from "@/utils/Quotes";
import { Box, Float, Heading, HStack, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Blockquote, BlockquoteIcon } from "./ui/blockquote";
import { Button } from "./ui/button";

export default function Navbar() {
  const index = Math.floor(Math.random() * quotes.length);
  const quote = quotes[index];

  return (
    <header>
      <HStack
        bg="gray.100"
        px="6"
        py="4"
        boxShadow="sm"
        justifyContent="space-between"
      >
        <Heading onClick={() => (window.location.href = "/")}>
          Baking Scaler
        </Heading>
        <VStack flex="1" align="center">
          <Blockquote
            width="50vw"
            variant="plain"
            colorPalette="red"
            showDash
            icon={
              <Float placement="top-start" offsetY="2">
                <BlockquoteIcon />
              </Float>
            }
          >
            {quote}
          </Blockquote>
        </VStack>
        <Box>
          <Button mr="4">
            <Link to="/">Home Page</Link>
          </Button>
          <Button>
            <Link to="/compare">Compare</Link>
          </Button>
        </Box>
      </HStack>
    </header>
  );
}
