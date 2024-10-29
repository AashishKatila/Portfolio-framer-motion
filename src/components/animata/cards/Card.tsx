import { useEffect, useState } from "react";
import Modal from "../modal/Modal";

interface ICardProps {
  id: number;
  title: string;
  image: string;
  small_desc: string;
  description: string;
  link: string;
}

const Card = ({
  id,
  title,
  image,
  small_desc,
  description,
  link,
}: ICardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <>
      <div
        className={`flex flex-col gap-2 bg-gray-800 rounded-3xl p-4 cursor-pointer transition-all hover:scale-105 duration-300 ease-in-out  ${
          id % 2 === 0 ? "md:-rotate-2" : "md:rotate-2"
        }`}
        key={title}
        onClick={() => setIsOpen(true)}
      >
        <div className="h-40 md:h-48 w-full overflow-hidden">
          <img src={image} className=" rounded-xl  h-full w-full " />
        </div>
        <p className="text-gray-300">{small_desc}</p>
      </div>
      {isOpen && (
        <Modal
          title={title}
          description={description}
          image={image}
          link={link}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Card;
