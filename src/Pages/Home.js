import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Info from "../Components/Info";
import About from "../Components/About";
import BookAppointment from "../Components/BookAppointment";
import Reviews from "../Components/Reviews";
import Doctors from "../Components/Doctors";
import Footer from "../Components/Footer";
import "../Styles/maps.css";
import YT from "../Components/YT";
import ContactForm from "../Components/Contact";

export function Home() {
  return (
    <div className="home-section">
      <Navbar />
      <Hero />
      <Info />
      <About />
      <BookAppointment />
      {/* <YT /> */}
      <Reviews />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3744.0367672017987!2d72.13794133697843!3d21.768223475196475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDQ2JzA1LjYiTiA3MsKwMDgnMjUuOCJF!5e0!3m2!1sen!2sin!4v1698686984325!5m2!1sen!2sin"
        className="maps"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <ContactForm />
      <Doctors />
      <Footer />
    </div>
  );
}
