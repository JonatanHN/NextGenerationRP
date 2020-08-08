function playmu() {
	document.getElementById('pause').style.display = "flex";
	document.getElementById('player').play()
	document.getElementById('play').style.display = "none";
}
function pausemu() {
	document.getElementById('play').style.display = "flex";
	document.getElementById('player').pause()
	document.getElementById('pause').style.display = "none";
}