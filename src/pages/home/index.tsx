import React from "react"
import HeroSection from "./HeroSection"
import AboutSection from "./AboutSection"
import SustainabilitySection from "./SustainabilitySection "

function Home() {
  return (
    <React.Fragment>
      <HeroSection />
      <AboutSection />
      <SustainabilitySection />
    </React.Fragment>
  )
}

export default Home
