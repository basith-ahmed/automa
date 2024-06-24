import clsx from "clsx";
import React from "react";

type Props = { selected: boolean };

function Category({ selected }: Props) {
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
      <path d="M5 3a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5Zm14 18a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4ZM5 11a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H5Zm14 2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4Z" />
    </svg>
  );
}

export default Category;
