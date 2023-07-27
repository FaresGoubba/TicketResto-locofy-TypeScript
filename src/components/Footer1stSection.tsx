import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";

type Footer1stSectionType = {
  b2BSolutions?: string;
  goubbaPartners?: string;
  arrowRight?: string;
  goubbaPartners1?: string;
  arrowRight1?: string;
  goubbaPartners2?: string;
  arrowRight2?: string;
  goubbaPartners3?: string;
  arrowRight3?: string;
  arrowRight4?: string;
  qRCode?: string;
  showTitle?: boolean;
  arrowRightIcon?: boolean;
  badge?: boolean;
  titleVisible?: boolean;
  arrowRightIcon1?: boolean;
  badge1?: boolean;
  titleVisible1?: boolean;
  arrowRightIcon2?: boolean;
  badge2?: boolean;
  titleVisible2?: boolean;
  showGoubbaPartners?: boolean;
  arrowRightIcon3?: boolean;
  badge3?: boolean;
  titleVisible3?: boolean;
  arrowRightIcon4?: boolean;
  badge4?: boolean;
  qRCodeIcon?: boolean;
  showGoubbaPartners1?: boolean;
  arrowRightIcon5?: boolean;
  badge5?: boolean;
  showSOON?: boolean;

  /** Style props */
  footer1stSectionPosition?: Property.Position;
  footer1stSectionWidth?: Property.Width;
  footer1stSectionAlignItems?: Property.AlignItems;
  footer1stSectionJustifyContent?: Property.JustifyContent;
  footer1stSectionGap?: Property.Gap;
  footer1stSectionAlignSelf?: Property.AlignSelf;
  footer1stSectionFlex?: Property.Flex;
  footer1stSectionPadding?: Property.Padding;
  footer1stSectionBoxSizing?: Property.BoxSizing;
  footer1stSectionHeight?: Property.Height;
};

