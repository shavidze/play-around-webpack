import nav from "./nav";
import { footer } from "./foo";
import makeButton from "./button";
import { makeColorStyle, red } from "./button-styles";
const btn = makeButton("My First Button");
btn.style = makeColorStyle(red);
document.body.appendChild(btn);
document.body.appendChild(footer);
