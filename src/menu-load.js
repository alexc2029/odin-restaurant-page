import { addTextElement } from "./dom-functions.js";
const contentDiv = document.getElementById("content");

function addMeal(name, description) {
	const container = document.createElement("div");
	addTextElement("h3", container, name);
	addTextElement("p", container, description);
	contentDiv.appendChild(container);
}
export function menuLoad() {
	contentDiv.textContent = "";
	addTextElement("h1", contentDiv, "Menu");
	addTextElement("h2", contentDiv, "Breakfast (Served All Day!)");
	addMeal(
		"Classic Stack",
		"A fluffy stack of three buttermilk pancakes, served with whipped butter and maple syrup. Choose to add blueberries or chocolate chips."
	);
	addMeal(
		"The Sunrise Skillet",
		"Two scrambled eggs, crispy bacon, and a generous portion of diced potatoes, all mixed together in a sizzling skillet."
	);
	addTextElement("h2", contentDiv, "Lunch & Dinner");
	addMeal(
		"Diner Cheeseburger",
		"A juicy beef patty topped with melted American cheese, fresh lettuce, tomato, and onion on a toasted bun. Served with a side of crispy fries."
	);
	addMeal(
		"Turkey Club Sandwich",
		" Sliced turkey, bacon, lettuce, and tomato layered between three slices of toasted sourdough bread."
	);
}
