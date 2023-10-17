const menuDrop = document.querySelector(".menu-drop");
const icon = document.querySelector(".menu-icon");
const container = document
	.querySelector(".container")
	.addEventListener("click", () => {
		menuDrop.style.height = "0"
	});

icon.addEventListener("click", (e) => {
	if (menuDrop.style.height !== "17rem") {
		menuDrop.style.height = "17rem";
	} else {
		menuDrop.style.height = "0";
	}
	e.stopPropagation();
});

const showMoreBtn = document.querySelector(".show-more");
showMoreBtn.addEventListener("mouseover", () => {
	showMoreBtn.style.background = "#B88E2F";
	showMoreBtn.style.color = "#ffffff";
});
showMoreBtn.addEventListener("mouseout", () => {
	showMoreBtn.style.background = "white";
	showMoreBtn.style.color = "#B88E2F";
});
