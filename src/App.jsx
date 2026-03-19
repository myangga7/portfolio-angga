// src/App.jsx
import Navbar from "./components/layouts/Navbar";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Footer from "./components/layouts/Footer";
import GradientBackground from "./components/ui/GradientBackground";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <GradientBackground>
        <Navbar />
        <main>
          <Hero />
          <Projects />
          <About />
          <Contact />
        </main>
        <Footer />
      </GradientBackground>
    </ThemeProvider>
  );
}

export default App;
