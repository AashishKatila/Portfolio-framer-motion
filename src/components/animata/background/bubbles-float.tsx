const BubblesFloat = () => {
  const circleStyles = [
    { left: "25%", width: "80px", height: "80px", animationDelay: "0s" },
    {
      left: "10%",
      width: "20px",
      height: "20px",
      animationDelay: "2s",
      animationDuration: "12s",
    },
    { left: "70%", width: "20px", height: "20px", animationDelay: "4s" },
    {
      left: "40%",
      width: "60px",
      height: "60px",
      animationDelay: "0s",
      animationDuration: "18s",
    },
    { left: "65%", width: "20px", height: "20px", animationDelay: "0s" },
    { left: "75%", width: "110px", height: "110px", animationDelay: "3s" },
    { left: "35%", width: "150px", height: "150px", animationDelay: "7s" },
    {
      left: "50%",
      width: "25px",
      height: "25px",
      animationDelay: "15s",
      animationDuration: "45s",
    },
    {
      left: "20%",
      width: "15px",
      height: "15px",
      animationDelay: "2s",
      animationDuration: "35s",
    },
    {
      left: "85%",
      width: "150px",
      height: "150px",
      animationDelay: "0s",
      animationDuration: "15s",
    },
  ];
  return (
    <div className="fixed -bottom-80 z-10 w-screen h-screen  ">
      <ul className="relative w-full h-full flex border-6 items-end justify-evenly ">
        {circleStyles.map((style, index) => (
          <li
            key={index}
            style={{
              left: style.left,
              width: style.width,
              height: style.height,
              animationDelay: style.animationDelay,
              animationDuration: style.animationDuration,
            }}
            className=" bg-slate-400 animate-bubble"
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default BubblesFloat;
