import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const Footer: React.FC = () => {
  return (
    <Flex
      color="white"
      justifyContent="center"
      minH="100px"
      alignItems="center"
      flexDir="column"
      gap="20px"
      mt="150px"
      px="20px"
      borderTop="1px solid white"
    >
      <Text textAlign="center">
        Copyright &copy; All Reserved by Tegar Faris Nurhakim | portfolio v.2
        2024
      </Text>
    </Flex>
  );
};

export default Footer;
