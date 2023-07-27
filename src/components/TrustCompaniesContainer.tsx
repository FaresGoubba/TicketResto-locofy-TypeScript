import { FunctionComponent } from "react";

const TrustCompaniesContainer: FunctionComponent = () => {
  return (
    <div className="self-stretch bg-mintcream-100 overflow-hidden flex flex-col py-0 px-20 items-start justify-start text-left text-29xl text-b-w-black font-new-type-sm-sm-14-sm-14-b md:hidden">
      <div className="self-stretch flex flex-col items-center justify-start gap-[48px]">
        <div className="self-stretch flex flex-row items-center justify-center gap-[24px]">
          <div className="relative w-12 h-12">
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full sm:w-6 sm:h-6"
              alt=""
              src="/earth.svg"
            />
          </div>
          <div className="flex flex-row items-center justify-center">
            <b className="relative leading-[56px] md:text-13xl sm:text-xl">
              Companies that trust us
            </b>
          </div>
        </div>
        <div className="self-stretch flex flex-row py-0 px-20 items-center justify-center gap-[16px]">
          <div className="rounded-xl bg-b-w-white h-[106px] flex flex-col p-[6.402075290679932px] box-border items-start justify-center">
            <img
              className="relative w-[300px] h-[48.12px] object-cover"
              alt=""
              src="/image-1760@2x.png"
            />
          </div>
          <div className="rounded-xl bg-b-w-white flex flex-col p-[6.402075290679932px] items-center justify-center">
            <img
              className="relative w-[350px] h-[60.93px] object-cover"
              alt=""
              src="/image-1761@2x.png"
            />
          </div>
          <div className="rounded-xl bg-b-w-white h-[106px] flex flex-col p-[6.402075290679932px] box-border items-center justify-center">
            <img
              className="relative w-[450px] h-[81.98px] object-cover"
              alt=""
              src="/image-1766@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustCompaniesContainer;
