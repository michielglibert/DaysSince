import { Box, Text, HStack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

interface Props {
  icon: React.ReactElement;
  text: string;
  href: string;
}

const NavigationItem: React.FC<Props> = ({ icon, text, href }) => {
  return (
    <Link href={href} passHref>
      <HStack spacing="8px" as="a">
        <Box>{icon}</Box>
        <Text fontSize="xl" fontWeight={500}>
          {text}
        </Text>
      </HStack>
    </Link>
  );
};

export default NavigationItem;
