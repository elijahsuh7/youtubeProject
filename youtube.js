"use strict";

//clamp button for the title
const title = document.querySelector(".title.clamp");
const line = document.querySelector(".line");
const titleLength = title.textContent.length;

/* Subscribe Btn and the alert button*/
const subBtn = document.querySelector("#subBtn");
const subDiv = document.querySelector(".subscribe");
const bellBtn = document.querySelector("#bell");
//modal element selection
const modalContent = document.querySelector(".modal-content");
const modal = document.querySelector(".modal");

//like and dislike button selection
const like = document.querySelector(".like");
const dislike = document.querySelector(".dislike");

line.addEventListener("click", clamp);
subBtn.addEventListener("click", showBell);
bellBtn.addEventListener("click", showModal);
window.addEventListener("click", hideModal);
like.addEventListener("click", likeVideo);
dislike.addEventListener("click", dislikeVideo);

if (titleLength < 71) {
	line.style.display = "none";
} else {
	line.style.display = "inline-block";
}

//like and unlike button highlighting when clicked

function clamp() {
	line.classList.toggle("clicked");
	title.classList.toggle("clamp");
}

function showBell() {
	if (subBtn.className === "subBtn") {
		subBtn.classList.toggle("active");
		bellBtn.style.display = "inline-block";
	} else {
		subBtn.classList.toggle("active");
		bellBtn.style.display = "none";
	}
}

function showModal(event) {
	if (event.target === bellBtn) {
		modal.style.display = "block";
		modalContent.style.display = "flex";
	}
}

function hideModal(event) {
	if (event.target === modal) {
		modal.style.display = "none";
		modalContent.style.display = "none";
	}
}

function likeVideo() {
	like.classList.toggle("active");
	if (dislike.className === "dislike active") {
		dislike.classList.toggle("active");
	}
}

function dislikeVideo() {
	dislike.classList.toggle("active");
	if (like.className === "like active") {
		like.classList.toggle("active");
	}
}
