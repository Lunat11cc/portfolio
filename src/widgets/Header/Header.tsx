import React from "react";
import {cvaHeader} from "./HeaderStyles";
import ContactsButton from "@/shared/Button/ContactButton/ContactsButton";
import Logo from "@/shared/Logo/Logo";

const Header = () => {
    console.log(cvaHeader());
    return (
        <div className={cvaHeader()}>
            <Logo />
            <ContactsButton/>
        </div>
    );
};

export default Header;
