import React from "react";

const CardWritting = (props) => {
  return (
    <div
      className="max-w-[280px] border border-bordergrey rounded-lg text-center p-4"
      onClick={props.onCardClick}
      style={{ cursor: "pointer" }}
    >
      <img src={props.image} alt="" />
      <h1 className="text-[20px] text-white">{props.tittle}</h1>
    </div>
  );
};

export default CardWritting;
