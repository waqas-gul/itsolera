import React from 'react'
import AboutUs from '../components/aboutComponenets/AboutUs'
import MissionSection from '../components/aboutComponenets/MissionSection'
import Vision from '../components/aboutComponenets/Vision'
import AnimatedStats from '../components/AnimatedStats'
import OurValue from '../components/aboutComponenets/OurValue'
import OurApproach from '../components/aboutComponenets/OurApproach'
import Achievements from "../components/Achievements";
import BlogCards from "../components/BlogCards";
import NewsletterSignup from "../components/NewsletterSignup";
import TrainingAndDevelopment from "../components/aboutComponenets/TrainingAndDevelopment"

const About = () => {
  return (
    <>
    <AboutUs/>
    <AnimatedStats/>
    <MissionSection/>
    <Vision/>
    <OurValue/>
    <OurApproach/>
    <Achievements/>
    <TrainingAndDevelopment/>
    <BlogCards/> 
    <NewsletterSignup/>
    </>
  )
}

export default About
