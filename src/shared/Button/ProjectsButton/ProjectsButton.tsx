import React, {FC} from "react";
import Link from "next/link";
import { ProjectsButtonProps } from "./ProjectsButtonProps";

const ProjectsButton: FC<ProjectsButtonProps> = () => {
    return (
        <Link className='' href=''>
            Projects
        </Link>
    );
};

export default ProjectsButton;
