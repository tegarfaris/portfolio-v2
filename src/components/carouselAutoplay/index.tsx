import { Box, Flex, ChakraProps } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CarouselProps extends ChakraProps {
  children: React.ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ children, ...rest }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length);
    }, 3000); // Change the interval as needed

    return () => clearInterval(interval);
  }, [currentIndex, children]);

  return (
    <Flex overflow="hidden" position="relative" {...rest}>
      <AnimatePresence initial={false} custom={currentIndex}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          //   position="absolute"
          //   width="100%"
          //   as={Box}
        >
          {children[currentIndex]}
        </motion.div>
      </AnimatePresence>

      <Box width="100%" display="flex">
        {children.map((child, index) => (
          <Box
            key={index}
            flex="1"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {child}
          </Box>
        ))}
      </Box>
    </Flex>
  );
};

export default Carousel;
