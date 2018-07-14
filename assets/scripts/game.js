const cvg = require("convergejs");

function Start() {
	const canvas = document.getElementById("canvas");
	const c = new cvg.Canvas(canvas, "100%", "100%", 60);

	c.style([["background", "url('images/background.jpg')"],
			["background-position", "center"],
			["background-size", "cover"],
			["display", "flex"]]);

	let holding;

	let level = 0; // mL
	let maxLevel = 1000; // mL
	let buttonLevel = 20; // liqui on click
	let buttonDownLevel = 5; // liquid on hold

	let gameRow = c.new("box", "row1");
	gameRow.size({width:"inherit", height:"inherit"});
	gameRow.style([["position", "inherit"],
			["display", "flex"],
			["flex", "1"],
			["flex-direction", "column"],
			["justify-content", "center"],
			["align-items", "center"]]);

	let upgradeRow = c.new("box", "row2");
	upgradeRow.size({width:"inherit", height:"inherit"});
	upgradeRow.style([["position", "inherit"],
			["display", "flex"],
			["flex", "1"],
			["flex-direction", "column"],
			["align-items", "center"],
			["background", "rgba(0,0,0,0.2)"]]);

	let saveButton = upgradeRow.new("box", "saveButton");
	saveButton.element.innerHTML = "<p style='margin:0; padding:0;'>Save</p>";
	let loadButton = upgradeRow.new("box", "saveButton");
	loadButton.element.innerHTML = "<p style='margin:0; padding:0;'>Load</p>";

	let upgradesContainer = upgradeRow.new("box", "row2-1");
	upgradesContainer.size({width:"100%", height:"initial"});
	upgradesContainer.style([["position", "inherit"],
			["display", "flex"],
			["flex-direction", "column"],
			["align-items", "center"],
			["flex", "8"],
			["background", "rgba(0,0,0,0.2)"]]);

	let levelDisplay = gameRow.new("box", "display", false);
	let button = gameRow.new("box", "button");

	levelDisplay.style([["position", "inherit"],
			["display", "flex"],
			["justify-content", "center"],
			["align-items", "center"],
			["border-radius", "50%"],
			["background", "rgba(0,0,0,0.5)"],
			["color", "white"],
			["margin-bottom", "5em"]]);
	levelDisplay.size({width:"100px", height:"100px"});

	button.size({height:"25px", width:"135px"});
	button.element.innerHTML = "<p style='margin:0; padding:0;'>ｄｉｓｐｅｎｓｅ</p>";

	c.on("loop", () => {
		levelDisplay.element.innerHTML = `<p style='margin:0; padding:0;'>${level.toString()}</p>`;
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