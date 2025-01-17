import { IoIosMail } from "react-icons/io";
import emailjs from "@emailjs/browser";
import { useRef, forwardRef } from "react";

const Input = forwardRef(
  ({ placeholder, name }: { placeholder: string; name: string }) => (
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      required
      className="p-3 border-2 w-full border-gray-600 rounded-md bg-gray-200 text-gray-400 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  )
);

function PersonalInfo() {
  return (
    <div className="w-full flex flex-col lg:gap-10 gap-4 text-white lg:px-36 px-16 justify-center">
      <div className="flex flex-col lg:gap-4 gap-2">
        <h2 className="lg:text-5xl text-3xl font-semibold text-gray-100">
          Let's Chat.
        </h2>
        <h2 className="lg:text-5xl text-3xl font-semibold text-gray-100">
          Tell me about your
          <br /> project.
        </h2>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-gray-400 text-lg">
          Let's create something together <span className="text-2xl">👋</span>
        </p>
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <p className="w-10 h-10 flex justify-center items-center bg-gray-500 rounded-full">
            <IoIosMail size={32} />
          </p>
          <div className="flex flex-col">
            <p>Mail me at :</p>
            <p className="text-green-400 font-semibold">
              work.aashish0katila@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FormComponent() {
  const form = useRef<HTMLFormElement>(null);

  function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm(
          process.env.REACT_VITE_SERVICE_ID!,
          process.env.REACT_VITE_TEMPLATE_ID!,
          form.current,
          process.env.REACT_VITE_PUBLIC_KEY!
        )
        .then(
          () => {
            console.log(form.current, "Success!!!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  }
  return (
    <form
      className="w-full z-20 flex flex-col gap-4 lg:px-32 px-16 justify-center"
      onSubmit={sendEmail}
      ref={form}
    >
      <h2 className="text-white text-3xl font-semibold">
        Send me a message 🚀
      </h2>
      <Input name="from_name" placeholder="Full Name" />
      {/* <Input type="email" placeholder="Email Address" /> */}
      <Input name="project_title" placeholder="Project Title" />
      <p className="text-white text-xl">Tell me more about your project</p>
      <textarea className="rounded-xl" name="message" rows={5} required />
      <button
        className="text-white text-lg font-semibold bg-green-600 rounded-2xl px-8 py-1 max-w-fit cursor-pointer"
        type="submit"
      >
        Send Message
      </button>
    </form>
  );
}

const Contact = () => {
  return (
    <div
      id="contact"
      className="h-[100vh] w-full grid lg:grid-cols-2 grid-cols-1"
    >
      <PersonalInfo />
      <FormComponent />
    </div>
  );
};

export default Contact;
