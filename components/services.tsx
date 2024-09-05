import type { NextPage } from "next";
import { useCallback } from "react";
import Card from "./card";

export type ServicesType = {
  className?: string;
};

const Services: NextPage<ServicesType> = ({ className = "" }) => {
  const onCard1ContainerClick = useCallback(() => {
    window.open("https://williams-plumbing-solutions.vercel.app/");
  }, []);

  const onCard4ContainerClick = useCallback(() => {
    window.open(
      "https://williams-plumbing-solutions.vercel.app/water-treatment"
    );
  }, []);

  const onCard3ContainerClick = useCallback(() => {
    window.open("https://williams-septic.vercel.app/");
  }, []);

  const onCard2ContainerClick = useCallback(() => {
    window.open("https://williamsexcavation.vercel.app/");
  }, []);

  const onCard5ContainerClick = useCallback(() => {
    window.open("https://williamslogging.vercel.app/");
  }, []);

  return (
    <section
      className={`bg-white overflow-hidden shrink-0 flex flex-col items-center justify-center py-[52px] px-12 box-border gap-[37px] max-w-full text-left text-13xl text-black font-body-body-2 mq750:gap-[18px] mq750:py-[34px] mq750:px-6 mq750:box-border ${className}`}
    >
      <div className="flex flex-row items-center justify-center p-2.5">
        <h1 className="m-0 relative text-inherit leading-[32px] font-bold font-[inherit] mq750:text-7xl mq750:leading-[26px] mq450:text-lgi mq450:leading-[19px]">
          Our Services
        </h1>
      </div>
      <div className="w-[1110px] flex-1 overflow-x-auto flex flex-row items-center flex-wrap justify-center gap-5 max-w-full text-xl py-5">
        <Card
          onPlumbingTextClick={onCard1ContainerClick}
          photo="/photo@2x.png"
          plumbing="Plumbing"
        />
        <Card
          onPlumbingTextClick={onCard4ContainerClick}
          photo="/photo-1@2x.png"
          plumbing="Water Treatment"
        />
        <Card
          onPlumbingTextClick={onCard3ContainerClick}
          photo="/rectangle-4@2x.png"
          plumbing="Septic"
        />
        <Card
          onPlumbingTextClick={onCard2ContainerClick}
          photo="/frame-8@2x.png"
          plumbing={`Excavation & Aggregate`}
        />
        <Card
          onPlumbingTextClick={onCard5ContainerClick}
          photo="/williams-logging.png"
          plumbing={`Logging`}
        />
      </div>
    </section>
  );
};

export default Services;
