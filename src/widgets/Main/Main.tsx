import React from "react";
import { cvaTitle, cvaText } from "./MainStyles";

export default function Main() {
  return (
    <div>
      <p className={cvaTitle()}>Ilya K.</p>
      <p className={cvaText()}>Frontend Developer & Web Desinger</p>
    </div>
  );
}
