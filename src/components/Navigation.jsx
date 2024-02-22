import React from "react";
import { useLocation } from "react-router-dom";

const Navigation = () => {

  const myLocation = useLocation()

  return (
    <div className="bg-Mobile bg-no-repeat bg-center bg-cover h-[150px] w-screen sm:w-auto sm:bg-inherit sm:h-full sm:rounded-md">
      <nav className="flex gap-2 absolute top-10 left-[50%] translate-x-[-50%]
      sm:flex-col sm:gap-5 sm:justify-start sm:items-start sm:static sm:pl-5 sm:pt-5 sm:translate-x-0 sm:translate-y-0 sm:h-full sm:inset-auto sm:w-[250px] sm:rounded-lg sm:bg-Desktop sm:bg-cover sm:bg-no-repeat sm:bg-center">

        <div className="flex justify-center items-center gap-2 leading-5 tracking-widest uppercase text-sm text-white">
          <div className={`flex justify-center items-center w-8 h-8 rounded-full border-4 border-Lightblue  ${myLocation.pathname === '/' ? 'text-black bg-Lightblue' : 'text-Lightblue'}`}>1</div>
          <div className="hidden sm:block">
            <h2 className="text-xs font-light text-Lightblue">step 1</h2>
            <h2 className="font-thin">your info</h2>
          </div>
        </div>

        <div className="flex justify-center items-center gap-2 leading-5 tracking-widest uppercase text-sm text-white">
          <div className={`flex justify-center items-center w-8 h-8 rounded-full border-4 border-Lightblue ${myLocation.pathname === '/stepTwo' ? 'text-black bg-Lightblue' : 'text-Lightblue'}`}>2</div>
          <div className="hidden sm:block">
            <h2 className="text-xs font-light text-Lightblue">step 2</h2>
            <h2 className="font-thin">select plans</h2>
          </div>
        </div>

        <div className="flex justify-center items-center gap-2 leading-5 tracking-widest uppercase text-sm text-white">
          <div className={`flex justify-center items-center w-8 h-8 rounded-full border-4 border-Lightblue ${myLocation.pathname === '/stepThree' ? 'text-black bg-Lightblue' : 'text-Lightblue'}`}>3</div>
          <div className="hidden sm:block">
            <h2 className="text-xs font-light text-Lightblue">step 3</h2>
            <h2 className="font-thin">add-ons</h2>
          </div>
        </div>

        <div className="flex justify-center items-center gap-2 leading-5 tracking-widest uppercase text-sm text-white">
          <div className={`flex justify-center items-center w-8 h-8 rounded-full border-4 border-Lightblue ${myLocation.pathname === '/stepFour' ? 'text-black bg-Lightblue' : 'text-Lightblue'}`}>4</div>
          <div className="hidden sm:block">
            <h2 className="text-xs font-light text-Lightblue">step 4</h2>
            <h2 className="font-thin">summary</h2>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
