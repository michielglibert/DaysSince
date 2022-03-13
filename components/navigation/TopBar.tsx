import { HStack } from "@chakra-ui/react";
import React from "react";
import Navigation from "./Navigation";
import TopBarActions from "./TopBarActions";

interface Props {}

const TopBar: React.FC<Props> = () => {
  return (
    <HStack
      w="100%"
      boxShadow="md"
      px="128px"
      py="24px"
      spacing="32px"
      justify="space-between"
    >
      <Navigation />
      <TopBarActions />
    </HStack>
  );
};

export default TopBar;
