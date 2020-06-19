const line = document.querySelector(".line");
const title = document.querySelector(".title.clamp");
const subBtn = document.querySelector(".subBtn");
const subDiv = document.querySelector(".subscribe");
const like = document.querySelector(".like");
const dislike = document.querySelector(".dislike");

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

//like and unlike button highlighting when clicked
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
