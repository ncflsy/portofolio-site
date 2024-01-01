import React, { useState } from "react";

const ProjectCard = ({
  imageUrl,
  title,
  subtitle,
  description,
  technologies,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleHoverOut = () => {
    setIsHovered(false);
  };

  const shadowStyle = {
    left: isHovered ? "-10px" : "0",
    top: isHovered ? "-10px" : "0",
    transition: "all 500ms",
  };
  const shadowStyleCard = {
    right: isHovered ? "-10px" : "0",
    bottom: isHovered ? "-10px" : "0",
    transition: "all 500ms",
  };

  return (
    <div className="relative">
      <div
        className="border border-bordergrey bg-darkgrey hover:border-grey hover:bg-black rounded-2xl p-4 max-w-[300px] relative h-[600px] z-10"
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverOut}
        style={shadowStyleCard}
      >
        <div>
          <img src={imageUrl} alt={title} />
        </div>
        <div className="text-center pt-8">
          <h1 className="text-white font-semibold text-2xl">{title}</h1>
          <h1 className="text-white font-light text-lg">{subtitle}</h1>
          <h2 className="text-grey">{description}</h2>
          <div className="logo flex flex-wrap justify-center">
            {technologies.map((tech, index) => (
              <div key={index} className="w-28 flex items-center p-3">
                <img src={tech.image} alt={tech.name} />
                <p className="text-white ms-2">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className="w-[300px] h-[600px] absolute bg-red z-0 top-0 left-0 rounded-2xl"
        style={shadowStyle}
      ></div>
    </div>
  );
};

export default ProjectCard;
