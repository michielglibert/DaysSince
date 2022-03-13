import { HStack } from "@chakra-ui/react";
import React from "react";
import NavigationItem from "./NavigationItem";
import { ViewGridIcon, ViewListIcon } from "@heroicons/react/outline";

interface Props {}

const Navigation: React.FC<Props> = () => {
  return (
    <HStack spacing="64px">
      <NavigationItem
        icon={<ViewGridIcon color="black" height={24} width={24} />}
        text="Dashboard"
        href="/"
      />
      <NavigationItem
        icon={<ViewListIcon color="black" height={24} width={24} />}
        text="Events"
        href="/"
      />
    </HStack>
  );
};

export default Navigation;
