//Import Icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
//Styles
import { Layout, Description, Image } from "../styles";
import styled from "styled-components";
import { useScroll } from "../components/useScroll";
import { scrollReveal } from "../animation";

const ServiceSection = () => {
  const [element, controls] = useScroll(); // Elements and Controls are the 2 things we returned from our created useScroll hook
  return (
    <Services
      ref={element}
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
    >
      <Description>
        <h2>
          High <span>quality</span> services
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="Clock icon" />
              <h3>Effecient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt=" icon" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphragm} alt=" icon" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt=" icon" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt="Home" />
      </Image>
    </Services>
  );
};

const Services = styled(Layout)`
  //Copies all style properties in Layout
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 1.5rem 0rem 3rem 0rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 795px) {
    justify-content: center;
  }
`;

const Card = styled.div`
  flex-basis: 15rem;
  .icon {
    display: flex;
    align-items: center;
    img {
      max-width: 40px;
    }
    h3 {
      margin-left: 1rem;
      background: white;
      border-radius: 5px;
      color: black;
      padding: 0.5rem 1rem;
    }
  }
  p {
    font-size: 1.25rem;
  }
`;

export default ServiceSection;
