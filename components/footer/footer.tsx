import { Box, Image } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      display="block"
      w={"100vw"}
      zIndex={-1}
      position="absolute"
      overflow={"hidden"}
    >
      <Image
        position={"absolute"}
        minW={"100%"}
        bottom={0}
        src="/wave.svg"
        alt="logo"
      />
    </Box>
  );
};

export default Footer;
