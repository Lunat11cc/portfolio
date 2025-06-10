import {cva} from "class-variance-authority";

export const cvaMainContainer = cva(
    [
        "flex flex-col items-center gap-2"
    ]
)

export const cvaTitle = cva(
    [
        "text-6xl text-white font-title"
    ]
);

export const cvaText = cva(
    [
        "text-3xl text-white font-text first-letter:text-red-300"
    ]
);

export const cvaTextBlock = cva(
    [
        "w-full flex justify-start gap-2 max-w-[700px]",
    ]
);