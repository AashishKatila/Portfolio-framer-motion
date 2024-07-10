import NavTabs from "../components/animata/container/nav-tabs";
import Emote from "../assets/emote.png";
import { Meteors } from "../components/animata/background/meteors";
import { motion } from "framer-motion";

function FloatingTab() {
  return (
    <div className="flex items-center w-full pt-4 justify-center  fixed top-0 z-50">
      <NavTabs tabs={["Home", "About", "Projects", "Contact"]} />
    </div>
  );
}

function Introduction() {
  return (
    <motion.div
      initial={{ opacity: 0, x: "-400px" }}
      animate={{ opacity: 1, x: "0" }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="col-span-2 "
    >
      <div className="flex items-center  ">
        Hey there
        <motion.div
          animate={{ rotate: [0, 10, -10, 10, 0] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          👋
        </motion.div>
        .
      </div>
      I am a
      <motion.div
        className="text-green-500 inline-block  mx-2 text-3xl md:text-5xl md:mb-2 "
        initial={{ opacity: 0, y: "200px" }}
        transition={{ delay: 0.5, duration: 0.5 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Computer Engineer
      </motion.div>
      <div>& I love to build cool stuff. </div>
    </motion.div>
  );
}

function Image() {
  return (
    <motion.div
      className="col-span-1 overflow-hidden relative  rounded-3xl z-20 flex items-end justify-center md:h-80 md:w-80 h-60 w-60 bg-black"
      initial={{ opacity: 0, x: "400px" }}
      animate={{ opacity: 1, x: "0" }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <Meteors number={20}>
        <img src={Emote} alt="My emote photo" className="h-60 w-60 z-20 " />
      </Meteors>
    </motion.div>
  );
}

const Landing = () => {
  return (
    <div className=" text-slate-100" id="home">
      <FloatingTab />
      <div className="flex flex-col md:flex-row z-20 h-[60vh] md:h-[100vh] max-w-[1000px] justify-center items-center gap-12 mx-auto  text-xl md:text-3xl font-bold pt-36">
        <Introduction />
        <Image />
      </div>
    </div>
  );
};

export default Landing;
