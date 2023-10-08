import React, { useEffect } from "react";
import Navbar from "../component/Navbar";
import Footer from "../section/Footer";
import { FaHome } from "react-icons/fa";
import { useParams } from "react-router-dom";
import dataWritting from "../data/writing.json";

const WrittingPages = () => {
  const { cardIndex } = useParams();
  const data = dataWritting.find((item) => item.index == cardIndex);
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };

    scrollToTop();
  }, [cardIndex]);

  const index = cardIndex;
  return (
    <>
      <Navbar />
      <section
        id="writting-pages"
        className="bg-black w-full text-whiteText md:px-[150px] pt-[50px] pb-[50px]"
      >
        <div className="flex flex-col bg-darkgrey py-[30px] px-[40px] gap-12 max-w-[1000px] mx-auto">
          <span className="flex gap-2 items-center mb-[50px]">
            <FaHome />
            <p>Home / Writting</p>
          </span>
          <h1 className="font-bold text-3xl text-justify">{data.title}</h1>
          <img
            src="/img/writting/ai.webp"
            alt=""
            className="w-[800px] mx-auto"
          />
          <p className="text-justify">{data.paragraf}</p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default WrittingPages;
