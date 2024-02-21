import React from "react";
import { Box, Flex } from "@chakra-ui/react";

interface AutoplayCarouselProps {
  children: React.ReactNode;
  height?: string;
  width?: string;
  slideWidth?: string;
  direction?: "left" | "right";
}

const AutoplayCarousel: React.FC<AutoplayCarouselProps> = ({
  children,
  height,
  width,
  slideWidth,
  direction = "left",
}) => {
  const childCount = React.useMemo(
    () => React.Children.count(children),
    [children]
  );

  return (
    <Box
      w={width ?? "full"}
      h={height ?? "250px"}
      m="auto"
      pos="relative"
      display="grid"
      placeItems="center"
      overflow="hidden"
    >
      <Flex
        w={`calc(${slideWidth ?? "250px"} * ${childCount * 2})`}
        animation={`scroll-animate-${direction} 15s linear infinite`}
        _hover={{
          animationPlayState: "paused",
        }}
        sx={{
          [`@keyframes scroll-animate-${direction}`]: {
            "0%": {
              transform:
                direction === "left"
                  ? "translateX(0)"
                  : `translateX(calc(-${slideWidth} * ${childCount}))`,
            },
            "100%": {
              transform:
                direction === "left"
                  ? `translateX(calc(-${slideWidth} * ${childCount}))`
                  : "translateX(0)",
            },
          },
        }}
      >
        {/* double it to prevent empty space */}
        {children}
        {children}
      </Flex>
    </Box>
  );
};

export default AutoplayCarousel;
