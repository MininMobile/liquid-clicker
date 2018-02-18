const cvg = require("convergejs");

function Start() {
	const canvas = document.getElementById("canvas");
	const c = new cvg.Canvas(canvas, "600px", "450px", 60);

	var maxLevel = 10000; // mL
	var buttonLevel = 10;
	var buttonDownLevel = 5;
	var level = 0;

	c.style([["background", "url('background.jpg')"],
			["background-position", "center"],
			["background-size", "cover"]]);

	var levelDisplay = c.new("text", "display");
	var button = c.new("box", "button");

	button.style([["background", "black"]]);
	button.move({y:"100px"});

	c.on("loop", () => {
		levelDisplay.content(level.toString());
	});

	button.element.onpointerdown = (e) => {
		level += buttonDownLevel;
		if (level > maxLevel) level = maxLevel;
	}

	button.element.onpointerup = (e) => {
		level += buttonLevel;
		if (level > maxLevel) level = maxLevel;
	}
}