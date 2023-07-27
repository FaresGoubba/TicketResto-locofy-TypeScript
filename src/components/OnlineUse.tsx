import { FunctionComponent } from "react";

const OnlineUse: FunctionComponent = () => {
  return (
    <div className="self-stretch rounded-11xl bg-mediumseagreen shadow-[0px_0px_50px_rgba(29,_163,_124,_0.75)] overflow-hidden flex flex-col p-6 items-start justify-start text-left text-17xl text-b-w-white font-new-type-sm-sm-14-sm-14-b lg:hidden sm:hidden">
      <div className="self-stretch flex flex-row p-6 items-start justify-start gap-[24px]">
        <b className="relative leading-[42.5px] md:text-9xl">
          <p className="m-0">3 Online use?</p>
        </b>
        <div className="flex-1 relative text-5xl leading-[32px] font-light md:text-base">
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

export default OnlineUse;
