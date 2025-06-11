'use client';

import React from 'react'
import ProjectsList from "@/entities/ProjectsList/ProjectsList";
import {cvaProjectsPage, cvaProjectsPageTitle} from "@/pages/ProjectsPage/ProjectsPageStyles";
import Header from "@/widgets/Header/Header";

export default function ProjectsPage() {
    return (
        <>
            <Header />
            <div className={cvaProjectsPage()}>
                <p className={cvaProjectsPageTitle()}>My Projects</p>
                <ProjectsList/>
            </div>
        </>
    );
};
