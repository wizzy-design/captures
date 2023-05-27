import React from "react";
import home1 from "../img/home1.png";
// Framer Motion
import { motion } from "framer-motion";
import { Layout, Description, Image, Hide } from "../styles";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";
import styled from "styled-components";

const AboutSection = () => {
  //Variants

  return (
    <Layout>
      <Description>
        <motion.div className="titleDiv">
          <Hide>
            <Title variants={titleAnim}>We work to make</Title>
          </Hide>
          <Hide>
            <Title variants={titleAnim}>
              your <span>dreams</span> come
            </Title>
          </Hide>
          <Hide>
            <Title variants={titleAnim}>true.</Title>
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
      <Wave />
    </Layout>
  );
};

const Title = styled(motion.h2)`
  font-size: 3rem;
`

export default AboutSection;
