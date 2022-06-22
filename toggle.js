const theme = localStorage.getItem('theme');
	if (theme === "dark") {
		document.documentElement.setAttribute('color_scheme', 'dark');
	}

const userPrefers = getComputedStyle(document.documentElement).getPropertyValue('content');	

if (theme === "dark") {
	document.getElementById("theme-toggle").innerHTML = "Light Mode";
} else if (theme === "light") {
	document.getElementById("theme-toggle").innerHTML = "Dark Mode";
} else if  (userPrefers === "dark") {
	document.documentElement.setAttribute('color_scheme', 'dark');
	window.localStorage.setItem('theme', 'dark');
	document.getElementById("theme-toggle").innerHTML = "Light Mode";
} else {
	document.documentElement.setAttribute('color_scheme', 'light');
	window.localStorage.setItem('theme', 'light');
	document.getElementById("theme-toggle").innerHTML = "Dark Mode";
}

function modeSwitcher() {
	let currentMode = document.documentElement.getAttribute('color_scheme');
	if (currentMode === "dark") {
		document.documentElement.setAttribute('color_scheme', 'light');
		window.localStorage.setItem('theme', 'light');
		document.getElementById("theme-toggle").innerHTML = "Dark Mode";
	} else {
		document.documentElement.setAttribute('color_scheme', 'dark');
		window.localStorage.setItem('theme', 'dark');
		document.getElementById("theme-toggle").innerHTML = "Light Mode";
	}
}