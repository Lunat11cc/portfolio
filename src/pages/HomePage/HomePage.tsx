import React from "react";
import Header from "@/widgets/Header/Header";
import {cvaHomePage} from "./HomePageStyles";
import Main from "@/widgets/Main/Main";

export default function HomePage() {
    return (
        <div className={cvaHomePage()}>
            <Header/>
            <Main/>
        </div>
    );
};
