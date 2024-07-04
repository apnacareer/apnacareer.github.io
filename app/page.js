import React from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import AreaOf from "@/components/Areaof";
import Contact from "@/components/Contact";
import Empowering from "@/components/Empowering";
import Testimonials from "@/components/Testimonials";
import Message from "@/components/Message";

const Home = () => {
  return(
    <div>
      <Hero />
      <About />
      <AreaOf />
      <Empowering />
      <Contact />
      <Message />
      <Testimonials />
    </div>
  );
}

export default Home;