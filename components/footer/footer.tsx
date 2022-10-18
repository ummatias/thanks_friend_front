import { Image } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Image
      position={"absolute"}
      minW={"100%"}
      bottom={0}
      src="/wave.svg"
      alt="logo"
    />
  );
};

export default Footer;
