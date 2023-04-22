//Styled
import styled from "styled-components";

// Styled Components
export const Layout = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 3.5rem;
  color: white;
`;

export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index: 2;
  h2 {
    font-weight: lighter;
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
