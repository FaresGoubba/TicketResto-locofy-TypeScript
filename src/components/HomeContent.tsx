import { FunctionComponent } from "react";
import WhatIsTicketResto from "./WhatIsTicketResto";
import OnlineUseImgMobScroll from "./OnlineUseImgMobScroll";
import Content from "./Content";

const HomeContent: FunctionComponent = () => {
  return (
    <div className="self-stretch overflow-hidden flex flex-col items-center justify-center text-left text-17xl text-b-w-white font-new-type-sm-sm-14-sm-14-b">
      <WhatIsTicketResto />
      <OnlineUseImgMobScroll />
      <Content />
    </div>
  );
};

export default HomeContent;
