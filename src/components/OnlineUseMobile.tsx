import { FunctionComponent } from "react";

const OnlineUseMobile: FunctionComponent = () => {
  return (
    <div className="self-stretch rounded-11xl bg-mediumseagreen shadow-[0px_0px_50px_rgba(29,_163,_124,_0.75)] overflow-hidden hidden flex-col p-6 box-border items-start justify-start min-w-[360px] text-left text-xl text-b-w-white font-new-type-sm-sm-14-sm-14-b lg:flex lg:items-center lg:justify-center lg:pl-6 lg:pr-6 lg:box-border md:items-center md:justify-center md:pl-4 md:pr-4 md:box-border sm:flex sm:items-center sm:justify-center sm:pl-3 sm:pr-3 sm:box-border">
      <div className="self-stretch flex flex-col py-5 px-6 items-start justify-start gap-[24px] sm:flex-col">
        <b className="relative leading-[28px] md:text-9xl sm:text-xl">
          3 Online use?
        </b>
        <div className="self-stretch relative text-sm leading-[22px] md:text-base sm:text-sm">
          Goubba TicketResto vouchers can be used for online orders at select
          food delivery from FastDelivery app. By using “Loyalty points” This
          allows employees to conveniently order food online and have it
          delivered to their location while utilizing their ticketresto vouchers
          as a form of payment.
        </div>
      </div>
    </div>
  );
};

export default OnlineUseMobile;
