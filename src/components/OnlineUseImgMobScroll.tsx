import { FunctionComponent } from "react";

const OnlineUseImgMobScroll: FunctionComponent = () => {
  return (
    <div className="self-stretch overflow-x-auto hidden flex-row py-0 px-2 box-border items-center justify-start min-w-[360px] md:flex md:pl-3 md:pr-3 md:box-border">
      <div className="w-[420px] overflow-x-auto shrink-0 flex flex-row items-center justify-start gap-[77px] md:pl-3 md:pr-3 md:box-border">
        <img
          className="relative rounded-mid-3 w-[343px] h-[745px] object-cover"
          alt=""
          src="/2@2x.png"
        />
        <img
          className="relative rounded-mid-3 w-[344px] h-[745px] object-cover"
          alt=""
          src="/4@2x.png"
        />
        <img
          className="relative rounded-[21.49px] w-[344.05px] h-[745.45px] object-cover"
          alt=""
          src="/6@2x.png"
        />
      </div>
    </div>
  );
};

export default OnlineUseImgMobScroll;
