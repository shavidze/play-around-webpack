import { footer } from "./footer";
import makeButton from "./button";
import { makeColorStyle, red } from "./button-styles";

import css from "./footer.css";

const btn = makeButton("My First Button");

btn.style = makeColorStyle(red);
document.body.appendChild(btn);
document.body.appendChild(footer);
