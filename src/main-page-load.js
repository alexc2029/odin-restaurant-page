import Image from "./restaurant.jpg";
import { addTextElement } from "./dom-functions.js";
export function pageLoad() {
	const contentDiv = document.getElementById("content");
	contentDiv.textContent = "";
	addTextElement("h1", contentDiv, "Welcome to King Burger!");
	const restaurantImage = document.createElement("img");
	restaurantImage.src = Image;
	contentDiv.appendChild(restaurantImage);
	addTextElement(
		"p",
		contentDiv,
		"Come on down to King Burger, where every meal is a feast fit for royalty! We believe in serving up more than just food, we're dishing out happiness, one delicious burger at a time. Our commitment to quality is what sets us apart. We use only the freshest, locally sourced ingredients to craft our classic, mouthwatering burgers."
	);
	addTextElement("h2", contentDiv, "Our Menu");
	addTextElement(
		"p",
		contentDiv,
		"From our signature King Burger with its juicy patty, crisp lettuce, and secret sauce, to our perfectly seasoned golden fries and creamy hand-spun milkshakes, there's something for everyone on our menu. We also offer a variety of options for our vegetarian friends and a special kids' menu for the little princes and princesses in your life."
	);
	addTextElement("h2", contentDiv, "A Royal Experience");
	addTextElement(
		"p",
		contentDiv,
		"At King Burger, we're not just about great food—we're about a great experience. Our friendly staff, clean and vibrant dining area, and quick service make us the perfect spot for a quick lunch, a family dinner, or a celebration with friends. So, what are you waiting for? Your throne at King Burger awaits!"
	);
}
