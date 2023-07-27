import { FunctionComponent } from "react";

const TicketRestoScrollImg: FunctionComponent = () => {
  return (
    <div className="self-stretch relative h-[691px] overflow-x-auto shrink-0 hidden md:flex">
      <div className="absolute top-[0px] left-[0px] w-[444px] flex flex-row py-0 px-20 box-border items-center justify-start gap-[70px] md:pl-3 md:pr-3 md:box-border">
        <img
          className="relative w-[294px] h-[685px] object-cover"
          alt=""
          src="/image-17641@2x.png"
        />
        <img
          className="relative w-[550px] h-[398.28px] object-cover"
          alt=""
          src="/goubba-fast-printed-vouchers-concept-11@2x.png"
        />
      </div>
    </div>
  );
};

export default TicketRestoScrollImg;
