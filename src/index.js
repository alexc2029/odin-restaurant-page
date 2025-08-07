import { pageLoad as homePageLoad } from "./main-page-load.js";
import { menuLoad } from "./menu-load.js";
import { aboutLoad } from "./about-load.js";
import "./styles.css";

homePageLoad();
const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");
const aboutButton = document.getElementById("about");

homeButton.addEventListener("click", () => {
	homePageLoad();
});
menuButton.addEventListener("click", () => {
	menuLoad();
});
aboutButton.addEventListener("click", () => {
	aboutLoad();
});
