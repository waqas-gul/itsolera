import React from "react";
import NewsEventsSection from "../components/EventComponent/NewsEventsSection";
import EventComponent from "../components/EventComponent/EventComponent";
import BlogSection from "../components/EventComponent/BlogSection";
import ContactSection from "../components/ContactSection";

const NewsAndEvents = () => {
  return (
    <div>
      <NewsEventsSection />
      <EventComponent />
      <BlogSection />
      <ContactSection />
    </div>
  );
};

export default NewsAndEvents;
