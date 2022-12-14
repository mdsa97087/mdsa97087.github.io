import "./App.css";
import AllRoutes from "./Navbar/AllRoutes";
import Navbar from "./Navbar/Navbar";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Pages/Footer/Footer";
import Home from "./Pages/Home/Home";
import Project from "./Pages/Project/Project";
import Resume from "./Pages/Resume/Resume";
import Shamshad from "./Pages/Shamshad";
import Skills from "./Pages/Skills/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      {/* <Shamshad /> */}
      <Home />
      <About />
      <Project />
      <Resume />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
