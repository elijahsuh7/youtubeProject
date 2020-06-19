const line = document.querySelector(".line");
const title = document.querySelector(".title.clamp");
const videoBtn = document.querySelectorAll("button");
const subBtn = document.querySelector(".subBtn");
const subDiv = document.querySelector(".subscribe");

console.log(subBtn.className);
line.addEventListener("click", () => {
	line.classList.toggle("clicked");
	title.classList.toggle("clamp");
});

/* Subscribe Btn and the alert button*/
const bellBtn = document.createElement("button");
const bell = document.createElement("i");
bell.setAttribute("class", "fas fa-bell");
bell.style.color = "gray";
subBtn.addEventListener("click", () => {
	if (subBtn.className === "subBtn") {
		bellBtn.appendChild(bell);
		subDiv.appendChild(bellBtn);
	} else {
		subDiv.removeChild(bellBtn);
	}
});

for (let i = 1; i <= videoBtn.length; i++) {
	videoBtn[i].addEventListener("click", () => {
		videoBtn[i].classList.toggle("active");
	});
}
