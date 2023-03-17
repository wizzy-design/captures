//Global Style
import GlobalStyle from "../src/components/GlobalStyle";
// Pages
import AboutUs from "../src/pages/AboutUs";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
//Navigation
import Nav from "../src/components/Nav";
import MovieDetail from "./pages/MovieDetail";
//Router
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" exact element={<AboutUs />} />
        <Route path="/work" exact element={<OurWork />} />
        <Route path="/work/:id" exact element={<MovieDetail/>} />
        <Route path="/contact" exact element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
