import { Button } from "@chakra-ui/react";
import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Logo, NavbarButtons, NavbarContainer } from "./styles";

type NavbarProps = {
  logged: boolean;
};

const Navbar = () => {
  const { user, signOut } = useContext(AuthContext);

  return (
    <NavbarContainer>
      {user ? (
        <Link href={"/decks"}>
          <Logo src={"/logo_2.png"} />
        </Link>
      ) : (
        <Link href={"/"}>
          <Logo src={"/logo_2.png"} />
        </Link>
      )}

      <NavbarButtons>
        {user ? (
          <>
            <Link href={"/community"}>
              <Button colorScheme="teal" variant="outline">
                Community
              </Button>
            </Link>
            <Button
              colorScheme="teal"
              variant="outline"
              onClick={() => signOut()}
            >
              Sign Out
            </Button>
          </>
        ) : (
          <>
            <Link href={"/signup"}>
              <Button
                colorScheme="teal"
                variant="outline"
                style={{ width: "12rem" }}
              >
                Sign Up
              </Button>
            </Link>
            <Link href={"/login"}>
              <Button
                colorScheme="teal"
                variant="solid"
                style={{ width: "12rem" }}
              >
                Login
              </Button>
            </Link>
          </>
        )}
      </NavbarButtons>
    </NavbarContainer>
  );
};

export default Navbar;
