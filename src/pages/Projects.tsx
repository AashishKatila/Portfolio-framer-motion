import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import BoldCopy from "../components/animata/text/bold-copy";
import Pokemon from "../assets/pokemon.png";
import Ecommerce from "../assets/ecommerce.png";
import Typing from "../assets/typingtest.png";
import Movie from "../assets/movieList.png";
import Weather from "../assets/weather.jpg";
import Note from "../assets/note.png";
import Card from "../components/animata/cards/Card";

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
      id: 1,
      title: "Animata",
      name: "Animata",
      description:
        "Free & open-source collection of animations, effects, & interactions",
      image: Note,
      link: "https://animata.design/",
    },
    {
      id: 2,
      title: "Sisu",
      name: "Sisu",
      description: "An educational companion for young learners",
      image: Pokemon,
      link: "https://play.google.com/store/apps/details?id=com.codse.sisu&hl=en",
    },
    {
      id: 3,
      title: "Kanti Girls Hostel",
      name: "Kanti Girls Hostel",
      description: "Kanti Girls Hostel - best girls hostel in Pokhara",
      image: Typing,
      link: "https://kanti-girls-hostel.vercel.app/",
    },
    {
      id: 4,
      title: "Movie List",
      name: "Movie List",
      description: "Add your favourite movies to holdlist & watched list.",
      image: Movie,
      link: "https://movie-list-pi-five.vercel.app/",
    },
    {
      id: 5,
      title: "E-commerce",
      name: "E-commerce",
      description: "Simple e-commerce application",
      image: Ecommerce,
      link: "https://ecommerce-geektech.netlify.app/",
    },
    {
      id: 6,
      title: "Note App",
      name: "Note App",
      description: "Note with add, search and delete functionality.",
      image: Note,
      link: "https://react-note-save.netlify.app/",
    },
  ];

  return (
    <div
      className="flex flex-col min-h-screen items-center justify-center"
      id="projects"
    >
      <BoldCopy text="Projects" className="z-20 md:mb-10" />
      <motion.div
        className="grid z-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 gap-4 md:max-w-[1000px]"
        variants={gridContainerVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        ref={ref}
      >
        {projects.map((project) => (
          <Card
            id={project.id}
            title={project.title}
            image={project.image}
            description={project.description}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
