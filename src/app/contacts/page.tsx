import type {Metadata} from "next";
import React from "react";
import ContactsPage from "@/pages/ContactsPage/ContactsPage";

export const metadata: Metadata = {
    title: "Ilya K. | Contacts"
};

export default function Contacts() {
    return (
        <ContactsPage/>
    )
}