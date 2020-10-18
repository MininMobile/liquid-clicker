function Start() {
	const canvas = document.getElementById("canvas");
	const c = new Canvas(canvas, "100%", "100%", 10);

	c.style([["background", "url('src/img/background.jpg')"],
			["background-position", "center"],
			["background-size", "cover"],
			["display", "flex"]]);

	let holding;

	let level = 0; // mL
	let maxLevel = 1000; // mL
	let money = 0;
	let mRatio = 10;
	let buttonLevel = 20; // liquid on click
	let buttonDownLevel = 5; // liquid on hold

	let gameRow = c.new("box", "row1");
	gameRow.size({ width:"inherit", height:"inherit" });
	gameRow.style([["position", "inherit"],
			["display", "flex"],
			["flex", "1"],
			["flex-direction", "column"],
			["justify-content", "center"],
			["align-items", "center"]]);

	let upgradeRow = c.new("box", "row2");
	upgradeRow.size({ width:"inherit", height:"inherit" });
	upgradeRow.style([["position", "inherit"],
			["display", "flex"],
			["flex", "1"],
			["flex-direction", "column"],
			["align-items", "center"],
			["background", "rgba(0,0,0,0.2)"]]);

	let saveButton = upgradeRow.new("box", "saveButton");
	saveButton.element.innerHTML = "<p style='margin:0; padding:0;'>Save</p>";
	let loadButton = upgradeRow.new("box", "loadButton");
	loadButton.element.innerHTML = "<p style='margin:0; padding:0;'>Load</p>";

	let upgradesContainer = upgradeRow.new("box", "row2-1");
	upgradesContainer.size({ width:"100%", height:"initial" });
	upgradesContainer.style([["position", "inherit"],
			["display", "flex"],
			["flex-direction", "column"],
			["align-items", "center"],
			["flex", "8"],
			["background", "rgba(0,0,0,0.2)"]]);

	let levelDisplay = gameRow.new("box", "display", false);
	levelDisplay.size({ width:"100px", height:"100px" });
	levelDisplay.style([["position", "inherit"],
			["display", "flex"],
			["justify-content", "center"],
			["align-items", "center"],
			["border-radius", "50%"],
			["background", "rgba(0,0,0,0.5)"],
			["color", "white"],
			["margin-bottom", "5em"]]);

	let button = gameRow.new("box", "button");
	button.size({ height:"25px", width:"135px" });
	button.element.innerHTML = "<p style='margin:0; padding:0;'>ｄｉｓｐｅｎｓｅ</p>";

	let sell = gameRow.new("box", "sell");
	sell.size({ height:"25px", width:"135px" });
	sell.element.innerHTML = "<p style='margin:0; padding:0;'>ｂｅｇｏｎｅ</p>";

	c.on("loop", () => {
		levelDisplay.element.innerHTML = `<p style="margin:0; padding:0;">${level}mL</p><p style="margin:0; padding:0;">$${money}</p>`;
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

	sell.element.onpointerdown = (e) => {
		money += level / mRatio;
		level = 0;
	}

	document.onpointerup = (e) => { holding = clearInterval(holding); }
	document.onpointerout = (e) => { holding = clearInterval(holding); }
}
