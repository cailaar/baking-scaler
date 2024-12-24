import { Box, Heading, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <header>
      <HStack bg="gray.100" px="6" py="4" boxShadow="sm">
        <Heading>Baking Scaler</Heading>
        <Box ml="auto">
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
