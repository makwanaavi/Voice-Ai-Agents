import React from "react";
import { ThemeProvider } from "./components/ThemeContext"; // Import ThemeProvider
import HeroSection from "./components/HeroSection"; // Your HeroSection component
import FeatureCards from "./components/FeatureCards"; // Your FeatureCards component
import LiveDemo from "./components/LiveDemo"; // Your LiveDemo component
import UseCases from "./components/UseCases"; // Your UseCases component
import Integrations from "./components/Integrations"; // Your Integrations component
import Security from "./components/Security"; // Your Security component
import DevHub from "./components/DevHub"; // Your DevHub component
import Testimonials from "./components/Testimonials"; // Your Testimonials component
import MobileSDK from "./components/MobileSDK"; // Your MobileSDK component
import FinalCTA from "./components/FinalCTA"; // Your FinalCTA component
import ThemeToggleButton from "./components/ThemeToggleButton"; // Import ThemeToggleButton
import useLenis from './components/useLenis'; 
import MouseCircle from './components/MouseCircle';

const App = () => {
  useLenis();
  return (
    <ThemeProvider>
      <MouseCircle/>
      <ThemeToggleButton />
      <HeroSection />
      <FeatureCards />
      <LiveDemo/>
      <UseCases/>
      <Integrations/>
      <Security/>
      <DevHub/>
      <Testimonials/>
      <MobileSDK/>
      <FinalCTA/>
    </ThemeProvider>
  );
};

export default App;
