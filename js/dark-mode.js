var is_dark_mode = "light";

function dark_mode() {
	["--header-col", "--header-bgcol", "--card-bgcol", "--innercode-bgcol", "--code-bgcol",
		"--font-col", "--title-col", "--border-col", "--background-img", "--dark-mode-bgcol"
	].forEach(e => {
		var a = getComputedStyle(document.documentElement).getPropertyValue(e);
		var b = getComputedStyle(document.documentElement).getPropertyValue(e + "-rev");
		document.documentElement.style.setProperty(e, b);
		document.documentElement.style.setProperty(e + "-rev", a);
	});
	localStorage.setItem("dark-mode", is_dark_mode = is_dark_mode === "light" ? "dark" : "light");
}

(() => {
	var x = localStorage.getItem("dark-mode");
	x || localStorage.setItem("dark-mode", x = "light");
	x === "dark" && dark_mode();
})();