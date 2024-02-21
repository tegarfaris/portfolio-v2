import React from "react";
import { Flex, Image } from "@chakra-ui/react";

import HeadingTittle from "../../../HeadingTittle";
import AutoplayCarousel from "../../../autoplay-carousel";
import SlideAutoPlay from "../../../autoplay-carousel/Slide";

const TechSection: React.FC = () => {
  const carouselItems = [
    {
      id: 1,
      image: "/react.png",
    },
    {
      id: 2,
      image: "/next.png",
    },
    {
      id: 3,
      image: "/chakra.png",
    },
    {
      id: 4,
      image: "/typescript.png",
    },
    {
      id: 5,
      image: "/redux.png",
    },

    {
      id: 6,
      image: "/tailwind.png",
    },
  ];

  return (
    <Flex
      id="tech-section"
      flexDir="column"
      alignItems="center"
      align="center"
      minH="70vh"
      pb="50px"
      pt="90px"
      gap="40px"
    >
      <HeadingTittle title="Tech Stack" />
      <Flex
        w="full"
        bg="white"
        alignItems="center"
        justifyContent="center"
        py={5}
      >
        <AutoplayCarousel
          height="fit-content"
          width="100%"
          slideWidth="300px"
          direction="right"
        >
          {carouselItems.map((item) => (
            <SlideAutoPlay width="full">
              <Flex justifyContent="center" alignItems="center">
                <Image
                  src={item.image}
                  objectFit="contain"
                  w="200px"
                  borderRadius="lg"
                />
              </Flex>
            </SlideAutoPlay>
          ))}
        </AutoplayCarousel>
      </Flex>
    </Flex>
  );
};

export default TechSection;
