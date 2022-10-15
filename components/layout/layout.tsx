import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import { LayoutContainer } from "./styles";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutContainer>
      <Navbar />
      {children}
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
