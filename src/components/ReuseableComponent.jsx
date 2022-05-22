import React from "react";

const ReuseableComponent = (props) => {
  const { backgroundImg, heading, paragraph, btn1, btn2 } = props;
  return (
    <section
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="min-h-screen"
    >
      <div className="flex flex-col h-screen justify-between items-center ">
        <div className="pt-[7.2rem]">
          <h1 className="text-[2.5rem] text-center font-semibold text-gray-800">
            {heading}
          </h1>
          {paragraph && (
            <p className="text-[1rem] text-gray-500">{paragraph}</p>
          )}
        </div>
        <div className="mb-[5rem] block md:flex list-none">
          {btn1 && (
            <li className="mx-[1rem] opacity-70 font-semibold bg-white text-black rounded-full py-2 shadow-md hover:shadow-lg px-[4rem]">
              <a href="#">{btn1}</a>
            </li>
          )}
          {btn2 && (
            <li className="mx-[1rem] opacity-70 bg-black text-white rounded-full py-2 shadow-md hover:shadow-lg px-[4rem]">
              <a href="#">{btn2}</a>
            </li>
          )}
        </div>
      </div>
    </section>
  );
};

export default ReuseableComponent;
