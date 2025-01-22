import React from "react";
import { Link } from "react-router-dom";
import BuildButton from "../components/Button/BuildButton";
import PrebuildPCPage from "../components/PreBuildPCPage";
import TextContent from "../components/TextContent";

const Home = () => {
  return (
    <div className="flex-col">
      {/* Hero Section */}
      <div className="w-full p-0 h-screen flex justify-center items-center relative">
        {/* Background Image */}
        <div className="m-0 h-full w-full bg-homepagebg inset-0 bg-cover bg-center bg-no-repeat brightness-50 "></div>
        <div className="absolute inset-0 bg-black opacity-45"></div>

        {/* Content Section */}
        <div className="absolute flex flex-col items-center space-y-8 px-4 text-center">
          {/* Text Content */}
          <TextContent />

          {/* Button */}
          <Link to="/build">
            <BuildButton />
          </Link>
        </div>
      </div>

      {/* Pre-built Section */}
      <div className="pre-builts w-full flex">
        <section id="prebuildpc">
        <PrebuildPCPage />
        </section>
      </div>

      {/* Footer */}
      <div className="footer bg-slate-600 h-[25rem] w-full flex bg-black"></div>
    </div>
  );
};

export default Home;
