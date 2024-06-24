import clsx from "clsx";
import React from "react";

type Props = { selected: boolean };

const Workflows = ({ selected }: Props) => {
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
        d="M5 6a3 3 0 1 1 4 2.83V10a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V8.83a3.001 3.001 0 1 1 2 0V10a3 3 0 0 1-3 3h-1v2.17a3.001 3.001 0 1 1-2 0V13h-1a3 3 0 0 1-3-3V8.83A3.001 3.001 0 0 1 5 6Z"
        clip-rule="evenodd"
      />
    </svg>
  );
};

export default Workflows;
