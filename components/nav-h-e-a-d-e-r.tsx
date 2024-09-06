import type { NextPage } from "next";
import { useMemo, type CSSProperties, useCallback, useState } from "react";
import { useRouter } from "next/router";

export type Header1Type = {
  className?: string;

  /** Style props */
  navHEADERAlignSelf?: CSSProperties["alignSelf"];
  navHEADERFlex?: CSSProperties["flex"];
};

const Header1: NextPage<Header1Type> = ({
  className = "",
  navHEADERAlignSelf,
  navHEADERFlex,
}) => {
  const tAGHeaderStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: navHEADERAlignSelf,
      flex: navHEADERFlex,
    };
  }, [navHEADERAlignSelf, navHEADERFlex]);

  const router = useRouter();

  const onSolutionClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onPlumbingTextClick = useCallback(() => {
    window.open("https://william0905-plumbing.vercel.app/");
  }, []);

  const onSepticTextClick = useCallback(() => {
    window.open("https://william0905-septic.vercel.app/");
  }, []);

  const onWaterTreatmentTextClick = useCallback(() => {
    window.open(
      "https://william0905-plumbing.vercel.app/water-treatment"
    );
  }, []);

  const onExcavationAggregateClick = useCallback(() => {
    window.open("https://wiliams0905-excavation.vercel.app/");
  }, []);

  const onLoggingClick = useCallback(() => {
    window.open("https://wiliams0905-logging.vercel.app/");
  }, []);

  const onContactButtonClick = useCallback(() => {
    router.push(
      "https://clienthub.getjobber.com/client_hubs/c6ab68fa-74c2-4d46-9066-ff2210b88264/public/work_request/new?source=social_media"
    );
  }, [router]);

  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  let closeTimeout: NodeJS.Timeout;

  const handleMenuClick = () => {
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  // Update the `openMenu` and `closeMenu` functions to handle both the hamburger and dropdown menus
  const openMenu = () => {
    clearTimeout(closeTimeout);
    setIsOpen(true);
  };

  const closeMenu = () => {
    closeTimeout = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  return (
    <header
      className={`self-stretch bg-white overflow-hidden flex flex-col items-start justify-start max-w-full text-left text-xl text-black1 font-small-text ${className}`}
      style={tAGHeaderStyle}
    >
      <div className="self-stretch bg-white box-border flex flex-row items-center pt-[29px] px-3 pb-[27px] max-w-full border-b-[1px] border-solid border-darkslategray-400 lg:flex-wrap">
        <div className="flex-1 flex flex-row items-center justify-start gap-[5.9px] max-w-full">
          <img
            className="h-[50.7px] w-[50.7px] relative object-cover"
            loading="lazy"
            alt=""
            src="/williams20logo3transparent20bgroundpng@2x.png"
            onClick={onSolutionClick}
          />
          <b
            className="relative leading-[32px] mq450:text-base mq450:leading-[26px] cursor-pointer"
            onClick={onSolutionClick}
          >
            Williams Solutions.Pro
          </b>
        </div>

        <nav
          className={`flex-1 flex flex-row items-center justify-center px-5 [row-gap:20px] max-w-full whitespace-nowrap text-left text-base-8 text-gray-400 font-small-text mq450:flex-wrap ${
            isOpen ? "lg:block" : "lg:hidden"
          } lg:block`}
        >
          <div
            className="flex flex-row items-center justify-center py-[7px] px-4 font-bold text-black cursor-pointer"
            onClick={onPlumbingTextClick}
          >
            <a className="relative leading-[26px] text-[inherit] inline-block">
              Plumbing
            </a>
          </div>
          <div className="flex flex-row items-center justify-center py-[7px] px-[15px] box-border font-bold text-black">
            <a
              className="relative leading-[26px] text-[inherit] inline-block min-w-[65px] cursor-pointer"
              onClick={onWaterTreatmentTextClick}
            >
              Water Treatment
            </a>
          </div>
          <div className="flex flex-row items-center justify-center py-[7px] px-[15px] box-border font-bold text-black">
            <a
              className="relative leading-[26px] text-[inherit] inline-block min-w-[65px] cursor-pointer"
              onClick={onSepticTextClick}
            >
              Septic
            </a>
          </div>
          <div className="flex flex-row items-center justify-center py-[7px] px-[15px] box-border font-bold text-black">
            <a
              className="relative leading-[26px] text-[inherit] inline-block min-w-[65px] cursor-pointer"
              onClick={onExcavationAggregateClick}
            >
              Aggregates & Construction
            </a>
          </div>
          <div className="flex flex-row items-center justify-center py-[7px] px-[15px] box-border font-bold text-black">
            <a
              className="relative leading-[26px] text-[inherit] inline-block min-w-[65px] cursor-pointer"
              onClick={onLoggingClick}
            >
              Logging
            </a>
          </div>
          <button
            className="flex-1 cursor-pointer py-2 px-8 ml-10 bg-green shadow-[0px_8px_16px_rgba(55,_99,_244,_0.15)] rounded-13xl flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-mediumslateblue hover:bg-deepskyblue hover:box-border hover:border-[1px] hover:border-solid hover:border-royalblue"
            onClick={onContactButtonClick}
          >
            <a className="relative text-base-8 leading-[25.6px] font-bold font-small-text text-white text-center">
              Contact Us Today
            </a>
          </button>
        </nav>
        <button
          className="hidden lg:block text-black bg-transparent"
          onClick={handleMenuClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              color={isOpen ? "red" : "black"}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header1;
