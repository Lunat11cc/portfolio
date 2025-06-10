import {cva} from "class-variance-authority";

export const cvaProjectsList = cva(
    [
        "flex flex-col gap-10 p-8 text-white font-button w-[75%]",
    ]
);

export const cvaProjectCard = cva(
    [
        "flex",
        "flex-row",
        "gap-2",
        "p-4",
        "rounded-xl",
        "shadow",
        "hover:cursor-pointer",
        "hover:bg-[#ffffff19]",
        "before:transition duration-300",
        "w-[100%]",
    ]
);

export const cvaProjectImg = cva(
    [
        "w-[40%] h-[40%] rounded-xl"
    ]
);

export const cvaProjectTextBlock = cva(
    [
        "flex flex-col p-4 items-start justify-start gap-4 text-xl"
    ]
);

export const cvaProjectName = cva(
    [
        "font-text text-3xl"
    ]
);

export const cvaProjectDescription = cva(
    [
        "text-lg"
    ]
);

export const cvaProjectStack = cva(
    [
        "w-10 h-10"
    ]
);


