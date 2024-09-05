import type { NextPage } from "next";
import { useMemo, type CSSProperties, useCallback } from "react";

export type CardType = {
  className?: string;
  photo?: string;
  plumbing?: string;

  /** Style props */
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];

  /** Action props */
  onPlumbingTextClick?: () => void;
};

const Card: NextPage<CardType> = ({
  className = "",
  onPlumbingTextClick,
  photo,
  plumbing,
  propDisplay,
  propMinWidth,
}) => {
  const plumbingStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  const onCard1ContainerClick = useCallback(() => {
    window.open("https://williamsplumbingsolutions.vercel.app/");
  }, []);

  return (
    <div
      className={`self-stretch w-[300px] shadow-[4px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-xl bg-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[30px] box-border gap-[18px] cursor-pointer text-left text-xl text-black font-body-body-2 ${className}`}
      onClick={onPlumbingTextClick}
    >
      <img
        className="self-stretch flex-1 max-w-full overflow-hidden max-h-full object-cover"
        loading="lazy"
        alt=""
        src={photo}
      />
      <div className="self-stretch flex flex-row items-center justify-between py-0 px-[30px] gap-5">
        <div
          className="relative leading-[32px] inline-block min-w-[89px] mq450:text-base mq450:leading-[26px]"
          style={plumbingStyle}
        >
          {plumbing}
        </div>
        <img
          className="h-6 w-6 relative"
          loading="lazy"
          alt=""
          src="/arrow-forward.svg"
        />
      </div>
    </div>
  );
};

export default Card;
