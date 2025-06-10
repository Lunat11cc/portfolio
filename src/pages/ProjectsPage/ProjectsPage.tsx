'use client';

import React from 'react'
import ProjectsList from "@/entities/ProjectsList/ProjectsList";
import {cvaProjectPage, cvaProjectsPageTitle} from "@/pages/ProjectsPage/ProjectsPageStyles";

export default function ProjectsPage() {
    return (
        <div className={cvaProjectPage()}>
            <div className={cvaProjectsPageTitle()}>My Projects</div>
            <ProjectsList/>
        </div>

    );
};
