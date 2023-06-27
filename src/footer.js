import { red, blue } from "./button-styles";
const top = document.createElement("div");
const bottom = document.createElement("div");
top.innerText = "Top of Footer";
top.style = red;
bottom.innerText = "Bottom of Footer";
bottom.style = blue;
const footer = document.createElement("footer");

footer.appendChild(top);
footer.appendChild(bottom);

export { top, bottom, footer };
