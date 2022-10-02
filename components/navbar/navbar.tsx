import { Button } from "@chakra-ui/react";
import { NavbarContainer, NavbarButtons, Logo } from "./styles";
import Link from "next/link";
import { useEffect, useState } from "react";

type NavbarProps = {
    logged: boolean;
}

const Navbar = () => {

    const [logged, setLogged] = useState(false)


    useEffect(() => {
        const token = sessionStorage.getItem('logged')
        if (token) {
            setLogged(true)
        }
    }, [])


    return (
        <NavbarContainer>
        <Link href={"/"}>
            <Logo src={"/logo_2.png"}/>
        </Link>
        <NavbarButtons>
        {logged ? (
            <Button colorScheme="teal" variant="outline">
                Logout
            </Button>
        ) : (
            <>
                <Link href={"/signup"}>
                    <Button colorScheme="teal" variant="outline" style={{width: '12rem'}}> 
                            Sign Up
                    </Button>
                </Link>
                <Link href={"/login"}>
                    <Button colorScheme="teal" variant="solid" style={{width: '12rem'}}>Login</Button>
                </Link>
            </>
        )}
        </NavbarButtons>
        
        </NavbarContainer>
    );
    }

    

export default Navbar;