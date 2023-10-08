import React from "react";
import CardHobby from "../component/CardHobby";

const Hobby = () => {
  return (
    <>
      <div class="judul flex h-[100px] bg-darkgrey items-center">
        <div class="bg-red border border-red w-[60px] md:w-[200px] h-[2px] rounded-full"></div>
        <h1 class="text-red font-bold text-[30px] md:text-[40px] ms-4 md:ms-8 my-auto">
          My Hobby
        </h1>
        <div class="bg-red border border-red w-[60px] md:w-[200px] h-[2px] rounded-full ms-auto"></div>
      </div>
      <section
        id="hobby"
        className="bg-darkgrey text-white px-[50px] md:px-[200px] py-[100px]"
      >
        <div className="flex border justify-center items-center gap-12">
          <div>
            <img
              src="./img/writting/ai.webp"
              alt=""
              className="max-w-[500px]"
            />
          </div>
          <div>
            <CardHobby />
            <CardHobby />
            <CardHobby />
            <CardHobby />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hobby;
