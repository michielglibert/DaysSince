import { Box } from "@chakra-ui/react";
import React from "react";
import TopBar from "./navigation/TopBar";

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Box>
      <TopBar />
      <Box p="16px">{children}</Box>
    </Box>
  );
};

export default Layout;
