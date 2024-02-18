import {
  Flex,
  Text,
  IconButton,
  useDisclosure,
  Box,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import { MdClose } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";

const Navbar: React.FC = () => {
  const [isTop, setIsTop] = React.useState(true);
  const { isOpen, onToggle } = useDisclosure();
  const [isMobile] = useMediaQuery("(max-width: 768px)"); // Menggunakan hook useMediaQuery untuk mengecek apakah ukuran layar merupakan ukuran mobile

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      // Jika posisi scroll berada di paling atas
      if (scrollTop === 0) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }
    };

    // Menambahkan event listener untuk mengikuti perubahan posisi scroll
    window.addEventListener("scroll", handleScroll);

    // Membersihkan event listener setelah komponen tidak lagi digunakan
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const dataTopBar = [
    {
      id: 1,
      title: "About",
      link: "#about-section",
    },
    {
      id: 2,
      title: "Tech Stack",
      link: "#tech-section",
    },
    {
      id: 3,
      title: "Work Experience",
      link: "#work-experience-section",
    },
    {
      id: 4,
      title: "Personal Projects",
      link: "#projects-section",
    },
    {
      id: 5,
      title: "Certification",
      link: "#certificate-section",
    },
    {
      id: 6,
      title: "Contact",
      link: "#contact-section",
    },
  ];

  const closeOverlay = () => {
    if (isMobile) {
      onToggle();
    }
  };

  const handleMenuClick = (link: string) => {
    const target = document.querySelector(link);

    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Flex
      pos="fixed"
      w="full"
      mx="auto"
      gap="10px"
      zIndex="9999"
      bg={isTop ? "transparent" : "#8934FF"}
      boxShadow={isTop ? "none" : "0px 2px 4px rgba(0, 0, 0, 0.1)"}
      transition="background-color 0.3s ease"
      justifyContent="center"
      p={isTop ? "40px" : "20px"}
    >
      <Flex
        gap="20px"
        mr="20px"
        color="white"
        fontWeight={600}
        display={{ base: "none", md: "flex" }}
        style={{ scrollBehavior: "smooth" }}
      >
        {dataTopBar.map((data) => (
          <Text
            color="white"
            as="a"
            key={data.id}
            cursor="pointer"
            onClick={() => handleMenuClick(data.link)}
          >
            {data.title}
          </Text>
        ))}
      </Flex>

      {/* Hamburger Menu */}
      <Flex
        w="full"
        display={{ base: "flex", md: "none" }}
        justifyContent="end"
        align="end"
      >
        <IconButton
          aria-label="Toggle Menu"
          icon={isOpen ? <MdClose /> : <TiThMenu />}
          onClick={onToggle}
          variant="unstyled"
          color="white"
          zIndex={9999}
        />
      </Flex>

      {/* Overlay */}
      {isOpen && (
        <Box
          pos="fixed"
          top="0"
          left="0"
          w="100%"
          h="100%"
          bg="rgba(0, 0, 0, 0.8)"
          zIndex="9998"
          display={isMobile ? "flex" : "none"} // Menampilkan overlay hanya pada perangkat mobile
          onClick={closeOverlay} // Menutup overlay ketika di-klik
        >
          <Flex
            w="full"
            direction="column"
            justifyContent="center"
            align="center"
            h="100%"
          >
            {dataTopBar.map((data) => (
              <Text
                as="a"
                key={data.id}
                color="white"
                fontSize="xl"
                mb="4"
                cursor="pointer"
                onClick={() => handleMenuClick(data.link)}
                borderBottom="1px solid white"
              >
                {data.title}
              </Text>
            ))}
          </Flex>
        </Box>
      )}
    </Flex>
  );
};

export default Navbar;
