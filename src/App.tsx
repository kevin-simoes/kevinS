
import Orb from "./animations/Orb";

import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import AboutMe from "./components/sections/AboutMe";
import Contact from "./components/sections/Contact";
import Introduction from "./components/sections/Introduction";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";


function App() {
  return (
    <>
      <Orb />
      <main className="relative z-10 flex flex-col gap-10 items-center w-full pt-50 pb-20 sm:pt-70 px-2">
      <Header></Header>
        <Introduction />
        <AboutMe></AboutMe>
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
