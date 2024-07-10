import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import BoldCopy from "../components/animata/text/bold-copy";
import FlipCard from "../components/animata/cards/flip-card";

import Ecommerce from "../assets/ecom.jpg";
import Portfolio from "../assets/portfolio.png";
import Edu from "../assets/education.jpg";
import Music from "../assets/music-player.jpg";
import Weather from "../assets/weather.jpg";
import Animata from "../assets/animata.png";

const gridContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      title: "Animata",
      name: "Animata",
      description:
        "Hand-crafted ✍️ interaction animation on the internet, providing visually appealing and interactive user experiences.",
      image: Animata,
      link: "https://github.com/AashishKatila",
    },
    {
      title: "E-Commerce",
      name: "E-Commerce",
      description:
        "Shop whatever you need from this comprehensive e-commerce website, featuring a wide range of products and seamless user interface.",
      image: Ecommerce,
      link: "https://github.com/AashishKatila",
    },
    {
      title: "Music Player",
      name: "Music Player",
      description:
        "Tired of listening to the same music all the time? This music player will help you discover new music.",
      image: Music,
      link: "https://github.com/AashishKatila",
    },
    {
      title: "Educational App",
      name: "Educational App",
      description:
        "Learn anything you want from this educational app, offering a variety of courses and interactive learning materials.",
      image: Edu,
      link: "https://github.com/AashishKatila",
    },
    {
      title: "Portfolio ",
      name: "Portfolio ",
      description:
        "Showcase your skills and projects with this modern and responsive portfolio website.",
      image: Portfolio,
      link: "https://www.aashishkatila.com.np",
    },
    {
      title: "Weather App",
      name: "Weather App",
      description:
        "Get real-time weather updates and forecasts with this user-friendly weather application.",
      image: Weather,
      link: "https://github.com/AashishKatila",
    },
  ];

  return (
    <div
      className="flex flex-col min-h-screen items-center justify-center"
      id="projects"
    >
      <BoldCopy text="Projects" className="z-20 md:mb-10" />
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 md:max-w-[1000px]"
        variants={gridContainerVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        ref={ref}
      >
        {projects.map((project) => (
          <FlipCard
            description={project.description}
            image={project.image}
            rotate="y"
            title={project.title}
            link={project.link}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
