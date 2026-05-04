import "./App.css";
import { FAQsSection } from "./sections/FAQsSection";
import { HeroSection } from "./sections/HeroSection";
import { LocationsSection } from "./sections/LocationsSection";
import { TimelineSection } from "./sections/TimelineSection";

function App() {
  return (
    <>
      <HeroSection />
      <TimelineSection />
      <LocationsSection />
      <FAQsSection />
    </>
  );
}

export default App;
