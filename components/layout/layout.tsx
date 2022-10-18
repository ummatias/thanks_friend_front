import { Flex } from "@chakra-ui/react";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Flex direction={"column"} w={"100%"} h={"100vh"}>
      <Navbar />
      {children}
      <Footer />
    </Flex>
  );
};

export default Layout;
