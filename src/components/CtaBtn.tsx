import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";

type CtaBtnType = {
  ellipse954?: string;
  angleDown?: string;
  ellipseIcon?: boolean;
  angleDownIcon?: boolean;

  /** Style props */
  property1DefaultPosition?: Property.Position;
  property1DefaultBoxSizing?: Property.BoxSizing;
  property1DefaultCursor?: Property.Cursor;
  property1DefaultBorder?: Property.Border;
  joinNowDisplay?: Property.Display;
  dADisplay?: Property.Display;
};

const CtaBtn: FunctionComponent<CtaBtnType> = ({
  ellipse954,
  angleDown,
  ellipseIcon,
  angleDownIcon,
  property1DefaultPosition,
  property1DefaultBoxSizing,
  property1DefaultCursor,
  property1DefaultBorder,
  joinNowDisplay,
  dADisplay,
}) => {
  const property1Default1Style: CSS.Properties = useMemo(() => {
    return {
      position: property1DefaultPosition,
      boxSizing: property1DefaultBoxSizing,
      cursor: property1DefaultCursor,
      border: property1DefaultBorder,
    };
  }, [
    property1DefaultPosition,
    property1DefaultBoxSizing,
    property1DefaultCursor,
    property1DefaultBorder,
  ]);

  const joinNowStyle: CSS.Properties = useMemo(() => {
    return {
      display: joinNowDisplay,
    };
  }, [joinNowDisplay]);

  const dAStyle: CSS.Properties = useMemo(() => {
    return {
      display: dADisplay,
    };
  }, [dADisplay]);

  return (
    <div
      className="relative rounded-3xs bg-g-primary-g-p shadow-[0px_4px_20px_rgba(191,_14,_128,_0.25)] overflow-hidden flex flex-row py-2.5 px-5 items-center justify-center gap-[21px] text-left text-xl text-b-w-white font-new-type-sm-sm-14-sm-14-b"
      style={property1Default1Style}
    >
      {!ellipseIcon && (
        <img
          className="relative rounded-[50%] w-[54px] h-[54px] object-cover hidden"
          alt=""
          src={ellipse954}
        />
      )}
      <div className="flex flex-col items-start justify-start">
        <div className="flex flex-row items-start justify-start">
          <div className="flex flex-row items-start justify-start">
            <b className="relative" style={joinNowStyle}>
              Join Now!
            </b>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start mt-[-4px] text-sm">
          <div className="relative font-medium" style={dAStyle}>
            0.00 DA
          </div>
        </div>
      </div>
      <img
        className="relative w-[30px] h-[30px]"
        alt=""
        src="/arrowright2.svg"
      />
      {!angleDownIcon && (
        <img
          className="relative w-[30px] h-[30px] hidden"
          alt=""
          src={angleDown}
        />
      )}
    </div>
  );
};

export default CtaBtn;
