const getRandomRgbColor = () => {
 
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

  
});
