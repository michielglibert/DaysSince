import { Box } from "@chakra-ui/react";
import React from "react";
import Navigation from "./navigation/Navigation";
import TopBar from "./navigation/TopBar";

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Box>
      <TopBar />
      {children}
    </Box>
  );
};

export default Layout;
