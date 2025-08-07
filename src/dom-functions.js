export function addTextElement(type, target, textContent) {
	const element = document.createElement(type);
	element.textContent = textContent;
	target.appendChild(element);
}
