import { FunctionComponent } from "react";

const OnlineUseImgs: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-row items-center justify-center gap-[61px] md:hidden sm:hidden mq7:flex">
      <img
        className="relative rounded-mid-3 w-[398.36px] h-[800.36px] object-cover md:hidden sm:hidden"
        alt=""
        src="/7@2x.png"
      />
      <img
        className="relative rounded-mid-3 w-[399.36px] h-[800.36px] object-cover md:hidden sm:hidden"
        alt=""
        src="/8@2x.png"
      />
      <img
        className="relative rounded-[21.49px] w-[412.83px] h-[814.23px] object-cover md:hidden sm:hidden"
        alt=""
        src="/9@2x.png"
      />
    </div>
  );
};

export default OnlineUseImgs;
