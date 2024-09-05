import type { NextPage } from "next";
import { useCallback } from "react";

export type NavigationFooterType = {
  className?: string;
};

const NavigationFooter: NextPage<NavigationFooterType> = ({
  className = "",
}) => {
  const onSocialIconsContainerClick = useCallback(() => {
    window.open("https://ca.linkedin.com/in/williams-plumbing-solution");
  }, []);

  const onButtonsIconClick = useCallback(() => {
    window.open("https://www.facebook.com/williamsplumbingsolution/");
  }, []);

  const onSolutionsClick = useCallback(() => {
    window.open("https://williamssolutionpro.vercel.app/");
  }, []);

  const onButtonsIconClick1 = useCallback(() => {
    window.open("https://www.instagram.com/williamsplumbingsolution/");
  }, []);

  const onButtonsIconClick2 = useCallback(() => {
    window.open("https://www.youtube.com/watch?v=HdwCDhqtFuQ");
  }, []);

  const onPlumbingSolutionsTextClick = useCallback(() => {
    window.open("https://williams-plumbing-solutions.vercel.app/");
  }, []);

  const onSepticTextClick = useCallback(() => {
    window.open("https://williams-septic.vercel.app/");
  }, []);

  const onWaterTreatmentTextClick = useCallback(() => {
    window.open(
      "https://williams-plumbing-solutions.vercel.app/water-treatment"
    );
  }, []);
  const onExcavationTextClick = useCallback(() => {
    window.open(
      "https://williamsexcavation.vercel.app"
    );
  }, []);
  const onLoggingTextClick = useCallback(() => {
    window.open(
      "https://williamslogging.vercel.app/"
    );
  }, []);

  const onAboutUsTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='heroSection']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onContactUsTextClick = useCallback(() => {
    window.open(      "https://clienthub.getjobber.com/client_hubs/c6ab68fa-74c2-4d46-9066-ff2210b88264/public/work_request/new?source=social_media"
);
  }, []);

  const onBlogTextClick = useCallback(() => {
    window.open("https://blog-delta-three-74.vercel.app/");
  }, []);

  return (
    <footer
      className={`self-stretch bg-whitesmoke overflow-hidden flex flex-row items-center justify-between p-8 box-border max-w-full gap-5 text-left text-base text-black font-body-body-2 mq1100:flex-wrap ${className}`}
    >
      <div className="flex flex-col items-center justify-start gap-2 text-5xl">
        <h3 className="m-0 relative text-inherit leading-[150%] font-bold font-[inherit] mq450:text-lgi mq450:leading-[29px]" onClick={onSolutionsClick}>
          Williams Solutions Pro
        </h3>
        <img
          className="w-[70px] h-[70px] relative rounded-69xl object-contain"
          onClick={onSolutionsClick}
          alt=""
          src="/williams20logo3transparent20bgroundpng-1@2x.png"
        />
        <div
          className="flex flex-row items-start justify-start gap-spacing-xs cursor-pointer"
          onClick={onSocialIconsContainerClick}
        >
          <img
            className="h-10 w-10 relative rounded object-cover min-h-[40px] cursor-pointer"
            loading="lazy"
            alt=""
            src="/buttons--icon@2x.png"
            onClick={onButtonsIconClick}
          />
          <img
            className="h-10 w-10 relative rounded object-cover min-h-[40px]"
            alt=""
            src="/buttons--icon-1@2x.png"
          />
          <img
            className="h-10 w-10 relative rounded object-cover min-h-[40px] cursor-pointer"
            alt=""
            src="/buttons--icon-2@2x.png"
            onClick={onButtonsIconClick1}
          />
          <img
            className="h-10 w-10 relative rounded object-cover min-h-[40px] cursor-pointer"
            alt=""
            src="/buttons--icon-3@2x.png"
            onClick={onButtonsIconClick2}
          />
        </div>
      </div>
      <div className="w-[187px] flex flex-col items-start justify-start gap-6">
        <b className="self-stretch relative leading-[150%]">
          Williams Services
        </b>
        <div className="self-stretch flex flex-col items-start justify-center gap-spacing-s text-darkslategray-100">
          <div
            className="relative leading-[150%] text-black cursor-pointer"
            onClick={onPlumbingSolutionsTextClick}
          >
            Plumbing Solutions
          </div>
          <div
            className="relative leading-[150%] font-medium cursor-pointer"
            onClick={onSepticTextClick}
          >
            Septic
          </div>
          <div
            className="relative leading-[150%] font-medium cursor-pointer"
            onClick={onWaterTreatmentTextClick}
          >
            Water Treatment
          </div>
          <div
            className="relative leading-[150%] font-medium cursor-pointer"
            onClick={onExcavationTextClick}
          >
            Excavation / Aggregate
          </div>
          <div
            className="relative leading-[150%] font-medium cursor-pointer"
            onClick={onLoggingTextClick}
          >
            Logging
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-between min-h-[216px] max-w-full mq1100:min-h-[auto]">
        <div className="self-stretch flex flex-col items-start justify-start gap-6 max-w-full">
          <div className="w-[253px] flex flex-row items-start justify-between gap-5">
            <div
              className="relative leading-[150%] inline-block min-w-[71px] cursor-pointer"
              onClick={onAboutUsTextClick}
            >
              About Us
            </div>
            <div
              className="relative leading-[150%] font-medium text-darkslategray-100 inline-block min-w-[86px] cursor-pointer"
              onClick={onContactUsTextClick}
            >
              Contact Us
            </div>
            <div
              className="relative leading-[150%] font-medium text-darkslategray-100 inline-block min-w-[86px] cursor-pointer"
              onClick={onBlogTextClick}
            >
              Blog
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-4 max-w-full text-base-8 text-darkslategray-200">
            <div className="w-[407px] flex flex-row items-end justify-start gap-[33px] max-w-full mq450:gap-4">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/solarphonelinear.svg"
              />
              <div className="flex-1 relative leading-[26px] font-semibold whitespace-pre-wrap inline-block max-w-[calc(100%_-_57px)]">
                Call Us: 705-492-8910
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[20.8px] mq450:flex-wrap">
              <img
                className="h-[25px] w-[38px] relative"
                loading="lazy"
                alt=""
                src="/svg.svg"
              />
              <div className="relative tracking-[-0.01px] leading-[25.6px] font-semibold inline-block min-w-[70.4px]">
                Email Us:
              </div>
              <div className="relative leading-[25.6px] font-semibold whitespace-nowrap">
              info@williamssolutions.pro
              </div>
            </div>
          </div>
        </div>
        <div className="relative leading-[24px] text-dark-blue inline-block max-w-full">
          © Williams Solutions.Pro 2024. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default NavigationFooter;
