import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";

type BenefitsType = {
  entreprise?: string;
  employees?: string;
  employees1?: string;
  path17?: string;
  forward?: string;
  router1?: string;
  buld1?: string;

  /** Style props */
  property1DefaultPosition?: Property.Position;
  property1DefaultAlignItems?: Property.AlignItems;
  property1DefaultJustifyContent?: Property.JustifyContent;
  property1DefaultAlignSelf?: Property.AlignSelf;
  property1DefaultBorderRadius?: Property.BorderRadius;
  property1DefaultBackgroundColor?: Property.BackgroundColor;
  frameDivAlignSelf?: Property.AlignSelf;
  frameDivPadding?: Property.Padding;
  forEntrepriseBoxSizing?: Property.BoxSizing;
  forEntrepriseAlignItems?: Property.AlignItems;
  forEntrepriseJustifyContent?: Property.JustifyContent;
  forEntrepriseCursor?: Property.Cursor;
  forEntrepriseBorder?: Property.Border;
  forEntrepriseFlex?: Property.Flex;
  entrepriseTextAlign?: Property.TextAlign;
  entrepriseDisplay?: Property.Display;
  entrepriseFlex?: Property.Flex;
  forEntrepriseBoxSizing1?: Property.BoxSizing;
  forEntrepriseAlignItems1?: Property.AlignItems;
  forEntrepriseJustifyContent1?: Property.JustifyContent;
  forEntrepriseCursor1?: Property.Cursor;
  forEntrepriseBorder1?: Property.Border;
  forEntrepriseFlex1?: Property.Flex;
  employeesTextAlign?: Property.TextAlign;
  employeesDisplay?: Property.Display;
  employeesFlex?: Property.Flex;
  forEntrepriseBoxSizing2?: Property.BoxSizing;
  forEntrepriseAlignItems2?: Property.AlignItems;
  forEntrepriseJustifyContent2?: Property.JustifyContent;
  forEntrepriseCursor2?: Property.Cursor;
  forEntrepriseBorder2?: Property.Border;
  forEntrepriseFlex2?: Property.Flex;
  employeesTextAlign1?: Property.TextAlign;
  employeesDisplay1?: Property.Display;
  employeesFlex1?: Property.Flex;
  entreprizeWidth?: Property.Width;
  entreprizeAlignSelf?: Property.AlignSelf;
};

