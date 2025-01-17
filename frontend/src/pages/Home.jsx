import React from "react";
import { Link } from "react-router-dom";
import BuildButton from "../components/Button/BuildButton";
import Allcards from "../components/Cards/Allcards";
import PrebuildPCPage from "../components/PreBuildPCPage";

const Home = () => {
  return (
    <div className="flex-col">
      <div className="w-full p-0 h-screen flex justify-center items-center">
        <div className=" m-0 h-full w-full bg-homepagebg inset-0 bg-cover bg-center bg-no-repeat brightness-50"></div>
        <div className="absolute">
          <Link to="/build">
            <BuildButton></BuildButton>
          </Link>
        </div>
      </div>

      <div className="pre-builts w-full flex">

        <PrebuildPCPage />
      </div>

      <div className="footer bg-slate-600 h-[25rem] w-full flex bg-black">
      </div>
    </div>
  );
};

export default Home;
