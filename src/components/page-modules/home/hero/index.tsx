import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  useToast,
} from "@chakra-ui/react";
import { FaFileDownload, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTypescript } from "react-icons/si";
import { HOME } from "../../../../helper/image.cld";

const HeroMain: React.FC = () => {
  const toast = useToast();
  const handleDownload = async () => {
    try {
      const link = await document.createElement("a");
      link.href = "/cv/CV.pdf";
      link.download = "CV-Tegar-Faris-Nurhakim.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.log(err);
    } finally {
      toast({
        title: "Succesfully Downloaded",
        variant: "top-accent",
        position: "top",
        status: "success",
      });
    }
  };
  return (
    <Flex
      id="hero-section"
      w="full"
      px={{ base: "45px", lg: "100px" }}
      justifyContent="space-between"
      alignItems="center"
      h="120vh"
      overflowX="hidden"
      bgImage={HOME.HERO_BG}
      bgPosition="bottom"
      bgSize="cover"
    >
      <Flex flexDir="column" gap="20px" w="full" pb={32}>
        <Text
          display={{ base: "none", md: "flex" }}
          border="1px solid"
          borderColor="#8934FF"
          borderRadius="full"
          px="20px"
          py="3px"
          color="white"
          h="fit-content"
          w="fit-content"
          fontSize="14px"
          fontWeight={600}
        >
          Unveiling Creative Excellence: Explore My Dazzling Portfolio Journey
        </Text>
        <Heading color="white">
          Crafting Tomorrow's Masterpieces Today: A Glimpse into{" "}
          <Text as="span" color="#8934FF">
            Tegar's
          </Text>
          &nbsp;Extraordinary{" "}
          <Text as="span" color="#8934FF">
            Portfolio
          </Text>
        </Heading>
        <Button
          w="fit-content"
          boxShadow="lg"
          variant="outline"
          border="1px solid"
          borderColor="#8934FF"
          color="white"
          leftIcon={<FaFileDownload color="white" />}
          onClick={handleDownload}
        >
          Download CV
        </Button>
      </Flex>
      <Flex
        pos="relative"
        display={{ base: "none", lg: "flex" }}
        justifyContent="center"
        alignItems="start"
        w="full"
        pb={44}
      >
        <Image
          pos="inherit"
          zIndex={20}
          src={HOME.HERO_AVATAR}
          rounded="lg"
          w="fit-content"
          h="500px"
          objectFit="contain"
          borderRadius="20px"
          animation="bounce 3s ease-in-out infinite"
        />
        <Box
          pos="absolute"
          ml="10px"
          bgColor="#8934FF"
          w="365px"
          h="350px"
          rounded="100% 100% 20% 3%"
          bottom={44}
          animation="bounce 3s ease-in-out infinite"
        />
        <Box
          pos="absolute"
          right={0}
          top={32}
          animation="spin 7s linear infinite"
        >
          <FaReact color="white" size={50} />
        </Box>
        <Box
          pos="absolute"
          right={0}
          bottom={52}
          animation="spin 7s linear infinite"
        >
          <SiNextdotjs color="white" size={50} />
        </Box>
        <Box
          pos="absolute"
          right={0}
          bottom="350px"
          animation="spin 7s linear infinite"
        >
          <SiTypescript color="white" size={40} />
        </Box>
      </Flex>
    </Flex>
  );
};

export default HeroMain;
