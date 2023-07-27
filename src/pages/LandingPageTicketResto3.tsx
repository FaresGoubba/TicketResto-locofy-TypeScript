import { FunctionComponent } from "react";
import INTROSEC from "../components/INTROSEC";
import HomeContent from "../components/HomeContent";
import Footer from "../components/Footer";
import FooterMobile from "../components/FooterMobile";

const LandingPageTicketResto3: FunctionComponent = () => {
  return (
    <div className="relative bg-mintcream-100 w-full overflow-hidden flex flex-col items-center justify-center lg:items-center lg:justify-center">
      <INTROSEC />
      <HomeContent />
      <Footer />
      <FooterMobile />
    </div>
  );
};

export default LandingPageTicketResto3;
