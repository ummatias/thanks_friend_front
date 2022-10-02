import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import { LayoutContainer } from './styles';

type LayoutProps = {
    children: React.ReactNode;
    logged: boolean;
}

const Layout = ({ children, logged } : LayoutProps) => {
    return (
        <LayoutContainer>
            <Navbar logged={logged}/>
            {children}
            <Footer/>
        </LayoutContainer>
    )
}

export default Layout;