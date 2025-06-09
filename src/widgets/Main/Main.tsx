import React from "react";
import {cvaTitle, cvaText, cvaTextBlock, cvaMainContainer} from "./MainStyles";
import ProjectsButton from "@/shared/Button/ProjectsButton/ProjectsButton";

export default function Main() {
    return (
        <div className={cvaMainContainer()}>
            <p className={cvaTitle()}>Ilya Kartashov</p>
            <div className={cvaTextBlock()}>
                <p className={cvaText()}>Frontend Developer &</p>
                <p className={cvaText()}>Web Designer</p>
            </div>
            <ProjectsButton/>
        </div>
    );
};