const Footer1stSection: FunctionComponent<Footer1stSectionType> = ({
  b2BSolutions,
  goubbaPartners,
  arrowRight,
  goubbaPartners1,
  arrowRight1,
  goubbaPartners2,
  arrowRight2,
  goubbaPartners3,
  arrowRight3,
  arrowRight4,
  qRCode,
  showTitle,
  arrowRightIcon,
  badge,
  titleVisible,
  arrowRightIcon1,
  badge1,
  titleVisible1,
  arrowRightIcon2,
  badge2,
  titleVisible2,
  showGoubbaPartners,
  arrowRightIcon3,
  badge3,
  titleVisible3,
  arrowRightIcon4,
  badge4,
  qRCodeIcon,
  footer1stSectionPosition,
  footer1stSectionWidth,
  footer1stSectionAlignItems,
  footer1stSectionJustifyContent,
  footer1stSectionGap,
  footer1stSectionAlignSelf,
  footer1stSectionFlex,
  footer1stSectionPadding,
  footer1stSectionBoxSizing,
  footer1stSectionHeight,
  showGoubbaPartners1,
  arrowRightIcon5,
  badge5,
  showSOON,
}) => {
  const footer1stSectionStyle: CSS.Properties = useMemo(() => {
    return {
      position: footer1stSectionPosition,
      width: footer1stSectionWidth,
      alignItems: footer1stSectionAlignItems,
      justifyContent: footer1stSectionJustifyContent,
      gap: footer1stSectionGap,
      alignSelf: footer1stSectionAlignSelf,
      flex: footer1stSectionFlex,
      padding: footer1stSectionPadding,
      boxSizing: footer1stSectionBoxSizing,
      height: footer1stSectionHeight,
    };
  }, [
    footer1stSectionPosition,
    footer1stSectionWidth,
    footer1stSectionAlignItems,
    footer1stSectionJustifyContent,
    footer1stSectionGap,
    footer1stSectionAlignSelf,
    footer1stSectionFlex,
    footer1stSectionPadding,
    footer1stSectionBoxSizing,
    footer1stSectionHeight,
  ]);

  return (
    <div
      className="relative bg-b-w-black w-[250px] flex flex-col items-start justify-center gap-[10px] text-left text-sm text-b-w-bw-15 font-new-type-sm-sm-14-sm-14-b"
      style={footer1stSectionStyle}
    >
      <div className="flex flex-row items-start justify-start text-base text-b-w-bw-1">
        <b className="relative leading-[24px]">{b2BSolutions}</b>
      </div>
      {showTitle && (
        <div className="self-stretch rounded-8xs flex flex-row items-center justify-start gap-[16px]">
          <div className="flex-1 relative leading-[22px]">{goubbaPartners}</div>
          {!arrowRightIcon && (
            <img
              className="relative w-[30px] h-[30px] hidden"
              alt=""
              src={arrowRight}
            />
          )}
          {!badge && (
            <div className="rounded-8xs bg-g-secondary-g-s hidden flex-row py-[5px] px-2.5 items-start justify-start text-center text-xs text-b-w-white">
              <div className="relative leading-[20px] font-medium">SOON</div>
            </div>
          )}
        </div>
      )}
      {titleVisible && (
        <div className="self-stretch rounded-8xs flex flex-row items-center justify-start gap-[16px]">
          <div className="flex-1 relative leading-[22px]">
            {goubbaPartners1}
          </div>
          {!arrowRightIcon1 && (
            <img
              className="relative w-[30px] h-[30px] hidden"
              alt=""
              src={arrowRight1}
            />
          )}
          {!badge1 && (
            <div className="rounded-8xs bg-g-secondary-g-s hidden flex-row py-[5px] px-2.5 items-start justify-start text-center text-xs text-b-w-white">
              <div className="relative leading-[20px] font-medium">SOON</div>
            </div>
          )}
        </div>
      )}
      {titleVisible1 && (
        <div className="self-stretch rounded-8xs flex flex-row items-center justify-start gap-[16px]">
          <div className="flex-1 relative leading-[22px]">
            {goubbaPartners2}
          </div>
          {!arrowRightIcon2 && (
            <img
              className="relative w-[30px] h-[30px] hidden"
              alt=""
              src={arrowRight2}
            />
          )}
          {!badge2 && (
            <div className="rounded-8xs bg-g-secondary-g-s hidden flex-row py-[5px] px-2.5 items-start justify-start text-center text-xs text-b-w-white">
              <div className="relative leading-[20px] font-medium">SOON</div>
            </div>
          )}
        </div>
      )}
      {titleVisible2 && (
        <div className="self-stretch rounded-8xs flex flex-row items-center justify-start gap-[16px]">
          {showGoubbaPartners && (
            <div className="flex-1 relative leading-[22px]">
              {goubbaPartners3}
            </div>
          )}
          {!arrowRightIcon3 && (
            <img
              className="relative w-[30px] h-[30px] hidden"
              alt=""
              src={arrowRight3}
            />
          )}
          {!badge3 && (
            <div className="rounded-8xs bg-g-secondary-g-s hidden flex-row py-[5px] px-2.5 items-start justify-start text-center text-xs text-b-w-white">
              <div className="relative leading-[20px] font-medium">SOON</div>
            </div>
          )}
        </div>
      )}
      {titleVisible3 && (
        <div className="self-stretch rounded-8xs flex flex-row items-center justify-start gap-[16px]">
          <div className="flex-1 relative leading-[22px]">{`Goubba Partners `}</div>
          {!arrowRightIcon4 && (
            <img
              className="relative w-[30px] h-[30px] hidden"
              alt=""
              src={arrowRight4}
            />
          )}
          {!badge4 && (
            <div className="rounded-8xs bg-g-secondary-g-s hidden flex-row py-[5px] px-2.5 items-start justify-start text-center text-xs text-b-w-white">
              <div className="relative leading-[20px] font-medium">SOON</div>
            </div>
          )}
        </div>
      )}
      {!qRCodeIcon && (
        <img
          className="relative w-[100px] h-[100px] overflow-hidden shrink-0 hidden"
          alt=""
          src={qRCode}
        />
      )}
    </div>
  );
};

export default Footer1stSection;
