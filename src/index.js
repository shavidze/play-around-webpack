import { footer } from "./footer";
import makeButton from "./button";
import { makeColorStyle, red } from "./button-styles";
import makeImage from "./image";
import imageUrl from "./ele.jpeg";
import css from "./footer.css";
import Foo from "./foo.ts";
const btn = makeButton("My First Button");
btn.style = makeColorStyle(red);
document.body.appendChild(btn);
const image = makeImage(imageUrl);
document.body.appendChild(footer);
document.body.appendChild(image);

console.log(Foo);
