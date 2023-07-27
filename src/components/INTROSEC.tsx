import { FunctionComponent } from "react";
import NavBar from "./NavBar";
import Intro from "./Intro";

const INTROSEC: FunctionComponent = () => {
  return (
    <div className="self-stretch overflow-hidden flex flex-col items-start justify-start text-left text-[16.35px] text-b-w-black font-montserrat md:items-center md:justify-center">
      <NavBar />
      <Intro />
    </div>
  );
};

export default INTROSEC;
