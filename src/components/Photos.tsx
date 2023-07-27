import { FunctionComponent } from "react";

const Photos: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-row items-center justify-center gap-[44px] md:hidden">
      <img
        className="flex-1 relative rounded-[19.04px] max-w-full overflow-hidden h-[378.56px] object-cover"
        alt=""
        src="/rectangle-5291@2x.png"
      />
      <img
        className="flex-1 relative rounded-[19.04px] max-w-full overflow-hidden h-[378.56px] object-cover"
        alt=""
        src="/rectangle-5292@2x.png"
      />
      <img
        className="flex-1 relative rounded-[19.04px] max-w-full overflow-hidden h-[378.56px] object-cover"
        alt=""
        src="/rectangle-5293@2x.png"
      />
      <img
        className="flex-1 relative rounded-[19.04px] max-w-full overflow-hidden h-[378.56px] object-cover"
        alt=""
        src="/rectangle-5294@2x.png"
      />
    </div>
  );
};

export default Photos;
