import React from 'react';

const ProjectCard = ({ imageUrl, title, subtitle, description, technologies }) => {
  return (
    <div className='border border-bordergrey hover:border-grey bg-darkgrey hover:bg-black rounded-2xl p-4 max-w-[300px]'>
      <div>
        <img src={imageUrl} alt={title} />
      </div>
      <div className='text-center pt-8'>
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
  );
}

export default ProjectCard;
