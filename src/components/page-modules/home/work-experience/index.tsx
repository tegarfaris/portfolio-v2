import React from "react";
import { Badge, Box, Flex, Image, Text } from "@chakra-ui/react";
import HeadingTittle from "../../../HeadingTittle";
import {
  PROJECTS_ASSETS,
  WORK_EXPERIENCE_ASSETS,
} from "../../../../helper/image.cld";

const WorkExperienceSection: React.FC = () => {
  const WORK_EXPERIENCE = [
    {
      id: 0,
      companyName: "PT Padepokan Tujuh Sembilan",
      companyIndustri: "IT Consultant",
      position: "Frontend Developer",
      type: "Part-Time",
      duration: "1 Years",
      imageUrl: WORK_EXPERIENCE_ASSETS.TUJUH_SEMBILAN,
      jobDesc: (
        <Flex flexDir="column" textAlign="left">
          <ul>
            <li>
              Contributing to the development of a multinational company's
              website like Unilever
            </li>
            <li>Slicing Design (Figma) to Code</li>
            <li>Integration CRUD with the backend using normalized axios</li>
            <li>Creating component global for reusable future</li>
            <li>Implement Code Splitting for better prefomance</li>
            <li>Apply Clean code and best practice company</li>
            <li>Implementing localization for Indonesian and English</li>
          </ul>
        </Flex>
      ),
      tech: ["React JS", "Material UI", "Scrum"],
    },
    {
      id: 1,
      companyName: "PT Docheck Bagi Indonesia",
      companyIndustri: "Start Up Product B2B/B2C",
      position: "Frontend Developer",
      type: "Contract",
      duration: "5 Month ( present )",
      imageUrl: WORK_EXPERIENCE_ASSETS.WOOL,
      jobDesc: (
        <Flex flexDir="column" textAlign="left">
          <ul>
            <li>
              Being part of the pioneer team in developing the WOOL product from
              the initial design stages.
            </li>
            <li>
              Implementing various UI/UX designs from figma to code (using Next
              JS, TypeScript, Chakra UI/Tailwind)
            </li>
            <li>
              Integration with Rest API and using Redux Toolkit for state
              management and optimize perfomance web
            </li>
            <li>
              Making the interface responsive and comfortable to use on tablets
              and mobile
            </li>
            <li>
              Familiar with work methods that use agile scrum and contribute to
              solving problems
            </li>
            <li>
              Always apply clean code and existing best practices to maintain
              web performance and code usability
            </li>
          </ul>
        </Flex>
      ),
      tech: ["Next JS", "Typescript", "Chakra UI", "Redux Toolkit", "Scrum"],
    },
  ];
  return (
    <Flex
      id="work-experience-section"
      justifyContent="center"
      flexDir="column"
      gap="50px"
      px={{ base: "50px", lg: "100px" }}
      minH="100vh"
      pt="90px"
    >
      <HeadingTittle title="Work Experience" />
      <Flex flexDir="column" gap="150px" pb="50px">
        {WORK_EXPERIENCE.map((work) => (
          <Flex
            key={work.id}
            flexDir={{
              base: "column",
              lg: Number(work.id) % 2 === 0 ? "row" : "row-reverse",
            }}
            gap="100px"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box
              pos="relative"
              w="full"
              rounded="full"
              animation="bounce 3s ease-in-out infinite"
              display={{ base: "none", md: "flex" }}
            >
              <Image
                src={work.imageUrl}
                zIndex={20}
                pos="relative"
                rounded="full"
              />
              <Image
                src={PROJECTS_ASSETS.BLOB_ASSETS}
                zIndex={10}
                pos="absolute"
                top={0}
                w={{ base: "xl", lg: "lg" }}
              />
            </Box>
            <Flex
              flexDir="column"
              flexWrap={{ base: "wrap", md: "nowrap" }}
              gap="10px"
              w="full"
              alignItems="center"
            >
              <Text color="white" fontSize="24px" fontWeight={600}>
                {work.companyName} &nbsp;
                <Text
                  as="span"
                  display={{ base: "none", md: "initial" }}
                  color="white"
                  border="1px solid white"
                  rounded="full"
                  px="20px"
                  py="2px"
                  w="fit-content"
                  fontSize="14px"
                >
                  {work.companyIndustri}
                </Text>
              </Text>
              {/* <Divider /> */}
              <Text color="white">
                {work.position} &gt; {work.type} &gt; {work.duration}
              </Text>

              <Flex
                flexWrap={{ base: "wrap", md: "nowrap" }}
                gap="10px"
                justifyContent="center"
                pt="10px"
              >
                {work.tech.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </Flex>
              <Text color="white" textAlign="left" pt="10px">
                {work.jobDesc}
              </Text>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default WorkExperienceSection;
