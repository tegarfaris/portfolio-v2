import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import HeroMain from "../../components/page-modules/home/hero";
import Navbar from "../../components/navbar";
import AboutSection from "../../components/page-modules/home/about-section";
import TechSection from "../../components/page-modules/home/tech-section";
import ProjectsSection from "../../components/page-modules/home/projects-section";
import WorkExperienceSection from "../../components/page-modules/home/work-experience";
import CertificationSection from "../../components/page-modules/home/certification-section";
import Footer from "../../components/footer";
import ContactSection from "../../components/page-modules/home/contact-section";

const MainPage: React.FC = () => {
  return (
    <Flex minH="100vh" bg="#0E051C" flexGrow={1} flexDir="column">
      <Navbar />
      <HeroMain />
      <Box className="custom-shape-divider-bottom-1708193625">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </Box>
      <AboutSection />
      <TechSection />
      <WorkExperienceSection />
      <ProjectsSection />
      <CertificationSection />
      <ContactSection />
      <Footer />
    </Flex>
  );
};

export default MainPage;
