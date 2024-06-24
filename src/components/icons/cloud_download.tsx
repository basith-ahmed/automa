import clsx from "clsx";
import React from "react";

type Props = { selected: boolean };

const Templates = ({ selected }: Props) => {
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
        d="M4 4a2 2 0 1 0 0 4h16a2 2 0 1 0 0-4H4Zm0 6h16v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8Zm10.707 5.707a1 1 0 0 0-1.414-1.414l-.293.293V12a1 1 0 1 0-2 0v2.586l-.293-.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l2-2Z"
        clip-rule="evenodd"
      />
    </svg>
  );
};

export default Templates;
