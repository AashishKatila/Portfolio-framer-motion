import { motion } from "framer-motion";
import { ContainerScroll } from "../components/animata/container/scroll-animation";

function Input({ type, placeholder }: { type: string; placeholder: string }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="p-3 border-2 w-full border-gray-600 rounded-md bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}

function PersonalInfo() {
  return (
    <div className="flex flex-col space-y-4 text-lg text-gray-300">
      <div className="font-bold text-3xl text-white">Aashish Katila</div>
      <div>aashishkatila@gmail.com</div>
      <div>+977-9816124226</div>
    </div>
  );
}

function FormComponent() {
  return (
    <form className="flex flex-col space-y-4">
      <Input type="text" placeholder="Name" />
      <Input type="email" placeholder="Email" />
      <Input type="tel" placeholder="Phone" />
      <button
        type="submit"
        className="p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Submit
      </button>
    </form>
  );
}

const Contact = () => {
  return (
    <div id="contact">
      <ContainerScroll
        titleComponent={
          <div className="md:text-3xl lg:text-5xl text-lg text-green-400 font-bold md:pb-2 ">
            Meet the Person behind this webpage
          </div>
        }
      >
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 text-white text-lg md:text-xl place-content-center h-full place-items-center bg-gradient-to-r from-gray-800 via-gray-900 to-black p-8 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="md:flex hidden flex-col justify-center items-center border-2 border-gray-700 p-8 rounded-lg shadow-lg bg-gray-800 bg-opacity-75 w-full md:w-auto"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <PersonalInfo />
          </motion.div>
          <motion.div
            className="bg-gray-800 bg-opacity-75 p-8 rounded-lg shadow-lg"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <FormComponent />
          </motion.div>
        </motion.div>
      </ContainerScroll>
    </div>
  );
};

export default Contact;
