import type {Metadata} from "next";
import React from "react";
import ProjectsPage from "@/pages/ProjectsPage/ProjectsPage";

export const metadata: Metadata = {
    title: "Ilya K. | Projects"
};

export default function Projects() {
    return (
        <ProjectsPage/>
    );
};