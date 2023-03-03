import React from "react";
const HeroSectionPoster = () => {
  return (
    <>
      <div
        className={`flex justify-center items-center bg-no-repeat bg-cover bg-center rounded-lg md:w-1/2 w-0 lg:h-96 md:h-80 bg-origin-content relative  `}
      >
        <img
          src="/images/hero_bg_image.png"
          className="mt-28 md:block hidden opacity-50"
          alt=""
        />
        <img
          src="/images/resumepictransparent.png"
          className="lg:w-72 lg:h-80 md:w-56 md:h-60 absolute md:block hidden"
          alt="myimage"
        />
      </div>
    </>
  );
};

export default HeroSectionPoster;
