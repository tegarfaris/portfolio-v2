import React from "react";
import { Badge, Button, Flex, Image, Text, Tooltip } from "@chakra-ui/react";
import HeadingTittle from "../../../HeadingTittle";
import { PROJECTS_ASSETS } from "../../../../helper/image.cld";
import { IoOpenOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

const ProjectsSection: React.FC = () => {
  const PROJECTS = [
    {
      id: 0,
      title: "Landing Page for WO",
      image: PROJECTS_ASSETS.WO,
      liveSite: "",
      github: "https://github.com/tegarfaris/landing-page",
      description:
        "The Landing Page Project for this Wedding Organizer is my first paid project, utilizing only HTML, CSS, Javascript, and Bootstrap. It was created to provide information about the upcoming event. This website also serves as a presentation platform for the client of this wedding organizer.",
      tech: ["HTML", "CSS", "Javascript"],
    },
    {
      id: 1,
      title: "Survey Web",
      image: PROJECTS_ASSETS.NOT_FOUND,
      liveSite: "",
      github: "https://github.com/tegarfaris/TCI-fe",
      description:
        "This project actually serves as my learning journey in using Vue.js technology. Within this project, I implemented the usage of local storage for the first time to store the required data persistently.",
      tech: ["Vue 3", "Tailwind CSS"],
    },
    {
      id: 2,
      title: "Tokopedia Clone (Product List)",
      image: PROJECTS_ASSETS.NOT_FOUND,
      liveSite: "",
      github: "https://github.com/tegarfaris/talentpoolarutala-frontend",
      description:
        "This project was created to challenge myself to see if I could replicate the UI of Tokopedia as closely as possible. Throughout its development, I encountered numerous learning opportunities, particularly in the aspects of layouting and responsive web design.",
      tech: ["React JS", "Tailwind CSS"],
    },
    {
      id: 3,
      title: "Contact List",
      image: PROJECTS_ASSETS.PHONE_BOOK,
      liveSite: "",
      github: "https://github.com/tegarfaris/phone-book-project",
      description:
        "This project marks my first attempt as part of a technical test for a company. Here, I also delved into learning about integrations using GraphQL Apollo Client.",
      tech: ["React JS", "Typescript", "Chakra UI", "GraphQL", "Apollo Client"],
    },
    {
      id: 4,
      title: "Web News",
      image: PROJECTS_ASSETS.NEWS_APP,
      liveSite: "",
      github: "https://github.com/tegarfaris/fe-enigma-news-apps",
      description:
        "This project is a website aimed at implementing a public API. I utilized the News API as the primary public API source for this website.",
      tech: ["Vite", "React JS", "Typescript", "Antd Design"],
    },
    {
      id: 5,
      title: "ToDo List",
      image: PROJECTS_ASSETS.TODOS,
      liveSite: "https://to-do-apps-mu.vercel.app/",
      github: "https://github.com/tegarfaris/toDo-apps",
      description:
        "This project is similar to typical ToDo apps and serves as a learning tool for implementing Redux Toolkit.",
      tech: ["React JS", "Typescript", "Chakra UI", "Redux Toolkit"],
    },
    {
      id: 6,
      title: "Food Apps",
      image: PROJECTS_ASSETS.FOOD_APPS,
      liveSite: "",
      github: "https://github.com/tegarfaris/food-apps",
      description:
        "In this project, only the UI is present and it's not integrated with a backend. The challenge lies in creating a responsive and visually appealing UI.",
      tech: ["Vite", "React JS", "Tailwind CSS"],
    },
    {
      id: 7,
      title: "CV Generator",
      image: PROJECTS_ASSETS.CV_GENERATOR,
      liveSite:
        "https://portfolio-generator-tegarfarisns-projects.vercel.app/portfolio",
      github: "https://github.com/tegarfaris/portfolio-generator",
      description:
        "My latest project is a CV Generator, where users can create their CV according to their preferences and see the changes in real-time. In this project, I learned about React Hook Form.",
      tech: ["Next JS", "Typescript", "Chakra UI"],
    },
  ];
  return (
    <Flex
      id="projects-section"
      pos="relative"
      justifyContent="center"
      flexDir="column"
      gap="100px"
      minH="100vh"
      pt="100px"
    >
      <HeadingTittle title="Personal Projects" />
      <Flex pb="50px">
        <Swiper
          centeredSlides
          slidesPerView="auto"
          effect="coverflow"
          loop
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Pagination]}
          pagination={{ clickable: true }}
        >
          <Flex className="swiper-wrapper" w="800px" justifyContent="center">
            {PROJECTS.map((project) => (
              <SwiperSlide key={project.id}>
                <Flex
                  flexDir="column"
                  alignItems="center"
                  p="20px"
                  borderRadius="10px"
                  color="black"
                  bg="white"
                  w="full"
                  h="full"
                >
                  <Image src={project.image} w="500px" />

                  <Flex flexDir="column" gap="10px" w="full">
                    <Text fontWeight={600} fontSize="30px">
                      {project.title}
                    </Text>
                    <Flex flexWrap="wrap" gap="10px">
                      {project.tech.map((item) => (
                        <Badge
                          key={item}
                          bg="#8934FF"
                          color="white"
                          borderRadius="20px"
                          px="20px"
                        >
                          {item}
                        </Badge>
                      ))}
                    </Flex>
                    <Text>{project.description}</Text>

                    <Flex
                      flexDir={{ base: "column", md: "row" }}
                      gap="5px"
                      pt="10px"
                    >
                      <Tooltip
                        display={project.liveSite === "" ? "flex" : "none"}
                        label="Live not Ready"
                      >
                        <Button
                          as="a"
                          variant="outline"
                          color="blue"
                          border="1px solid blue"
                          leftIcon={<IoOpenOutline />}
                          isDisabled={project.liveSite === ""}
                          disabled
                          target={project.liveSite !== "" ? "_blank" : "_self"}
                          href={
                            project.liveSite !== ""
                              ? project.liveSite
                              : "#projects-section"
                          }
                        >
                          Live Site
                        </Button>
                      </Tooltip>
                      <Button
                        as="a"
                        bg="linear-gradient(162deg, rgba(43,0,95,1) 0%, rgba(137,52,255,1) 100%, rgba(0,0,0,1) 100%)"
                        leftIcon={<FaGithub />}
                        color="white"
                        target="_blank"
                        href={project.github}
                      >
                        Github
                      </Button>
                    </Flex>
                  </Flex>
                </Flex>
              </SwiperSlide>
            ))}
          </Flex>
        </Swiper>
      </Flex>
    </Flex>
  );
};

export default ProjectsSection;
