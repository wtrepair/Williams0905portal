import type { NextPage } from "next";

export type HeroSectionType = {
  className?: string;
};

const HeroSection: NextPage<HeroSectionType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-steelblue-100 overflow-hidden flex flex-row items-center justify-between py-[100px] px-[146px] box-border max-w-full gap-5 text-left text-13xl text-white font-body-body-2 mq750:py-[65px] mq750:px-9 mq750:box-border mq1275:flex-wrap mq1275:pl-[73px] mq1275:pr-[73px] mq1275:box-border ${className}`}
      data-scroll-to="heroSection"
    >
      <div className="w-[514px] flex flex-col items-start justify-start gap-3 min-w-[514px] max-w-full mq1100:min-w-full mq1275:flex-1">
        <h1 className="m-0 self-stretch relative text-inherit leading-[40px] font-bold font-[inherit] mq750:text-7xl mq750:leading-[32px] mq450:text-lgi mq450:leading-[24px]">
          Your Trusted Partner in Premium Waterworks, Excavation, and Logging
          Services.
        </h1>
        <div className="self-stretch relative text-base-8 leading-[26px] text-justify">{`At Williams Solutions, we take pride in serving from Kirkland Lake to Temiskaming Shores we offer top-tier waterworks, excavation, aggregate, and logging services. Our commitment to quality and reliability ensures that every project we undertake is executed with precision and care, providing you with solutions that stand the test of time.`}</div>
      </div>
      <div className=" max-w-[448px] bg-white overflow-hidden shrink-0 flex flex-row items-start justify-start flex-wrap content-start min-w-[448px] min-h-[328px] mq1275:flex-1">
        <img
          className="h-[164px] w-56 overflow-hidden shrink-0 object-cover"
          loading="lazy"
          alt=""
          src="/frame-6@2x.png"
        />
        <img
          className="h-[164px] w-56 overflow-hidden shrink-0 object-cover"
          loading="lazy"
          alt=""
          src="/frame-7@2x.png"
        />
        <img
          className="h-[164px] w-56 overflow-hidden shrink-0 object-cover"
          loading="lazy"
          alt=""
          src="/rectangle-4@2x.png"
        />
        <img
          className="h-[164px] w-56 overflow-hidden shrink-0 object-cover"
          loading="lazy"
          alt=""
          src="/frame-8@2x.png"
        />
      </div>
    </section>
  );
};

export default HeroSection;
