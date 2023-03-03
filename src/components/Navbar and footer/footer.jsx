import React from "react";
import { Link } from "react-router-dom";

const footer = () => {
  return (
    <>
      <div className="p-4 text-md font-normal font_family text-center">
        <p>
          © 2023. All rights reserved | Design by
          <Link to="/" className="text-blue-600 px-1 tracking-wider">
            Rohit
          </Link>
        </p>
      </div>
    </>
  );
};

export default footer;
