import React from "react";
import { Box, Flex } from "@chakra-ui/react";

interface SlideAutoPlayProps {
  children: React.ReactNode;
  width?: string;
}

const SlideAutoPlay: React.FC<SlideAutoPlayProps> = ({ children, width }) => {
  return (
    <Flex
      w={width ?? "250px"}
      alignItems="center"
      p="15px"
      sx={{
        perspective: "100px",
      }}
    >
      <Box
        transition="transform 1s"
        w="full"
        h="full"
        flexGrow="1"
        _hover={{
          transform: "translateZ(15px)",
        }}
      >
        {children}
      </Box>
    </Flex>
  );
};

export default SlideAutoPlay;
