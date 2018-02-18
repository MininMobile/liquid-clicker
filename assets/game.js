const cvg = require("convergejs");

function Start() {
	const canvas = document.getElementById("canvas");
	const c = new cvg.Canvas(canvas, "600px", "450px", 60);

	c.style([["background", "url('background.jpg')"],
			["background-position", "center"],
			["background-size", "cover"],
			["display", "flex"]]);

	var holding;

	var maxLevel = 10000; // mL
	var buttonLevel = 10;
	var buttonDownLevel = 5;
	var level = 0;

	var gameRow = c.new("box", "row1");
	gameRow.size({width:"inherit", height:"inherit"});
	gameRow.style([["position", "inherit"],
			["display", "flex"],
			["flex", "1"]]);

	var upgradeRow = c.new("box", "row2");
	upgradeRow.size({width:"inherit", height:"inherit"});
	upgradeRow.style([["position", "inherit"],
			["display", "flex"],
			["flex", "1"],
			["background", "rgba(0,0,0,0.2)"]]);

	var levelDisplay = gameRow.new("text", "display");
	var button = gameRow.new("box", "button");

	button.style([["background", "black"],
			["border-radius", "3px"],
			["color", "white"],
			["padding", "0.2em"],
			["display", "flex"],
			["justify-content", "center"],
			["align-items", "center"]]);
	button.move({y:"100px"});
	button.size({height:"25px", width:"135px"});
	button.element.innerHTML = "<p style='margin:0; padding:0;'>ｄｉｓｐｅｎｓｅ</p>";

	c.on("loop", () => {
		levelDisplay.content(level.toString());
	});

	button.element.onpointerdown = (e) => {
		holding = setInterval(() => {
			level += buttonDownLevel;
			if (level > maxLevel) level = maxLevel;
		}, 100);
	}

	button.element.onpointerup = (e) => {
		level += buttonLevel;
		if (level > maxLevel) level = maxLevel;
	}

	document.onpointerup = (e) => { holding = clearInterval(holding); }
	document.onpointerout = (e) => { holding = clearInterval(holding); }
}