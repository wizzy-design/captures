// Import this whenever you want to make a Global style
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
    @media (max-width: 1023px){
        font-size: 80%;
    }
}

body{
    background: #1b1b1b;
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
}

button{
    font-weight: bold;
    font-size: 1rem; /* 1.1rem */
    cursor: pointer;
    padding: .7rem 1rem; /* 1rem 2rem */
    border: 3px solid #23d997;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    font-family: 'Inter', sans-serif;
    &:hover{
        background-color: #23d997;
        color: white;
    }
}

h2{
    font-weight: lighter;
    font-size: 2rem; /* 4rem */
}

h3{
    color: white;
}

h4{
    font-weight: bold;
    font-size: 1.5rem;
}

span{
    font-weight: bold;
    color: #23d997;
}

a{
    font-size: 1.1rem;
}

p{
    padding: 2rem 0rem; /* 3rem 0rem */
    color: #ccc;
    font-size: 1.4rem; /* 1.4rem */
    line-height: 150%;
}


`;

export default GlobalStyle;
