import React from "react";
import { Divider, Flex, Heading } from "@chakra-ui/react";

const HeadingTittle: React.FC<{ title: string; color?: string }> = ({
  title,
  color,
}) => {
  return (
    <Flex flexDir="column" gap="20px" alignItems="center">
      <Heading color={color ? color : "white"}>{title}</Heading>
      <Divider
        w="250px"
        borderBottom="10px solid"
        borderColor="#8934FF"
        borderRadius="10px"
      />
    </Flex>
  );
};

export default HeadingTittle;
