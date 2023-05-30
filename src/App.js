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
import { Routes, Route, useLocation } from "react-router-dom";
//Animation
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <AnimatePresence mode="wait">
        <GlobalStyle />
        <Nav />
        <Routes location={location} key={location.pathname}>
          <Route path="/captures" element={<AboutUs />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/work" exact element={<OurWork />} />
          <Route path="/work/:id" exact element={<MovieDetail />} />
          <Route path="/contact" exact element={<ContactUs />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
