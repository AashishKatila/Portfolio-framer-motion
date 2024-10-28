interface ICardProps {
  id: number;
  title: string;
  image: string;
  description: string;
}

const Card = ({ id, title, image, description }: ICardProps) => {
  return (
    <div
      className={`flex flex-col gap-2 bg-gray-800 rounded-3xl p-4 cursor-pointer transition-all hover:scale-105 duration-300 ease-in-out  ${
        id % 2 === 0 ? "md:-rotate-2" : "md:rotate-2"
      }`}
      key={title}
    >
      <div className="h-52 md:h-60 overflow-hidden">
        <img src={image} className=" rounded-xl object-cover h-full w-full " />
      </div>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default Card;
