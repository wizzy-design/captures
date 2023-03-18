// Page component
import AboutSection from "../components/AboutSection";
import ServiceSection from "../components/ServiceSection";
import FaqSection from "../components/FaqSection";
// Import Framer Motion
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const AboutUs = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      //       Yes, it is a concept called propagation :)
      // Link: https://www.framer.com/api/motion/animation/
      // Definition:
      // Propagation
      // If a motion component has children, changes in variant will flow down through the component hierarchy. These changes in variant will flow down until a child component defines its own animate property.
    >
      <AboutSection />
      <ServiceSection />
      <FaqSection />
    </motion.div>
  );
};

export default AboutUs;
