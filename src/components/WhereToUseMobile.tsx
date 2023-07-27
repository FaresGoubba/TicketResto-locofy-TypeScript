import { FunctionComponent } from "react";

const WhereToUseMobile: FunctionComponent = () => {
  return (
    <div className="self-stretch rounded-11xl bg-mediumseagreen shadow-[0px_0px_50px_rgba(29,_163,_124,_0.75)] overflow-hidden hidden flex-col p-6 box-border items-start justify-start min-w-[360px] text-left text-xl text-b-w-white font-new-type-sm-sm-14-sm-14-b lg:flex lg:items-center lg:justify-center lg:min-w-[350px] md:items-center md:justify-center md:pl-4 md:pr-4 md:box-border sm:flex sm:pl-3 sm:pr-3 sm:box-border">
      <div className="self-stretch flex flex-col p-6 items-start justify-start gap-[24px]">
        <b className="relative leading-[28px] md:text-9xl">2 Where to use?</b>
        <div className="self-stretch relative text-sm leading-[22px] md:text-base">
          Ticket resto vouchers can be used at restaurants, cafés, fast food
          chains, food courts, takeaway/delivery services, bakeries, pastry
          shops, and catering services, providing employees with a diverse range
          of options for redeeming their vouchers.
        </div>
      </div>
    </div>
  );
};

export default WhereToUseMobile;
