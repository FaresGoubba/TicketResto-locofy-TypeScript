import { FunctionComponent } from "react";

const CompaniesThatTrustUsMobile: FunctionComponent = () => {
  return (
    <div className="hidden flex-col items-start justify-center text-left text-xl text-b-w-black font-new-type-sm-sm-14-sm-14-b md:flex md:gap-[32px]">
      <div className="w-[376px] flex flex-col items-center justify-center gap-[17px]">
        <div className="w-[767px] flex flex-col items-center justify-start">
          <div className="flex flex-row items-center justify-center gap-[8px]">
            <img className="relative w-10 h-10" alt="" src="/earth1.svg" />
            <div className="flex flex-row items-center justify-center">
              <b className="relative leading-[28px]">Companies that trust us</b>
            </div>
          </div>
        </div>
        <div className="self-stretch overflow-x-auto flex flex-row py-0 px-10 items-center justify-start">
          <div className="flex-1 relative h-[70px]">
            <div className="absolute top-[0px] left-[0px] w-[376px] flex flex-row items-center justify-center">
              <div className="rounded-xl bg-b-w-white w-[150px] h-[70px] flex flex-row p-[6.402075290679932px] box-border items-center justify-center">
                <img
                  className="relative w-[120px] h-[22.06px] object-cover"
                  alt=""
                  src="/image-17601@2x.png"
                />
              </div>
              <div className="rounded-xl bg-b-w-white w-[150px] h-[70px] flex flex-row p-[6.402075290679932px] box-border items-center justify-center">
                <img
                  className="relative w-[120px] h-[33.24px] object-cover"
                  alt=""
                  src="/image-17611@2x.png"
                />
              </div>
              <div className="rounded-xl bg-b-w-white w-[180px] h-[70px] flex flex-row p-[6.402075290679932px] box-border items-center justify-center">
                <div className="flex flex-row items-center justify-start">
                  <img
                    className="relative w-[41px] h-[36.98px] object-cover"
                    alt=""
                    src="/image-1762@2x.png"
                  />
                  <img
                    className="relative w-[120px] h-[22.02px] object-cover"
                    alt=""
                    src="/image-1763@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompaniesThatTrustUsMobile;
