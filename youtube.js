"use strict";

//title clamping function
const title = document.querySelector(".title.clamp");
const line = document.querySelector(".line");
const titleLength = title.innerHTML.length;
console.log(titleLength);
if (titleLength < 71) {
	line.style.display = "none";
} else {
	line.style.display = "inline-block";
}

line.addEventListener("click", () => {
	line.classList.toggle("clicked");
	title.classList.toggle("clamp");
});

/* Subscribe Btn and the alert button*/
const subBtn = document.querySelector("#subBtn");
const subDiv = document.querySelector(".subscribe");
const bellBtn = document.createElement("button");
const bell = document.createElement("i");
bell.setAttribute("class", "fas fa-bell");
bell.style.color = "gray";
subBtn.addEventListener("click", () => {
	if (subBtn.className === "subBtn") {
		subBtn.classList.toggle("active");
		bellBtn.appendChild(bell);
		subDiv.appendChild(bellBtn);
	} else {
		subBtn.classList.toggle("active");
		subDiv.removeChild(bellBtn);
	}
});

//like and unlike button highlighting when clicked
const like = document.querySelector(".like");
const dislike = document.querySelector(".dislike");
like.addEventListener("click", () => {
	like.classList.toggle("active");
	if (dislike.className === "dislike active") {
		dislike.classList.toggle("active");
	}
});

dislike.addEventListener("click", () => {
	dislike.classList.toggle("active");
	if (like.className === "like active") {
		like.classList.toggle("active");
	}
});