const Benefits: FunctionComponent<BenefitsType> = ({
  entreprise,
  employees,
  employees1,
  path17,
  forward,
  router1,
  buld1,
  property1DefaultPosition,
  property1DefaultAlignItems,
  property1DefaultJustifyContent,
  property1DefaultAlignSelf,
  property1DefaultBorderRadius,
  property1DefaultBackgroundColor,
  frameDivAlignSelf,
  frameDivPadding,
  forEntrepriseBoxSizing,
  forEntrepriseAlignItems,
  forEntrepriseJustifyContent,
  forEntrepriseCursor,
  forEntrepriseBorder,
  forEntrepriseFlex,
  entrepriseTextAlign,
  entrepriseDisplay,
  entrepriseFlex,
  forEntrepriseBoxSizing1,
  forEntrepriseAlignItems1,
  forEntrepriseJustifyContent1,
  forEntrepriseCursor1,
  forEntrepriseBorder1,
  forEntrepriseFlex1,
  employeesTextAlign,
  employeesDisplay,
  employeesFlex,
  forEntrepriseBoxSizing2,
  forEntrepriseAlignItems2,
  forEntrepriseJustifyContent2,
  forEntrepriseCursor2,
  forEntrepriseBorder2,
  forEntrepriseFlex2,
  employeesTextAlign1,
  employeesDisplay1,
  employeesFlex1,
  entreprizeWidth,
  entreprizeAlignSelf,
}) => {
  const property1DefaultStyle: CSS.Properties = useMemo(() => {
    return {
      position: property1DefaultPosition,
      alignItems: property1DefaultAlignItems,
      justifyContent: property1DefaultJustifyContent,
      alignSelf: property1DefaultAlignSelf,
      borderRadius: property1DefaultBorderRadius,
      backgroundColor: property1DefaultBackgroundColor,
    };
  }, [
    property1DefaultPosition,
    property1DefaultAlignItems,
    property1DefaultJustifyContent,
    property1DefaultAlignSelf,
    property1DefaultBorderRadius,
    property1DefaultBackgroundColor,
  ]);

  const frameDivStyle: CSS.Properties = useMemo(() => {
    return {
      alignSelf: frameDivAlignSelf,
      padding: frameDivPadding,
    };
  }, [frameDivAlignSelf, frameDivPadding]);

  const forEntrepriseStyle: CSS.Properties = useMemo(() => {
    return {
      boxSizing: forEntrepriseBoxSizing,
      alignItems: forEntrepriseAlignItems,
      justifyContent: forEntrepriseJustifyContent,
      cursor: forEntrepriseCursor,
      border: forEntrepriseBorder,
      flex: forEntrepriseFlex,
    };
  }, [
    forEntrepriseBoxSizing,
    forEntrepriseAlignItems,
    forEntrepriseJustifyContent,
    forEntrepriseCursor,
    forEntrepriseBorder,
    forEntrepriseFlex,
  ]);

  const entrepriseStyle: CSS.Properties = useMemo(() => {
    return {
      textAlign: entrepriseTextAlign,
      display: entrepriseDisplay,
      flex: entrepriseFlex,
    };
  }, [entrepriseTextAlign, entrepriseDisplay, entrepriseFlex]);

  const forEntreprise1Style: CSS.Properties = useMemo(() => {
    return {
      boxSizing: forEntrepriseBoxSizing1,
      alignItems: forEntrepriseAlignItems1,
      justifyContent: forEntrepriseJustifyContent1,
      cursor: forEntrepriseCursor1,
      border: forEntrepriseBorder1,
      flex: forEntrepriseFlex1,
    };
  }, [
    forEntrepriseBoxSizing1,
    forEntrepriseAlignItems1,
    forEntrepriseJustifyContent1,
    forEntrepriseCursor1,
    forEntrepriseBorder1,
    forEntrepriseFlex1,
  ]);

  const employeesStyle: CSS.Properties = useMemo(() => {
    return {
      textAlign: employeesTextAlign,
      display: employeesDisplay,
      flex: employeesFlex,
    };
  }, [employeesTextAlign, employeesDisplay, employeesFlex]);

  const forEntreprise2Style: CSS.Properties = useMemo(() => {
    return {
      boxSizing: forEntrepriseBoxSizing2,
      alignItems: forEntrepriseAlignItems2,
      justifyContent: forEntrepriseJustifyContent2,
      cursor: forEntrepriseCursor2,
      border: forEntrepriseBorder2,
      flex: forEntrepriseFlex2,
    };
  }, [
    forEntrepriseBoxSizing2,
    forEntrepriseAlignItems2,
    forEntrepriseJustifyContent2,
    forEntrepriseCursor2,
    forEntrepriseBorder2,
    forEntrepriseFlex2,
  ]);

  const employees1Style: CSS.Properties = useMemo(() => {
    return {
      textAlign: employeesTextAlign1,
      display: employeesDisplay1,
      flex: employeesFlex1,
    };
  }, [employeesTextAlign1, employeesDisplay1, employeesFlex1]);

  const entreprizeStyle: CSS.Properties = useMemo(() => {
    return {
      width: entreprizeWidth,
      alignSelf: entreprizeAlignSelf,
    };
  }, [entreprizeWidth, entreprizeAlignSelf]);

  return (
    <div
      className="relative flex flex-col items-start justify-start gap-[36px] text-left text-13xl text-mediumaquamarine font-new-type-sm-sm-14-sm-14-b"
      style={property1DefaultStyle}
    >
      <div
        className="flex flex-row items-start justify-start gap-[36px]"
        style={frameDivStyle}
      >
        <div
          className="rounded-xl bg-mediumseagreen shadow-[0px_4px_20px_#00b586] flex flex-row py-5 px-10 items-start justify-start text-b-w-white"
          style={forEntrepriseStyle}
        >
          <div
            className="relative leading-[44px] font-medium"
            style={entrepriseStyle}
          >
            {entreprise}
          </div>
        </div>
        <div
          className="rounded-xl bg-mintcream-100 flex flex-row py-5 px-10 items-start justify-start"
          style={forEntreprise1Style}
        >
          <div
            className="relative leading-[44px] font-medium"
            style={employeesStyle}
          >
            {employees}
          </div>
        </div>
        <div
          className="rounded-xl bg-mintcream-100 flex flex-row py-5 px-10 items-start justify-start"
          style={forEntreprise2Style}
        >
          <div
            className="relative leading-[44px] font-medium"
            style={employees1Style}
          >
            {employees1}
          </div>
        </div>
      </div>
      <div
        className="w-[1366px] flex flex-col p-2.5 box-border items-start justify-start gap-[24px] text-5xl text-b-w-black"
        style={entreprizeStyle}
      >
        <div className="self-stretch flex flex-row items-start justify-start gap-[24px]">
          <div className="flex-1 rounded-11xl bg-b-w-white flex flex-col p-[50px] items-start justify-start gap-[12px]">
            <div className="relative w-12 h-12">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                <div className="absolute h-[66.67%] w-[12.5%] top-[16.67%] right-[33.33%] bottom-[16.67%] left-[54.17%] rounded-sm bg-mediumseagreen opacity-[0.3] mix-blend-normal" />
                <div className="absolute h-[45.83%] w-[12.5%] top-[37.5%] right-[54.17%] bottom-[16.67%] left-[33.33%] rounded-sm bg-mediumseagreen" />
                <div className="absolute h-[37.5%] w-[12.5%] top-[45.83%] right-[12.5%] bottom-[16.67%] left-[75%] rounded-sm bg-mediumseagreen" />
                <div className="absolute h-[29.17%] w-[12.5%] top-[54.17%] right-[75%] bottom-[16.67%] left-[12.5%] rounded-sm bg-mediumseagreen" />
              </div>
            </div>
            <div className="self-stretch relative leading-[32px] font-light">
              Helps to attract and retain top talent
            </div>
          </div>
          <div className="flex-1 rounded-11xl bg-b-w-white flex flex-col p-[50px] items-start justify-start gap-[12px]">
            <div className="relative w-12 h-12">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                <img
                  className="absolute h-[73.75%] w-6/12 top-[14.58%] right-[25%] bottom-[11.66%] left-[25%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src={path17}
                />
              </div>
            </div>
            <div className="self-stretch relative leading-[32px] font-light">
              Boosts productivity and reduces turnover rates
            </div>
          </div>
          <div className="flex-1 rounded-11xl bg-b-w-white flex flex-col p-[50px] items-start justify-start gap-[12px]">
            <img className="relative w-12 h-12" alt="" src={forward} />
            <div className="self-stretch relative leading-[32px] font-light">
              Enhances the company's image and reputation
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[24px]">
          <div className="self-stretch flex-1 rounded-11xl bg-b-w-white flex flex-col p-[50px] items-start justify-start gap-[12px]">
            <img className="relative w-12 h-12" alt="" src={router1} />
            <div className="self-stretch relative leading-[32px] font-light">
              Improves employee morale and job satisfaction
            </div>
          </div>
          <div className="flex-1 rounded-11xl bg-b-w-white flex flex-col p-[50px] items-start justify-start gap-[12px]">
            <img className="relative w-12 h-12" alt="" src={buld1} />
            <div className="self-stretch relative leading-[32px] font-light">
              Provides a unique employee benefit that sets the company apart
              from competitors
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
