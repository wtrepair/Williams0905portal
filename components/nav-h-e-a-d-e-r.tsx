import type { NextPage } from "next";
import { useCallback } from "react";

export type NavHEADERType = {
  className?: string;
};

const NavHEADER: NextPage<NavHEADERType> = ({ className = "" }) => {
  const onPlumbingTextClick = useCallback(() => {
    window.open("https://williams-plumbing-solutions.vercel.app/");
  }, []);

  const onSepticTextClick = useCallback(() => {
    window.open("https://williams-septic.vercel.app/");
  }, []);

  const onWaterTreatmentTextClick = useCallback(() => {
    window.open(
      "https://https://williams-plumbing-solutions.vercel.app/water-treatment"
    );
  }, []);

  const onExcavationAggregateClick = useCallback(() => {
    window.open("https://williamsexcavation.vercel.app/");
  }, []);

  const onLoggingClick = useCallback(() => {
    window.open("https://williamslogging.vercel.app/");
  }, []);

  const onContactButtonClick = useCallback(() => {
    window.open(      "https://clienthub.getjobber.com/client_hubs/c6ab68fa-74c2-4d46-9066-ff2210b88264/public/work_request/new?source=social_media"
);
  }, []);

  return (
    <header
      className={`self-stretch border-darkslategray-300 border-b-[1px] border-solid box-border flex flex-row items-center justify-between pt-[29px] px-[42px] pb-[27px] top-[0] z-[99] sticky gap-5 max-w-full text-left text-xl text-black font-body-body-2 mq1275:pl-[21px] mq1275:pr-[21px] mq1275:box-border ${className}`}
    >
      <div className="flex flex-row items-center justify-center gap-2.5">
        <img
          className="h-[50.7px] w-[50.7px] relative object-cover"
          loading="lazy"
          alt=""
          src="/williams20logo3transparent20bgroundpng@2x.png"
        />
        <b className="relative leading-[32px] whitespace-nowrap">
          Williams Solutions.Pro
        </b>
      </div>
      <div className="flex flex-row items-center justify-start py-[7px] px-4 box-border gap-[31px] max-w-full text-base-8 text-gray mq750:gap-[15px] mq1100:hidden">
        <a
          className="[text-decoration:none] relative leading-[26px] text-[inherit] inline-block min-w-[70px] cursor-pointer"
          onClick={onPlumbingTextClick}
        >
          Plumbing
        </a>
        <a
          className="[text-decoration:none] relative leading-[26px] text-[inherit] inline-block min-w-[48px] cursor-pointer"
          onClick={onSepticTextClick}
        >
          Septic
        </a>
        <a
          className="[text-decoration:none] relative leading-[26px] text-[inherit] inline-block min-w-[126px] whitespace-nowrap cursor-pointer"
          onClick={onWaterTreatmentTextClick}
        >
          Water Treatment
        </a>
        <a
          className="[text-decoration:none] flex-1 relative leading-[26px] text-[inherit] whitespace-nowrap cursor-pointer"
          onClick={onExcavationAggregateClick}
        >{`Excavation & Aggregate`}</a>
        <a
          className="[text-decoration:none] flex-1 relative leading-[26px] text-[inherit] whitespace-nowrap cursor-pointer"
          onClick={onLoggingClick}
        >Logging</a>
        <button
          className="cursor-pointer border-mediumslateblue border-[1px] border-solid py-2 px-[15px] bg-steelblue-200 flex-[0.8114] shadow-[0px_8px_16px_rgba(55,_99,_244,_0.15)] rounded-13xl flex flex-row items-center justify-center whitespace-nowrap hover:bg-deepskyblue hover:border-royalblue hover:border-[1px] hover:border-solid hover:box-border"
          onClick={onContactButtonClick}
        >
          <a className="[text-decoration:none] flex-1 relative text-base-8 leading-[25.6px] font-bold font-body-body-2 text-white text-center">
            Contact Us Today
          </a>
        </button>
      </div>
    </header>
  );
};

export default NavHEADER;
