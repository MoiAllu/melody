import {
  Box,
  LinkBox,
  ListIcon,
  List,
  ListItem,
  Divider,
  Center,
  LinkOverlay,
} from "@chakra-ui/react";
import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
} from "react-icons/md";
import Image from "next/image";

const navMenu = [
  {
    name: "Home",
    icon: MdHome,
    route: "/",
  },
  {
    name: "Search",
    icon: MdSearch,
    route: "/search",
  },
  { name: "Your Library", icon: MdLibraryMusic, route: "/library" },
];
const SideBar = () => {
  return (
    <Box width="100%" height="100vh" bg="black" color="gray" paddingX="5px">
      trax
      <Box paddingY="5px">
        <Box width="120px" marginBottom="20px" paddingX="5px">
          <Image src="/logo.svg" width={120} height={60} />
        </Box>
        <Box></Box>
      </Box>
    </Box>
  );
};
export default SideBar;
