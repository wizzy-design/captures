//Import Icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
//Styles
import { Layout, Description, Image, Hide } from "../styles";
import styled from "styled-components";

const ServiceSection = () => {
  return (
    <Services>
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
