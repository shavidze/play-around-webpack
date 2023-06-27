import nav from "./nav";
import { top, bottom } from "./foo";
import makeButton from "./button";
import { makeColorStyle } from "./button-styles";
const btn = makeButton("My First Button");
btn.style = makeColorStyle("blue");
document.body.appendChild(btn);
