import React from "react";
import home1 from "../img/home1.png";
// Framer Motion
import { motion } from "framer-motion";
import { Layout, Description, Image, Hide } from "../styles";
import { titleAnim, fade, photoAnim } from "../animation";

const AboutSection = () => {
  //Variants

  return (
    <Layout>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="Guy with a camera" />
      </Image>
    </Layout>
  );
};

export default AboutSection;
