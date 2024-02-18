import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import React from "react";
import HeadingTittle from "../../../HeadingTittle";
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ContactSection: React.FC = () => {
  return (
    <Flex
      id="contact-section"
      py="100px"
      flexDir="column"
      gap="50px"
      justifyContent="center"
      alignItems="center"
      overflowX="hidden"
    >
      <HeadingTittle title="Ready to Collaborate ?" />

      <Flex
        pos="relative"
        bg="linear-gradient(162deg, rgba(43,0,95,1) 0%, rgba(137,52,255,1) 100%, rgba(0,0,0,1) 100%)"
        p="20px"
        mt={20}
        w="fit-content"
        h="full"
        borderRadius="10px"
      >
        <Flex flexDir="column" gap="20px" alignItems="center" w="full" h="full">
          <Flex flexDir="column" gap="5px" textAlign="center">
            <Text fontWeight={600} fontSize="24px" color="white">
              Tegar Faris Nurhakim
            </Text>
            <Text fontSize="14px" color="white" fontWeight={600} pb="20px">
              Frontend Developer
            </Text>

            <Divider />
            <Flex gap="10px" justifyContent="center" pt={10} color="white">
              <Link to="mailto:tegarfarisn@gmail.com">
                <HiOutlineMail size={30} />
              </Link>
              <Link to="https://www.linkedin.com/in/tegarfarisn/">
                <FaLinkedin size={30} />
              </Link>
              <Link to="https://github.com/tegarfaris">
                <FaSquareGithub size={30} />
              </Link>
            </Flex>
          </Flex>
          <Box
            pos="absolute"
            top={-10}
            left={-36}
            w="50px"
            h="50px"
            rounded="full"
            bg="linear-gradient(162deg, rgba(43,0,95,1) 0%, rgba(137,52,255,1) 100%, rgba(0,0,0,1) 100%)"
            animation="bounce 4s ease-in-out infinite"
          />
          <Box
            pos="absolute"
            top={-10}
            right={-32}
            w="100px"
            h="100px"
            rounded="full"
            bg="linear-gradient(162deg, rgba(43,0,95,1) 0%, rgba(137,52,255,1) 100%, rgba(0,0,0,1) 100%)"
            animation="bounce 3s ease-in-out infinite"
          />
          <Box
            pos="absolute"
            bottom={-10}
            left={-32}
            w="90px"
            h="90px"
            rounded="full"
            bg="linear-gradient(162deg, rgba(43,0,95,1) 0%, rgba(137,52,255,1) 100%, rgba(0,0,0,1) 100%)"
            animation="bounce 2s ease-in-out infinite"
          />
          <Box
            pos="absolute"
            bottom={-10}
            right={-36}
            w="50px"
            h="50px"
            rounded="full"
            bg="linear-gradient(162deg, rgba(43,0,95,1) 0%, rgba(137,52,255,1) 100%, rgba(0,0,0,1) 100%)"
            animation="bounce 1s ease-in-out infinite"
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ContactSection;
