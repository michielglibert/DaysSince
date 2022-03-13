import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { PlusIcon } from "@heroicons/react/solid";
import Link from "next/link";

interface Props {}

const TopBarActions: React.FC<Props> = () => {
  return (
    <Link href="/events/new" passHref>
      <Button
        colorScheme="blue"
        leftIcon={<PlusIcon color="white" height={20} width={20} />}
        as="a"
      >
        New event
      </Button>
    </Link>
  );
};

export default TopBarActions;
