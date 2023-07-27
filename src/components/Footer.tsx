import { FunctionComponent } from "react";
import FooterContainer from "./FooterContainer";
import GoubbaContainer from "./GoubbaContainer";

const Footer: FunctionComponent = () => {
  return (
    <div className="self-stretch overflow-hidden flex flex-col items-start justify-start text-left text-sm text-b-w-bw-15 font-new-type-sm-sm-14-sm-14-b md:hidden">
      <div className="self-stretch bg-b-w-black flex flex-col py-5 px-20 items-start justify-start gap-[10px]">
        <FooterContainer />
        <GoubbaContainer />
      </div>
      <div className="self-stretch bg-b-w-white h-[65px] flex flex-row py-0 px-20 box-border items-center justify-between text-b-w-black">
        <div className="relative leading-[22px]">
          <b>{`© `}</b>
          <span>Goubba Solutions all right reserved 2023</span>
        </div>
        <div className="w-[398px] flex flex-row items-center justify-between">
          <b className="relative leading-[22px]">Follow us:</b>
          <div className="w-[295px] flex flex-row items-center justify-between">
            <img
              className="relative w-[25px] h-[25px] overflow-hidden shrink-0"
              alt=""
              src="/facebook.svg"
            />
            <img
              className="relative w-[25px] h-[25px] overflow-hidden shrink-0"
              alt=""
              src="/twitter.svg"
            />
            <img
              className="relative w-[25px] h-[25px] overflow-hidden shrink-0"
              alt=""
              src="/instagram.svg"
            />
            <img
              className="relative w-[25px] h-[25px] overflow-hidden shrink-0"
              alt=""
              src="/linkedin.svg"
            />
            <img
              className="relative w-[25px] h-[25px] overflow-hidden shrink-0"
              alt=""
              src="/youtube.svg"
            />
            <img
              className="relative w-[25px] h-[25px] overflow-hidden shrink-0"
              alt=""
              src="/discord.svg"
            />
            <img
              className="relative w-[25px] h-[25px] overflow-hidden shrink-0"
              alt=""
              src="/tiktok.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
