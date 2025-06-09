import React, {FC} from "react";
import Link from "next/link";
import {ProjectsButtonProps} from "./ProjectsButtonProps";
import {cvaProjectsButton} from "@/shared/Button/ProjectsButton/ProjectsButtonStyles";

const ProjectsButton: FC<ProjectsButtonProps> = () => {
    return (
        <Link className={cvaProjectsButton()} href='/projects'>
            My Projects
        </Link>
    );
};

export default ProjectsButton;
