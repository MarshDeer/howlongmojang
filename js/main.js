function queryData() {
	fetch("js/data.json")
		.then(response => response.json())
		.then(data => {
			 arrayPromises = data.mojangPromises;
			 console.log("Fetched!");
		})
		.then()
}
queryData();

function buildPage() {
	let main = document.getElementById("main");
	for (var promise in arrayPromises) {
		let item = document.createElement(
			"details", {
				"class": "window",
				"id": promise.nameShort,
				"style": `--background: /assets/${promise.nameShort}/bg.jpg`
			});
		let summary = document.createElement("summary");
		let timer = document.createElement(
			"time", {
				"datetime": promise.dateStart,
			});
		timer.innerHTML = "Too long";
		let closedSummary = document.createElement(
			"span", {
				"class": "hide"
			});
		closedSummary.innerHTML = `waiting for <em>${promise.nameFull}</em>`;
		let openSummary = document.createElement(
			"span", {
				"class": "show"
			});
		openSummary.innerHTML = "Have passed";
		let itemContent = document.createElement("section");
		for (paragraph of promise.textBody) {
			let chunk = document.createElement("p");
			chunk.innerHTML = paragraph;
			itemContent.append(chunk);
		};
		let icon = document.createElement(
			"img", {
				"src": `/assets/${promise.nameShort}/icon.gif`,
				"loading": "lazy",
				"aria-hidden": true,
				"alt": ""
			});
		let footer = document.createElement("em");
		footer.innerHTML = "We are still waiting."
		if (promise.isFulfilled == true) {
			let bouncyText = document.createElement(
				"em", {
					"class": "fixed"
				},
			);
			bouncyText.innerHTML = promise.textBouncy;
			closedSummary.innerHTML = `Until the release of <em>${promise.nameFull}</em>`;
			openSummary.innerHTML = `Until the release of <em>${promise.nameFull}</em>`;
			footer.innerHTML = promise.textFooter;
			summary.append(bouncyText);
		}
		summary.append(timer, closedSummary, openSummary);
		item.append(summary, itemContent, icon, footer);
		main.append(item);
	}
}