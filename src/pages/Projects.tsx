import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import BoldCopy from "../components/animata/text/bold-copy";
import FlipCard from "../components/animata/cards/flip-card";
import Pokemon from "../assets/pokemon.png";
import Ecommerce from "../assets/ecommerce.png";
import Typing from "../assets/typingtest.png";
import Movie from "../assets/movieList.png";
import Weather from "../assets/weather.jpg";
import Note from "../assets/note.png";

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
  const isInView = useInView(ref);

  const projects = [
    {
      title: "Note App",
      name: "Note App",
      description:
        "Note with add,search and delete functionality. Toggle mode also available",
      image: Note,
      link: "https://react-note-save.netlify.app/",
    },
    {
      title: "Pokemon List",
      name: "Pokemon List",
      description: "Lists pokemon from an API.",
      image: Pokemon,
      link: "https://pokemon-evolution-list.netlify.app/",
    },
    {
      title: "Movie List",
      name: "Movie List",
      description:
        "Add your favourite movies to holdlist and watched list. Uses context.",
      image: Movie,
      link: "https://movie-list-pi-five.vercel.app/",
    },
    {
      title: "Typing Speed Test",
      name: "Typing Speed Test",
      description: "Increase your typing speed with this app.",
      image: Typing,
      link: "https://frabjous-kataifi-8aa65e.netlify.app/",
    },
    {
      title: "Weather App",
      name: "Weather App",
      description:
        "Get real-time weather updates and forecasts with this user-friendly weather application.",
      image: Weather,
      link: "https://profound-pegasus-044f51.netlify.app/",
    },
    {
      title: "E-commerce",
      name: "E-commerce",
      description:
        "Very basic e-commerce application. Add to cart, increase/decrease item quantity and order item.",
      image: Ecommerce,
      link: "https://bespoke-hotteok-7914f8.netlify.app/",
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
            key={`key-${project.title}`}
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
