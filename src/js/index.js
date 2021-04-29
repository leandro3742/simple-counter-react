//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";

let counter = 0;
let minutos = 0;
let horas = 0;
setInterval(() => {
	let segundos = Math.floor(counter / 1);
	if (segundos === 59) {
		segundos = 0;
		counter = 0;
		minutos++;
	}
	if (minutos === 59) {
		horas++;
	}
	ReactDOM.render(
		<Home primero={segundos} segundo={minutos} tercero={horas} />,
		document.querySelector("#app")
	);
	counter++;
}, 1000);
