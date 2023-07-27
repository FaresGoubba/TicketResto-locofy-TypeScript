import { FunctionComponent } from "react";

const TicketResto: FunctionComponent = () => {
  return (
    <div className="self-stretch rounded-11xl bg-mediumseagreen shadow-[0px_0px_50px_rgba(29,_163,_124,_0.75)] overflow-hidden flex flex-col p-6 box-border items-start justify-start min-w-[360px] text-left text-17xl text-b-w-white font-new-type-sm-sm-14-sm-14-b lg:hidden md:hidden sm:hidden sm:items-center sm:justify-center sm:min-w-[400px] mq350small:hidden">
      <div className="self-stretch flex flex-row py-5 px-6 items-start justify-start gap-[24px] sm:flex-col">
        <b className="relative leading-[44px] md:text-9xl sm:text-sm">
          1 TicketResto?
        </b>
        <div className="flex-1 relative text-5xl leading-[32px] font-light whitespace-pre-wrap md:text-base sm:text-3xs sm:flex-[unset] sm:self-stretch">
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

export default TicketResto;
