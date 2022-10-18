import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Link,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Logo } from "./styles";

const Navbar = () => {
  const { user, signOut } = useContext(AuthContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const NavLinks = () => (
    <>
      {user ? (
        <>
          <Link href={"/community"}>
            <Button colorScheme="teal" variant="outline" w={["100%", "12rem"]}>
              Community
            </Button>
          </Link>
          <Button
            colorScheme="teal"
            variant="outline"
            onClick={() => signOut()}
            w={["100%", "12rem"]}
          >
            Sign Out
          </Button>
        </>
      ) : (
        <>
          <Link href={"/signup"}>
            <Button colorScheme="teal" variant="outline" w={["100%", "12rem"]}>
              Sign Up
            </Button>
          </Link>
          <Link href={"/login"}>
            <Button colorScheme="teal" variant="solid" w={["100%", "12rem"]}>
              Login
            </Button>
          </Link>
        </>
      )}
    </>
  );

  return (
    <>
      <Box bg={"white.500"} px={4} color={"black"} w="100%" padding={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack
            spacing={8}
            alignItems={"center"}
            justifyContent={"space-between"}
            width="100%"
            paddingX={4}
          >
            <Link href={"/"}>
              <Logo src={"/logo_2.png"} />
            </Link>

            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
              bg="teal"
              color="white"
            />
          </HStack>

          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            <NavLinks />
          </HStack>
        </Flex>

        {isOpen ? (
          <Box display={{ md: "none" }} w="100%">
            <Stack as={"nav"} spacing={4}>
              <NavLinks />
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default Navbar;
