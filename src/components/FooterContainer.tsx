import { FunctionComponent } from "react";

const FooterContainer: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-row items-center justify-between text-left text-sm text-b-w-bw-15 font-new-type-sm-sm-14-sm-14-b">
      <div className="flex-1 flex flex-col items-start justify-start">
        <img
          className="relative w-[130px] h-[32.5px]"
          alt=""
          src="/group-34454.svg"
        />
        <div className="self-stretch rounded-8xs flex flex-row items-center justify-start gap-[16px]">
          <div className="flex-1 relative leading-[22px]">
            <p className="m-0">
              Your favorite super-wallet for all things. Gift Cards, deals,
              cashback, and promo codes are here!
            </p>
          </div>
          <img
            className="relative w-[30px] h-[30px] hidden"
            alt=""
            src="/arrowright.svg"
          />
          <div className="rounded-8xs bg-g-secondary-g-s hidden flex-row py-[5px] px-2.5 items-start justify-start text-center text-xs text-b-w-white">
            <div className="relative leading-[20px] font-medium">SOON</div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-row items-center justify-start">
        <img
          className="relative w-24 h-24 object-cover"
          alt=""
          src="/startup-label-logo-1@2x.png"
        />
        <div className="relative w-[98px] h-[93.68px]">
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/image-1586@2x.png"
          />
        </div>
      </div>
      <div className="flex-1 flex flex-row items-center justify-between">
        <button className="cursor-pointer p-2 bg-[transparent] rounded-lg flex flex-row items-center justify-center gap-[8px] border-[0.8px] border-solid border-b-w-bw-05">
          <div className="relative text-base font-medium font-new-type-sm-sm-14-sm-14-b text-b-w-bw-05 text-left">
            EN
          </div>
          <img
            className="relative w-[19.2px] h-[19.2px]"
            alt=""
            src="/stockholmicons--home--earth.svg"
          />
          <img className="relative w-6 h-6" alt="" src="/angledown1.svg" />
        </button>
        <button className="cursor-pointer p-2.5 bg-b-w-bw-4 rounded-3xs flex flex-row items-start justify-start border-[1px] border-solid border-b-w-bw-4">
          <img className="relative w-5 h-5" alt="" src="/arrowtoup.svg" />
        </button>
      </div>
    </div>
  );
};

export default FooterContainer;
