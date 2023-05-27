//Styled
import styled from "styled-components";
import { motion } from "framer-motion";

// Styled Components
export const Layout = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 3.5rem;
  color: white;
  @media (max-width: 795px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`;

export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index: 2;
  h2 {
    font-weight: lighter;
  }
  @media (max-width: 795px) {
    padding: 0;

    .titleDiv {
      padding-top: 2rem;
    }
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`;

export const Image = styled.div`
  z-index: 2;
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: contain;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
