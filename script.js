const getRandomRgbColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
};

const buttonElement = document.querySelector(".js-click-button");
const bodyElement = document.querySelector(".body");
const backgroundColorTextElement = document.querySelector(
  ".js-background-color-text",
);

const savedColor = localStorage.getItem("bgColor");
if (savedColor) {
  bodyElement.style.backgroundColor = savedColor;

  backgroundColorTextElement.innerHTML = `Background-color: ${savedColor}`;
}

buttonElement.addEventListener("click", (clickColor) => {
  const color = `${getRandomRgbColor()}`;
  bodyElement.style.backgroundColor = color;

  backgroundColorTextElement.innerHTML = `Background-color: ${color}`;

  localStorage.setItem("bgColor", color);
});
