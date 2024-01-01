import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Pictures = () => {
  const photos = [
    // "https://picsum.photos/2000/3000",
    // "https://picsum.photos/3000/2000",
    // "https://picsum.photos/4000/3000",
    // "https://picsum.photos/3000/2000",
    // "https://picsum.photos/2000/3000",
    // "https://picsum.photos/4000/3000",
    // "https://picsum.photos/1500/2000",
    // "https://picsum.photos/1500/2000",
    // "https://picsum.photos/2000/4000",
    "./img/pictures/1.jpg",
    "./img/pictures/2.jpg",
    "./img/pictures/3.jpg",
    "./img/pictures/4.jpg",
    "./img/pictures/5.JPG",
    "./img/pictures/6.JPG",
    "./img/pictures/7.JPG",
    "./img/pictures/8.jpg",
    "./img/pictures/9.jpg",
  ];
  return (
    <>
      <div class="judul flex h-[100px] bg-black items-center">
        <div class="bg-red border border-white w-[60px] md:w-[200px] h-[2px] rounded-full"></div>
        <h1 class="text-white font-bold text-[30px] md:text-[40px] ms-4 md:ms-8 my-auto">
          My Picures
        </h1>
        <div class="bg-red border border-white w-[60px] md:w-[200px] h-[2px] rounded-full ms-auto"></div>
      </div>
      <section id="pictures" className="bg-black">
        <div className="max-w-[300px] md:max-w-[1000px] p-4 mx-auto bg-black">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 3, 750: 3, 900: 3 }}
          >
            <Masonry gutter="20px">
              {photos.map((image, i) => (
                <img
                  key={i}
                  src={image}
                  style={{ width: "100%", display: "block" }}
                  alt=""
                />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
        <div className="triangle w-full mt-[100px]">
          <img
            src="/img/triangle/triangle-darkgrey-flip.svg"
            alt="gambar"
            width={1800}
          />
        </div>
      </section>
    </>
  );
};

export default Pictures;
