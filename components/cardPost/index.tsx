import { DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export const CardPost = ({
  text,
  color,
  id,
  onDelete,
  owner,
}: {
  text: string;
  color: string;
  id: string;
  onDelete: Function;
  owner: boolean;
}) => {
  return (
    <Center py={6}>
      <Box
        maxW={"400px"}
        maxH={"300px"}
        h={"200px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        _hover={{ transform: "translateY(-5px)", shadow: "lg" }}
        transition={"all .3s ease-in-out"}
        cursor="pointer"
      >
        <Box
          h="30px"
          w="full"
          bg={color}
          display="flex"
          justifyContent="flex-end"
        >
          {owner && (
            <Button
              onClick={() => onDelete(id)}
              colorScheme="teal"
              h="100%"
              rounded="none"
            >
              <DeleteIcon />
            </Button>
          )}
        </Box>
        <Box p={6}>
          <Stack spacing={0} align={"center"}>
            <Text color={"black.500"}>{text}</Text>
          </Stack>
        </Box>
      </Box>
    </Center>
  );
};

export default CardPost;
