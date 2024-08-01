import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { ABOUT } from "../../../../helper/image.cld";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTypescript } from "react-icons/si";
import HeadingTittle from "../../../HeadingTittle";

const AboutSection: React.FC = () => {
  return (
    <Flex
      id="about-section"
      pos="relative"
      flexDir="column"
      alignItems="center"
      align="center"
      minH="90vh"
      p="50px"
      pt="100px"
      mx={{ base: "0px", md: "100px" }}
      gap={{ base: "80px", lg: "40px" }}
    >
      <HeadingTittle title="About" />

      <Box
        pos="absolute"
        display={{ base: "none", md: "flex" }}
        top={{ base: 32, lg: 32 }}
        right={-10}
        backgroundColor="#FF14BD"
        rounded="full"
        w="200px"
        h="200px"
        animation="bounce 3s ease-in-out infinite"
      />

      <Flex
        w="full"
        flexDir={{ base: "column-reverse", lg: "row-reverse" }}
        pt="20px"
        justifyContent="space-between"
        alignItems="center"
        gap="20px"
      >
        <Flex
          pos="inherit"
          zIndex={30}
          flexDir="column"
          color="white"
          fontWeight={600}
          textAlign="justify"
          gap="10px"
          w={{ base: "full", md: "lg" }}
          p={{ base: 7, md: 10 }}
          className="about"
        >
          <Text>
            With over 2 years of experience in Frontend Development, I
            specialize in JavaScript, particularly React.js and Next.js. I have
            contributed to diverse web projects, including Management, B2B, and
            B2C products. My adaptability and quick learning enable me to excel
            with various technologies and frameworks. I am eager to bring my
            passion for frontend excellence to new challenges and the
            ever-evolving field of web development.
          </Text>
        </Flex>
        <Box pos="relative" mb={10}>
          <Box
            as={Flex}
            pos="absolute"
            top={-5}
            left={-5}
            bg="white"
            boxShadow="lg"
            justifyContent="center"
            align="center"
            w="50px"
            h="50px"
            borderRadius="10px"
          >
            <FaReact size={25} />
          </Box>
          <Box
            as={Flex}
            pos="absolute"
            right={-5}
            top={130}
            bg="white"
            boxShadow="lg"
            justifyContent="center"
            align="center"
            w="50px"
            h="50px"
            borderRadius="10px"
          >
            <SiTypescript size={25} />
          </Box>
          <Box
            as={Flex}
            pos="absolute"
            bottom={-5}
            left={-5}
            bg="white"
            boxShadow="lg"
            justifyContent="center"
            align="center"
            w="50px"
            h="50px"
            borderRadius="10px"
          >
            <SiNextdotjs size={25} />
          </Box>
          <Image src={ABOUT.ABOUT_ILLUSTRATION} w="400px" className="about" />
        </Box>
      </Flex>
    </Flex>
  );
};

export default AboutSection;
