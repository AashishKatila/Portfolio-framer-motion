import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import BoldCopy from "../components/animata/text/bold-copy";
import Card from "../components/animata/cards/Card";
import Animata from "../assets/animata.png";
import Sisu from "../assets/sisu.jpg";
import Ecommerce from "../assets/ecom.png";
import Note from "../assets/note.png";
import KGH from "../assets/KGH.png";
import MovieList from "../assets/movieList.png";

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
      small_desc:
        "Free & open-source collection of animations, effects, & interactions",
      description:
        "Animata is a free and open-source collection of hand-crafted animations, effects, and interactions that you can seamlessly integrate into your project with a simple copy and paste.",
      image: Animata,
      link: "https://animata.design/",
    },
    {
      id: 2,
      title: "Sisu",
      name: "Sisu",
      small_desc: "An educational companion for young learners",
      description:
        "Sisu is an immersive app designed to make learning alphabets, numbers, colors, and basic concepts an exciting adventure.",
      image: Sisu,
      link: "https://play.google.com/store/apps/details?id=com.codse.sisu&hl=en",
    },
    {
      id: 3,
      title: "Kanti Girls Hostel",
      name: "Kanti Girls Hostel",
      small_desc: "Kanti Girls Hostel - best girls hostel in Pokhara",
      description:
        "Girls hostel that offers a secure and cozy environment designed for female students and professionals",
      image: KGH,
      link: "https://kanti-girls-hostel.vercel.app/",
    },
    {
      id: 4,
      title: "Movie List",
      name: "Movie List",
      small_desc: "Add your favourite movies to holdlist & watched list.",
      description:
        "Save your movies in holdlist and watched list. Uses Context API as global state management.",
      image: MovieList,
      link: "https://movie-list-pi-five.vercel.app/",
    },
    {
      id: 5,
      title: "E-commerce",
      name: "E-commerce",
      small_desc: "E-commerce with add/remove items & search",
      description:
        "Add items to your cart, remove them, checkout items, search items. Uses Context API as global state management.",
      image: Ecommerce,
      link: "https://ecommerce-geektech.netlify.app/",
    },
    {
      id: 6,
      title: "Note App",
      name: "Note App",
      small_desc: "Note with add, search & delete functionality.",
      description:
        "Responsive note app where you can add your notes, edit them, delete them. It also have search feature and toggle mode.",
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
            small_desc={project.small_desc}
            description={project.description}
            link={project.link}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
