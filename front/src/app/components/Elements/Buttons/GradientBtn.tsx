"use client";

import { useRouter } from "next/navigation";
import { MouseEvent, useCallback } from "react";

interface IGradientBtn {
  href?: string;
  onClick?: any;
  round: string;
  padding: string;
  title: string;
}

function GradientBtn({ href, round, padding, title }: IGradientBtn) {
  const router = useRouter();

  const onClickButton = useCallback((e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    if (href) router.push(href);
    else {
      console.log(1);
    }
  }, []);
  return (
    <div
      onClick={onClickButton}
      className={`bg-gradient-to-tr from-orange-300 via-red-500 to-indigo-600  p-[0.2rem] ${round} cursor-pointer`}
    >
      <div className={`bg-white ${padding} ${round} dark:bg-black`}>
        {title}
      </div>
    </div>
  );
}

export default GradientBtn;
