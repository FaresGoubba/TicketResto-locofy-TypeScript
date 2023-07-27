import { FunctionComponent } from "react";
import CtaBtn from "./CtaBtn";

const NavBar: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-row py-0 px-20 items-center justify-between text-left text-[16.35px] text-b-w-black font-montserrat md:pl-6 md:pr-6 md:box-border sm:flex-row sm:gap-[0px] sm:items-start sm:justify-start sm:pl-4 sm:pr-4 sm:box-border">
      <div className="w-[671px] flex flex-row items-center justify-between md:items-start md:justify-start">
        <div className="w-[149px] flex flex-row items-start justify-center">
          <div className="relative w-[149px] h-10">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
              <div className="absolute top-[0px] left-[0px] flex flex-col items-end justify-start">
                <img
                  className="relative w-[149px] h-[40.35px]"
                  alt=""
                  src="/goubba-business.svg"
                />
                <div className="relative tracking-[-0.02em] capitalize font-medium hidden">
                  bUSINESS
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[32px] text-xl text-b-w-bw-4 font-new-type-sm-sm-14-sm-14-b md:hidden">
          <div className="flex flex-row items-start justify-start gap-[10px]">
            <div className="flex flex-col items-start justify-start">
              <div className="h-[87px] flex flex-col items-center justify-center gap-[9px]">
                <img
                  className="relative w-[59.5px] h-0 hidden"
                  alt=""
                  src="/vector-5522.svg"
                />
                <div className="flex flex-row items-start justify-start">
                  <div className="rounded-3xs flex flex-row p-5 items-start justify-start relative gap-[10px]">
                    <div className="relative leading-[28px] font-light z-[0]">
                      Personal
                    </div>
                    <img
                      className="relative w-[30px] h-[30px] hidden z-[1]"
                      alt=""
                      src="/angledown2.svg"
                    />
                    <div className="absolute my-0 mx-[!important] top-[21px] left-[130px] w-[57px] h-[26px] hidden z-[2] text-sm">
                      <div className="absolute top-[0px] left-[0px] rounded-3xs bg-orange w-[57px] h-[26px]" />
                      <div className="absolute top-[2px] left-[11px] leading-[22px] font-medium">
                        Soon
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-3xs hidden flex-row p-5 items-start justify-start gap-[10px] text-g-primary-g-p">
              <div className="relative leading-[28px] font-medium">
                Goubba for Shoppers
              </div>
              <img
                className="relative w-[30px] h-[30px] hidden"
                alt=""
                src="/angledown3.svg"
              />
            </div>
          </div>
          <div className="flex flex-col items-start justify-start">
            <div className="h-[87px] flex flex-col items-center justify-center gap-[9px]">
              <img
                className="relative w-[59.5px] h-0 hidden"
                alt=""
                src="/vector-5522.svg"
              />
              <div className="flex flex-row items-start justify-start">
                <div className="rounded-3xs flex flex-row p-5 items-start justify-start relative gap-[10px]">
                  <div className="relative leading-[28px] font-light z-[0]">
                    Business
                  </div>
                  <img
                    className="relative w-[30px] h-[30px] hidden z-[1]"
                    alt=""
                    src="/angledown2.svg"
                  />
                  <div className="absolute my-0 mx-[!important] top-[21px] left-[130px] w-[57px] h-[26px] hidden z-[2] text-sm">
                    <div className="absolute top-[0px] left-[0px] rounded-3xs bg-orange w-[57px] h-[26px]" />
                    <div className="absolute top-[2px] left-[11px] leading-[22px] font-medium">
                      Soon
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start text-g-primary-g-p">
            <div className="h-[87px] flex flex-col items-center justify-start gap-[9px]">
              <img
                className="relative w-[63.5px] h-0.5"
                alt=""
                src="/vector-5523.svg"
              />
              <div className="flex flex-row items-start justify-start">
                <div className="rounded-3xs flex flex-row p-5 items-start justify-start relative gap-[10px]">
                  <div className="relative leading-[28px] font-medium z-[0]">
                    Corporate
                  </div>
                  <img
                    className="relative w-[30px] h-[30px] hidden z-[1]"
                    alt=""
                    src="/angledown3.svg"
                  />
                  <div className="absolute my-0 mx-[!important] top-[21px] left-[130px] w-[57px] h-[26px] hidden z-[2] text-sm text-b-w-bw-4">
                    <div className="absolute top-[0px] left-[0px] rounded-3xs bg-orange w-[57px] h-[26px]" />
                    <div className="absolute top-[2px] left-[11px] leading-[22px] font-medium">
                      Soon
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[67px] flex flex-row items-center justify-start gap-[32px] text-xl text-b-w-bw-4 font-new-type-sm-sm-14-sm-14-b">
        <div className="rounded-3xs h-[67px] flex flex-row p-5 box-border items-center justify-center gap-[4px]">
          <div className="relative font-medium">EN</div>
          <img
            className="relative w-6 h-6"
            alt=""
            src="/stockholmicons--home--earth2.svg"
          />
          <img
            className="relative w-[30px] h-[30px]"
            alt=""
            src="/angledown4.svg"
          />
        </div>
        <div className="w-48 flex flex-row items-center justify-center md:hidden sm:hidden">
          <CtaBtn
            ellipse954="/ellipse-954@2x.png"
            angleDown="/angledown.svg"
            ellipseIcon={false}
            angleDownIcon={false}
            property1DefaultPosition="unset"
            property1DefaultBoxSizing="border-box"
            property1DefaultCursor="pointer"
            property1DefaultBorder="none"
            joinNowDisplay="inline-block"
            dADisplay="inline-block"
          />
        </div>
        <div className="relative w-8 h-[19px] hidden md:flex">
          <div className="absolute h-[21.05%] w-[93.75%] top-[0%] right-[0%] bottom-[78.95%] left-[6.25%] rounded-31xl bg-b-w-black" />
          <div className="absolute h-[21.05%] w-[93.75%] top-[47.37%] right-[0%] bottom-[31.58%] left-[6.25%] rounded-31xl bg-b-w-black" />
          <div className="absolute h-[21.05%] w-[93.75%] top-[100%] right-[0%] bottom-[-21.05%] left-[6.25%] rounded-31xl bg-b-w-black" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
