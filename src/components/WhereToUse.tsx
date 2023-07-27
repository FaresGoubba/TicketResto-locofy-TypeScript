import { FunctionComponent } from "react";

const WhereToUse: FunctionComponent = () => {
  return (
    <div className="self-stretch rounded-11xl bg-mediumseagreen shadow-[0px_0px_50px_rgba(29,_163,_124,_0.75)] overflow-hidden flex flex-col p-6 items-start justify-start text-left text-17xl text-b-w-white font-new-type-sm-sm-14-sm-14-b lg:hidden md:hidden md:items-start md:justify-center sm:hidden">
      <div className="self-stretch flex flex-row p-6 items-start justify-start gap-[24px]">
        <b className="relative leading-[42.5px] md:text-9xl sm:text-xl">
          2 Where to use?
        </b>
        <div className="flex-1 relative text-5xl leading-[32px] font-light md:text-base">
          Ticket resto vouchers can be used at restaurants, cafés, fast food
          chains, food courts, takeaway/delivery services, bakeries, pastry
          shops, and catering services, providing employees with a diverse range
          of options for redeeming their vouchers.
        </div>
      </div>
    </div>
  );
};

export default WhereToUse;
