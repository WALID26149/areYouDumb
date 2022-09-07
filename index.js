const btnYes =document.querySelector(".btnYes");
const btnNo =document.querySelector(".btnNo");
const headding =document.querySelector("h1");
const replay =document.querySelector(".close-modal");

btnNo.addEventListener("click", function () {
  console.log("mouseover");
  const height =Math.floor(Math.random() * 100);
  const width =Math.floor(Math.random() *  200);

  btnNo.style.top= height +"px";
  btnNo.style.left= width +"px";
});

btnYes.addEventListener("click", function () {
  headding.innerHTML= "so you are dumb";
  btnNo.classList.add("hidden");
  btnYes.classList.add("hidden");
});

replay.addEventListener("click", function () {
  headding.innerHTML= "are you dumb";
  btnNo.classList.remove("hidden");
  btnYes.classList.remove("hidden");
});
