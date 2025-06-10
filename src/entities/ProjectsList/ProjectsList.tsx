'use client';

import React, {useState} from "react";
import {ProjectsListData} from "@/entities/ProjectsList/ProjectsListData";
import {
    cvaProjectCard,
    cvaProjectsList,
    cvaProjectImg,
    cvaProjectTextBlock,
    cvaProjectName,
    cvaProjectStack,
    cvaProjectDescription
} from "@/entities/ProjectsList/ProjectsListStyles";
import Link from "next/link";

export default function ProjectsList() {
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    return (
        <div className={cvaProjectsList()}>
            {ProjectsListData.map((project) => {
                const isPressed = hoveredId !== null && hoveredId !== project.id;
                const isActive = hoveredId === project.id;

                return (
                    <Link
                        key={project.id}
                        href={project.link}
                        target="_blank"
                        className={`${cvaProjectCard()} ${isPressed ? "opacity-50" : "opacity-100"}`}
                        onMouseEnter={() => setHoveredId(project.id)}
                        onMouseLeave={() => setHoveredId(null)}
                    >
                        <img
                            className={cvaProjectImg()}
                            src={project.img}
                            alt="project"
                        />
                        <div className={cvaProjectTextBlock()}>
                            <div className={`${cvaProjectName()} ${isActive ? "text-red-300" : ""}`}>
                                {project.name}
                            </div>
                            <div className={cvaProjectDescription()}>
                                {project.description}
                            </div>
                            <img
                                className={cvaProjectStack()}
                                src={project.stack}
                                alt="stack"
                            />
                        </div>
                    </Link>
                )

            })}
        </div>
    );
};