import { FunctionComponent } from "react";
import TicketResto from "./TicketResto";
import TicketRestoMobile from "./TicketRestoMobile";
import TicketRestoImg from "./TicketRestoImg";
import TicketRestoScrollImg from "./TicketRestoScrollImg";
import WhereToUse from "./WhereToUse";
import WhereToUseMobile from "./WhereToUseMobile";
import Photos from "./Photos";
import PhotosMobilscroll from "./PhotosMobilscroll";
import OnlineUse from "./OnlineUse";
import OnlineUseMobile from "./OnlineUseMobile";
import OnlineUseImgs from "./OnlineUseImgs";

const WhatIsTicketResto: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-col py-[69px] px-20 items-center justify-center gap-[69px] text-left text-17xl text-b-w-white font-new-type-sm-sm-14-sm-14-b sm:items-center sm:justify-center sm:pl-3 sm:pr-3 sm:box-border">
      <div className="flex flex-row items-center justify-between text-29xl text-b-w-black">
        <img
          className="relative w-12 h-12 sm:w-6 sm:h-6"
          alt=""
          src="/ticket.svg"
        />
        <b className="relative leading-[56px] md:text-13xl sm:text-xl sm:text-left sm:flex-1">
          What is Ticket Resto
        </b>
      </div>
      <TicketResto />
      <TicketRestoMobile />
      <TicketRestoImg />
      <TicketRestoScrollImg />
      <WhereToUse />
      <WhereToUseMobile />
      <Photos />
      <PhotosMobilscroll />
      <OnlineUse />
      <OnlineUseMobile />
      <OnlineUseImgs />
    </div>
  );
};

export default WhatIsTicketResto;
