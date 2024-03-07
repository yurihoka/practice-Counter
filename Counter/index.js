const btnDecrease = document.getElementsByClassName("decrease")[0];
const resetIncrease = document.getElementsByClassName("reset")[0];
const btnIncrease = document.getElementsByClassName("increase")[0];
const btnElement = document.getElementById("value");

btnDecrease.addEventListener("click", () => {
  btnElement.innerHTML = parseInt(btnElement.innerHTML) - 1;
  console.log(btnElement.innerHTML);
});

btnIncrease.addEventListener("click", () => {
  btnElement.innerHTML = parseInt(btnElement.innerHTML) + 1;
  console.log(btnElement.innerHTML);
});

resetIncrease.addEventListener("click", () => {
  btnElement.innerHTML = 0;
  console.log(btnElement.innerHTML);
});
