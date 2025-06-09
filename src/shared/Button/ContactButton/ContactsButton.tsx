import React, {FC} from "react";
import Link from "next/link";
import {ContactsButtonProps} from "./ContactsButtonProps";
import {cvaContactsButton} from "./ContactsButtonStyles";

const ContactsButton: FC<ContactsButtonProps> = () => {
    return (
        <Link className={cvaContactsButton()} href='/contacts'>
            Contacts
        </Link>
    );
};

export default ContactsButton;