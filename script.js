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


buttonElement.addEventListener("click", () => {
  const color = `${getRandomRgbColor()}`;
  bodyElement.style.backgroundColor = color;
  console.log(bodyElement.style.backgroundColor);

  backgroundColorTextElement.innerHTML = `Background-color: ${color}`;

  
});
