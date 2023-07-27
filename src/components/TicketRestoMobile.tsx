import { FunctionComponent } from "react";

const TicketRestoMobile: FunctionComponent = () => {
  return (
    <div className="self-stretch rounded-11xl bg-mediumseagreen shadow-[0px_0px_50px_rgba(29,_163,_124,_0.75)] overflow-hidden hidden flex-col p-6 box-border items-center justify-center min-w-[350px] text-left text-xl text-b-w-white font-new-type-sm-sm-14-sm-14-b lg:flex md:items-center md:justify-center md:pl-4 md:pr-4 md:box-border sm:flex sm:items-center sm:justify-center sm:pl-3 sm:pr-3 sm:box-border mq350small:flex">
      <div className="self-stretch flex flex-col py-5 px-6 items-start justify-start gap-[24px] sm:flex-col">
        <b className="relative leading-[28px] md:text-9xl sm:text-xl">
          1 TicketResto?
        </b>
        <div className="self-stretch relative text-sm leading-[22px] whitespace-pre-wrap md:text-base sm:text-sm">
          <p className="m-0">
            Ticket resto vouchers are usually given in paper form or in digital
            format and have a specific monetary value, They are designed to be
            used exclusively for the purpose of purchasing meals and cannot be
            exchanged for cash. The vouchers often bear the name of the employer
            and the employee and may have an expiration date.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TicketRestoMobile;
