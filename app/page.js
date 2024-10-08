import Events from "./events/page";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Guests from "./components/Guests";
import Sponsors from "./components/Sponsors";
import Wrapper from "./components/bg-wrapper/Wrapper";
import UnleashPotential from "./components/UnleashPotential";
import Section from "./components/Section";
import Background from "./components/Background";
import ArtIsNotAThing from "./components/ArtIsNotAThing";
import {allEvents} from './../utils/events/events'
// import NavBar from "./components/NavBar";
export default function Home() {
  return (
    <>
      <NavBar />
      {/* wrap each wrapper in div for better optimisation */}
      {/* <div className="w-[100vw] md:h-[1120px] h-[70vh] pb-10"> */}
      {/* <Wrapper grid={true} height={"60vh"}> */}
      {/* </Wrapper> */}

      <Background />
      <div className="h-auto w-screen z-20">
        <Section>
          <HeroSection />
        </Section>
        <Section>
          <Guests />
        </Section>
        <Section>
          <ArtIsNotAThing />
        </Section>
        {/* <Section>
          <Events />
        </Section> */}
        <Section>
          <UnleashPotential />
        </Section>
        <Section>
          <Sponsors />
        </Section>
        <Footer />
        
      </div>
    </>
  );
}
