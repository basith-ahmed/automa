import clsx from "clsx";
import React from "react";

type Props = { selected: boolean };

const Home = ({ selected }: Props) => {
  return (
    <svg
      className={clsx(
        "dark:group-hover:fill-[#4044a9] transition-all dark:fill-[#353346] fill-[#BABABB] group-hover:fill-[#4044a9]",
        { "dark:!fill-[#c7d8ff] fill-[#4044a9] ": selected }
      )}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        fill-rule="evenodd"
        d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z"
        clip-rule="evenodd"
      />
    </svg>
  );
};

export default Home;
