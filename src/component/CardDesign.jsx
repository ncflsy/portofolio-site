import React from "react";
import { Link } from "react-router-dom";

const CardDesign = (props) => {
  return (
    <div
      id="card"
      className="flex flex-col md:flex-row bg-black shadow-2xl max-w-[300px] md:max-w-[800px] p-4 md:py-12 md:px-8 m-16 rounded-lg mx-auto"
    >
      <div className="mx-auto w-[100%] md:w-[50%]">
        <div className="flex justify-center">
          <img
            src={props.gambar1}
            alt="gambar"
            className="w-[250px] md:w-[1050px]"
          />
        </div>
        <div className="flex max-w-[1000px] md:max-w-[500px] gap-2 mt-2 mx-auto justify-center">
          <img
            src={props.gambar2}
            alt="gambar"
            className="w-[60px] md:w-[120px]"
          />
          <img
            src={props.gambar3}
            alt="gambar"
            className="w-[60px] md:w-[120px]"
          />
          <img
            src={props.gambar4}
            alt="gambar"
            className="w-[60px] md:w-[120px]"
          />
        </div>
      </div>
      <div className="text-center w-[100%] md:w-[50%] p-4">
        <h1 className="text-[30px] font-bold text-pink">{props.title}</h1>
        <p className="text-justify">{props.desc}</p>
        <Link to={props.link}>
          <button className="px-6 py-1 border border-pink hover:bg-pink hover:text-black rounded-full mt-4">
            Show
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CardDesign;
