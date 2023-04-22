import { HStack, Image, Show } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => (
  <HStack justifyContent="space-evenly" padding="10px">
    <Image src={logo} boxSize="50px" />
    <SearchInput />
    <ColorModeSwitch />
  </HStack>
);

export default NavBar;
