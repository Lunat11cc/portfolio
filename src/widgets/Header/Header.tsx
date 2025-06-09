import React from "react";
import {cvaLogo} from "@/app/styles/LogoStyles";
import {cvaHeader} from "./HeaderStyles";
import ContactsButton from "@/shared/Button/ContactButton/ContactsButton";

const Header = () => {
    console.log(cvaHeader());
    return (
        <div className={cvaHeader()}>
            <img className={cvaLogo()} src="/img/logo.svg" alt="logo"/>
            <ContactsButton/>
        </div>
    );
};

export default Header;
