import { addTextElement } from "./dom-functions.js";
export function aboutLoad() {
	const contentDiv = document.getElementById("content");
	contentDiv.textContent = "";
	addTextElement("h1", contentDiv, "Our Story");
	addTextElement(
		"p",
		contentDiv,
		"Welcome to The Golden Spoon Diner, a place where the past meets the present. Our story began decades ago with a simple dream: to create a cozy spot where everyone in the community could enjoy a great meal and a warm welcome. We started with a handful of classic recipes, a love for good food, and a commitment to making every guest feel like family."
	);
	addTextElement(
		"p",
		contentDiv,
		"Over the years, while our menu has evolved and our family has grown, our core values have remained the same. We still believe in using fresh, quality ingredients, preparing every dish with care, and providing service with a smile. The booths may have been reupholstered and the jukebox updated, but the heart and soul of The Golden Spoon Diner are just as you remember them."
	);
	addTextElement(
		"p",
		contentDiv,
		"We're more than just a diner; we're a place for shared memories—first dates, family celebrations, and countless morning coffees. Thank you for being a part of our story. We can't wait to see you soon."
	);
}
