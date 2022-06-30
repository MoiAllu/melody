import { Box } from "@chakra-ui/react";
import SideBar from "./sideBar";

const Layout = ({ children }) => {
  return (
    <Box width="100vw" height="100vh">
      <Box position="absolute" top="0" width="250px" left="0">
        <SideBar />
      </Box>
      <Box marginLeft="250px" marginBottom="100px">
        {children}
      </Box>
      <Box position="absolute" left="250" bottom="0">
        player
      </Box>
    </Box>
  );
};
export default Layout;
