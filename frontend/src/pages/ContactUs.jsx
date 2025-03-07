import React from "react";
import HelpSection from "../components/contactComponent/HelpSection";
import ContactSection from "../components/ContactSection";
import MapSection from "../components/contactComponent/MapSection";
import NewsletterSignup from "../components/NewsletterSignup";

const ContactUs = () => {
  return (
    <>
      <HelpSection />
      <ContactSection />
      <MapSection />
      <NewsletterSignup />
    </>
  );
};

export default ContactUs;
