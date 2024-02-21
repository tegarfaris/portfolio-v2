import {
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React from "react";
import HeadingTittle from "../../../HeadingTittle";
import { FiEye } from "react-icons/fi";
import { CERTIFICATE } from "../../../../helper/image.cld";

const CertificationSection: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState("");

  const handleOpenModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedImage("");
  };
  const EDUCATION_CERTIFICATION = [
    {
      id: 1,
      name: "Belajar Dasar Pemrograman Web",
      publisher: "Dicoding Indonesia",
      expiredDate: "11 Mei 2026",
      description:
        "Certificate of completion of learning on the Dicoding Indonesia platform.",
      imageUrl: CERTIFICATE.DASAR_PEMROGRAMAN,
      alt: "dicoding-certification",
    },
    {
      id: 2,
      name: "Belajar Membuat Aplikasi Web dengan React",
      publisher: "Dicoding Indonesia",
      expiredDate: "21 Juli 2026",
      description:
        "Certificate of completion of learning on the Dicoding Indonesia platform.",
      imageUrl: CERTIFICATE.REACT,
      alt: "dicoding-certification",
    },
    {
      id: 3,
      name: "Belajar Fundamental Aplikasi Web dengan React",
      publisher: "Dicoding Indonesia",
      expiredDate: "02 Oktober 2026",
      description:
        "Certificate of completion of learning on the Dicoding Indonesia platform.",
      imageUrl: CERTIFICATE.FUNDAMENTAL_REACT,
      alt: "dicoding-certification",
    },
    {
      id: 4,
      name: "TOEIC",
      publisher: "Politeknik Negeri Bandung",
      expiredDate: "02 April 2025",
      description:
        "English language certification organized and issued by POLBAN in collaboration with PT. International Test Center.",
      imageUrl: CERTIFICATE.TOEIC,
      alt: "toeic-certification",
    },
  ];

  const ORGANIZATIONS = [
    {
      id: 0,
      name: "Wakil Ketua PAMAGAR",
      publisher: "PAMAGAR",
      imageUrl: CERTIFICATE.PAMAGAR,
      alt: "pamagar-certification",
    },
    {
      id: 1,
      name: "Staff Muda PSDA HIMAKOM",
      publisher: "HIMPUNAN MAHASISWA KOMPUTER",
      imageUrl: CERTIFICATE.STAF_MUDA,
      alt: "staf-muda-certificate",
    },
    {
      id: 2,
      name: "Staff Ahli PSDA HIMAKOM",
      publisher: "HIMPUNAN MAHASISWA KOMPUTER",
      imageUrl: CERTIFICATE.STAF_AHLI,
      alt: "staf-muda-certificate",
    },
  ];
  return (
    <Flex
      id="certificate-section"
      flexDir="column"
      gap="50px"
      minH="100vh"
      justifyContent="center"
      borderRadius="20px"
      pt="50px"
      maxW="1024px"
      mx="auto"
    >
      <HeadingTittle title="Certification" />
      <Flex flexDir="column" gap="20px" px={{ base: "20px", lg: "0" }}>
        <Text color="white" fontSize="20px" fontWeight={600}>
          Education Certificate
        </Text>

        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap="50px"
        >
          {EDUCATION_CERTIFICATION.map((certification) => (
            <GridItem key={certification.id}>
              <Flex
                w="full"
                flexDir="column"
                gap="10px"
                color="white"
                border="1px solid"
                borderRadius="10px"
                borderColor="#8934FF"
                h="full"
                p="20px"
                _hover={{ transform: "scale(1.1)" }}
                transition="transform 0.6s ease-in-out"
              >
                <Image
                  h="200px"
                  objectFit="contain"
                  src={certification.imageUrl}
                  alt={certification.alt}
                  borderRadius="5px"
                />

                <Flex flexDir="column" gap="10px">
                  <Text fontSize="24px" fontWeight={600} h="120px">
                    {certification.name}
                  </Text>
                  <Text>{certification.description}</Text>
                  <Text>{certification.expiredDate}</Text>
                  <Flex pt="20px">
                    <Button
                      variant="outline"
                      borderColor="#8934FF"
                      color="#8934FF"
                      onClick={() =>
                        handleOpenModal(certification.imageUrl || "")
                      }
                    >
                      <FiEye />
                    </Button>
                  </Flex>
                </Flex>
              </Flex>
            </GridItem>
          ))}
        </Grid>
      </Flex>
      <Modal isOpen={isOpen} size="xl" onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody p={10}>
            <Flex justifyContent="center" alignItems="center">
              {selectedImage && (
                <Image src={selectedImage} alt="Certification" />
              )}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Flex flexDir="column" gap="20px" px={{ base: "20px", lg: "0" }}>
        <Text color="white" fontSize="20px" fontWeight={600} placeSelf="end">
          Organization Certificate
        </Text>

        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap="50px"
        >
          {ORGANIZATIONS.map((organization) => (
            <GridItem key={organization.id}>
              <Flex
                w="full"
                flexDir="column"
                gap="10px"
                color="white"
                border="1px solid"
                borderRadius="10px"
                borderColor="#8934FF"
                h="full"
                p="20px"
                _hover={{ transform: "scale(1.1)" }}
                transition="transform 0.6s ease-in-out"
              >
                <Image
                  h="200px"
                  objectFit="contain"
                  src={organization.imageUrl}
                  alt={organization.alt}
                  borderRadius="5px"
                />

                <Flex flexDir="column" gap="10px">
                  <Text fontSize="24px" fontWeight={600} h="80px">
                    {organization.name}
                  </Text>

                  <Flex pt="20px">
                    <Button
                      variant="outline"
                      borderColor="#8934FF"
                      color="#8934FF"
                      onClick={() =>
                        handleOpenModal(organization.imageUrl || "")
                      }
                    >
                      <FiEye />
                    </Button>
                  </Flex>
                </Flex>
              </Flex>
            </GridItem>
          ))}
        </Grid>
      </Flex>
    </Flex>
  );
};

export default CertificationSection;
