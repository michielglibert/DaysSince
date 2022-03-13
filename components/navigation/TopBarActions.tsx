import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { PlusIcon } from "@heroicons/react/solid";

interface Props {}

const TopBarActions: React.FC<Props> = () => {
  return (
    <Box>
      <Button
        colorScheme="blue"
        leftIcon={<PlusIcon color="white" height={20} width={20} />}
      >
        New event
      </Button>
    </Box>
  );
};

export default TopBarActions;
