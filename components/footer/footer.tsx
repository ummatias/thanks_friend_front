import { Box, Image } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" position="relative" zIndex="docked" w="100%" h="300px">
      <Image
        src="/wave.svg"
        alt="wave"
        position="absolute"
        bottom="0"
        left="0"
        w="100vw"
      />
    </Box>
  );
};

export default Footer;
