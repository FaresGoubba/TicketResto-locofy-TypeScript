import { FunctionComponent } from "react";

const PhotosMobilscroll: FunctionComponent = () => {
  return (
    <div className="self-stretch hidden flex-row items-start justify-center md:flex">
      <div className="self-stretch flex-1 shadow-[0px_4px_50px_rgba(0,_0,_0,_0.01)] overflow-x-auto flex flex-row items-start justify-center">
        <div className="w-[335px] flex flex-row items-start justify-start gap-[34px] md:pl-3 md:pr-3 md:box-border">
          <img
            className="relative rounded-[19.04px] w-[300px] h-[300px] object-cover"
            alt=""
            src="/rectangle-52911@2x.png"
          />
          <img
            className="relative rounded-[19.04px] w-[300px] h-[300px] object-cover"
            alt=""
            src="/rectangle-52921@2x.png"
          />
          <img
            className="relative rounded-[19.04px] w-[300px] h-[300px] object-cover"
            alt=""
            src="/rectangle-52931@2x.png"
          />
          <img
            className="relative rounded-[19.04px] w-[300px] h-[300px] object-cover"
            alt=""
            src="/rectangle-52941@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default PhotosMobilscroll;
