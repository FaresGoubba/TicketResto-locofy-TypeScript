import { FunctionComponent } from "react";
import Benefits from "./Benefits";
import BenefitsForEntrepriseMobile from "./BenefitsForEntrepriseMobile";
import TrustCompaniesContainer from "./TrustCompaniesContainer";
import CompaniesThatTrustUsMobile from "./CompaniesThatTrustUsMobile";
import FAndQ from "./FAndQ";
import FAndQMobile from "./FAndQMobile";
import QuoteRequestContainer from "./QuoteRequestContainer";
import RequestAQuoteTabMobile from "./RequestAQuoteTabMobile";

const Content: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-col py-[69px] px-0 items-center justify-center gap-[69px] text-left text-29xl text-b-w-black font-new-type-sm-sm-14-sm-14-b">
      <div className="flex flex-row py-0 px-40 items-center justify-start gap-[29px] text-center sm:w-auto sm:[align-self:unset] sm:gap-[40px] sm:items-center sm:justify-center">
        <div className="relative w-12 h-12">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] sm:w-6 sm:h-6">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
            <img
              className="absolute h-[80.93%] w-[80.93%] top-[10.21%] right-[13.58%] bottom-[8.86%] left-[5.49%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/path-99.svg"
            />
          </div>
        </div>
        <b className="relative leading-[56px] md:text-13xl sm:text-base sm:text-left sm:min-h-[60px]">
          Benefits for Entreprise, employees and partners
        </b>
      </div>
      <div className="self-stretch bg-mintcream-200 flex flex-col items-center justify-center gap-[10px] text-center md:hidden">
        <Benefits
          entreprise="For companies"
          employees="For Employees"
          employees1="For Partners"
          path17="/path-17.svg"
          forward="/forward.svg"
          router1="/router12.svg"
          buld1="/buld1.svg"
          property1DefaultPosition="unset"
          property1DefaultAlignItems="center"
          property1DefaultJustifyContent="center"
          property1DefaultAlignSelf="stretch"
          property1DefaultBorderRadius="50px"
          property1DefaultBackgroundColor="#ebfaf5"
          frameDivAlignSelf="stretch"
          frameDivPadding="10px"
          forEntrepriseBoxSizing="border-box"
          forEntrepriseAlignItems="center"
          forEntrepriseJustifyContent="center"
          forEntrepriseCursor="pointer"
          forEntrepriseBorder="none"
          forEntrepriseFlex="1"
          entrepriseTextAlign="center"
          entrepriseDisplay="inline-block"
          entrepriseFlex="1"
          forEntrepriseBoxSizing1="border-box"
          forEntrepriseAlignItems1="center"
          forEntrepriseJustifyContent1="center"
          forEntrepriseCursor1="pointer"
          forEntrepriseBorder1="none"
          forEntrepriseFlex1="1"
          employeesTextAlign="center"
          employeesDisplay="inline-block"
          employeesFlex="1"
          forEntrepriseBoxSizing2="border-box"
          forEntrepriseAlignItems2="center"
          forEntrepriseJustifyContent2="center"
          forEntrepriseCursor2="pointer"
          forEntrepriseBorder2="none"
          forEntrepriseFlex2="1"
          employeesTextAlign1="center"
          employeesDisplay1="inline-block"
          employeesFlex1="1"
          entreprizeWidth="unset"
          entreprizeAlignSelf="stretch"
        />
        <div className="self-stretch bg-mintcream-100 overflow-hidden flex flex-col py-[68px] px-[58px] items-start justify-start">
          <div className="self-stretch flex flex-col items-center justify-start gap-[48px]">
            <div className="flex flex-row items-center justify-start gap-[24px]">
              <img
                className="relative w-12 h-12 sm:w-6 sm:h-6"
                alt=""
                src="/compass.svg"
              />
              <div className="flex flex-row items-center justify-center">
                <b className="relative leading-[56px] md:text-13xl sm:text-xl">
                  Where to use?
                </b>
              </div>
            </div>
            <div className="self-stretch relative rounded-7xl-5 bg-b-w-white h-[732px] overflow-auto shrink-0 text-left text-[13.19px] text-gray-300 font-roboto">
              <div className="absolute h-[121.03%] top-[-10.51%] bottom-[-10.51%] left-[calc(50%_-_1090.97px)] bg-b-w-white overflow-auto flex flex-col items-start justify-start">
                <img
                  className="relative w-[2181.93px] h-[885.91px] object-cover"
                  alt=""
                  src="/image-1757@2x.png"
                />
              </div>
              <div className="absolute right-[12.94px] bottom-[7.75px] w-[378.6px] h-[19.79px]">
                <div className="absolute h-full w-[42.16%] top-[0%] right-[57.84%] bottom-[0%] left-[0%] bg-whitesmoke-200" />
                <div className="absolute top-[20%] left-[1.74%]">
                  Map data @2019 Google
                </div>
                <div className="absolute h-full w-[24.39%] top-[0%] right-[33.1%] bottom-[0%] left-[42.51%] bg-whitesmoke-200" />
                <div className="absolute top-[20%] left-[44.25%]">
                  Terms of Use
                </div>
                <div className="absolute h-full w-[32.75%] top-[0%] right-[0%] bottom-[0%] left-[67.25%] bg-whitesmoke-200" />
                <div className="absolute top-[20%] left-[68.99%]">
                  Report a map error
                </div>
              </div>
              <img
                className="absolute bottom-[21px] left-[33.7px] w-[150.5px] h-[57.88px]"
                alt=""
                src="/controls--google-logo--color.svg"
              />
              <img
                className="absolute top-[18.72px] right-[24.58px] w-[46.8px] h-[130.77px]"
                alt=""
                src="/controls.svg"
              />
              <div className="absolute h-[6.44%] top-[3.86%] bottom-[89.7%] left-[33.55px] rounded-[3.25px] bg-b-w-white shadow-[0px_1.6236677169799805px_4.87px_rgba(0,_0,_0,_0.2)] flex flex-row pt-[12.989347457885742px] px-[12.989378929138184px] pb-[13.097021102905273px] box-border items-center justify-start gap-[12px] text-center text-[17.86px] text-b-w-black">
                <div className="relative font-medium">Map</div>
                <div className="relative box-border w-[1.62px] h-[48.71px] border-r-[1.6px] border-solid border-whitesmoke-100" />
                <div className="relative text-dimgray">Satellite</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BenefitsForEntrepriseMobile />
      <TrustCompaniesContainer />
      <CompaniesThatTrustUsMobile />
      <FAndQ />
      <FAndQMobile />
      <QuoteRequestContainer />
      <RequestAQuoteTabMobile />
    </div>
  );
};

export default Content;
