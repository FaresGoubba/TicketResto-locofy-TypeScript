import { FunctionComponent, memo } from "react";

const Intro: FunctionComponent = memo(() => {
  return (
    <div className="self-stretch rounded-t-none rounded-b-31xl h-[947px] overflow-hidden shrink-0 flex flex-row py-[30px] px-20 box-border items-center justify-center gap-[96px] bg-[url(/public/intro@3x.png)] bg-cover bg-no-repeat bg-[top] text-left text-17xl text-mediumseagreen font-new-type-sm-sm-14-sm-14-b md:flex-col sm:flex">
      <div className="flex-1 flex flex-col items-start justify-center gap-[35px] max-w-[600px] md:items-center md:justify-center md:flex-[unset] md:self-stretch">
        <b className="self-stretch relative leading-[44px] md:text-5xl md:text-center sm:text-xl">
          +1,500 PARTNER RESTAURANT
        </b>
        <div className="self-stretch relative text-45xl leading-[72px] text-b-w-black lg:text-26xl md:text-5xl md:text-center sm:text-xl">
          <b>{`TicketResto `}</b>
          <span className="font-light">
            Pour le benefis de vos collaborateurs
          </span>
        </div>
        <div className="flex-1 rounded-8xs w-[309px] flex flex-row items-start justify-center text-center text-xl text-b-w-white lg:w-[181px] md:items-center md:justify-center md:min-w-[309px]">
          <div className="flex-1 rounded-8xs bg-g-primary-g-p flex flex-row py-3 px-6 items-center justify-between">
            <img className="relative w-6 h-6 hidden" alt="" src="/heart4.svg" />
            <div className="flex-1 relative leading-[28px] font-medium">
              Take me to the forme
            </div>
            <img className="relative w-6 h-6 hidden" alt="" src="/heart4.svg" />
          </div>
        </div>
      </div>
      <img
        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full md:flex-[unset] md:self-stretch"
        alt=""
        src="/svg.svg"
      />
    </div>
  );
});

export default Intro;
