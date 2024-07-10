import DoubleUnderline from "../components/animata/text/double-underline";
import TypingText from "../components/animata/text/typing-text";

function AboutMe() {
  return (
    <div className="h-[70vh] md:h-[100vh] " id="about">
      <div className=" flex  justify-center h-1/6 md:h-1/4 ">
        <DoubleUnderline className="md:mt-24 my-9 text-slate-300 font-bold md:text-5xl text-2xl z-30 ">
          About Me
        </DoubleUnderline>
      </div>
      <div className="flex flex-col md:flex-row md:h-3/4 h-5/6 items-center gap-8 justify-center md:gap-4 mx-auto md:max-w-[1000px] max-w-[400px] text-slate-100 ">
        <div className="text-3xl md:text-4xl font-bold">
          Hi, I'm Aashish, nice to meet you. Please take a look around.
        </div>
        <div className="min-w-96 max-w-96 rounded-sm bg-gray-800 px-4 py-2 text-yellow-400 shadow-lg">
          <TypingText text="> I'm a dedicated React developer on a mission to create exceptional web experiences. With a love for coding, problem-solving, and a commitment to React, I craft standout web applications. Beyond the code, I'm an explorer of all things in web development." />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
