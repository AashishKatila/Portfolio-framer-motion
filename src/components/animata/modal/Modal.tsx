import { Link } from "react-router-dom";

interface IModalProps {
  title: string;
  image: string;
  description: string;
  link: string;
  onClose: () => void;
}

const Modal = ({ title, image, description, link, onClose }: IModalProps) => {
  return (
    <div className="fixed z-50 inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="flex flex-col gap-2 bg-gray-800 p-4 rounded-3xl shadow-lg max-w-lg w-full">
        <div className="h-52 md:h-60 overflow-hidden relative">
          <img src={image} className="rounded-2xl  h-full w-full " />
          <button
            className=" font-medium hover:text-gray-800 absolute top-4 right-4 w-6 h-6 hover:scale-105 transition-all duration-100 rounded-full bg-white"
            onClick={onClose}
          >
            X
          </button>
        </div>
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-green-400 ">{title}</h2>
          <button className="px-4 bg-gray-400 rounded-3xl text-white font-medium transition-all hover:scale-105 duration-200 ease-in-out ">
            <Link to={link} target="_blank">
              Visit &gt;&gt;
            </Link>
          </button>
        </div>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default Modal;