import { cva } from "class-variance-authority";

export const cvaContactsButton = cva([
    "text-center",
    "text-3xl",
    "inline-block",
    "text-white",
    "font-text",
    "px-6",
    "py-[15px]",
    "cursor-pointer",
    "tracking-wider",
    "relative",
    "overflow-hidden",
    "mx-5",
    "group",
    "before:content-['']",
    "before:absolute",
    "before:w-0",
    "before:bg-white",
    "before:left-[45%]",
    "before:h-[2px]",
    "before:bottom-0",
    "before:transition-all",
    "before:opacity-80",
    "hover:before:w-full",
    "hover:before:left-0"
]);
