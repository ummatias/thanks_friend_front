import Image from "next/image";
import { FooterContainer, Wave } from './styles'

const Footer = () => {
    return (
        <FooterContainer>
            <Wave src="/wave.svg" alt="logo" />
        </FooterContainer>
    )
    }

export default Footer