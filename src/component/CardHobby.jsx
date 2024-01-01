import React from "react";
import { useState } from "react";
import { FaBicycle } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";

const CardHobby = () => {
  const [cardShow, setCardShow] = useState(false);
  const handleCardClick = () => {
    setCardShow(!cardShow);
  };
  return (
    <>
      <div
        id="card-1"
        className="border w-[600px mx-auto] my-2 px-8 h-[50px] flex items-center gap-2"
        onClick={handleCardClick}
      >
        <FaBicycle size={30} />
        <h1 className="text-xl my-auto mx-auto w-[100px]">Cycling</h1>
        <FaCaretDown />
      </div>
      <div
        id="card-detail"
        className={`border w-[600px mx-auto] h-[100px] ${
          cardShow ? "flex" : "hidden"
        }`}
      >
        <h1 className="text-xl my-auto mx-auto">halo ini adalah card detail</h1>
      </div>
    </>
  );
};

export default CardHobby;
