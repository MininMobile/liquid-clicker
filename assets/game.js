const cvg = require("convergejs");

function Start() {
	const canvas = document.getElementById("canvas");
	const c = new cvg.Canvas(canvas, "100%", "100%", 60);

	var maxLevel = 10;
	var level = 0;

	c.style([["background", "url('background.jpg')"]]);
}