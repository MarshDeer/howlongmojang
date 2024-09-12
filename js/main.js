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
	for (const promise of arrayPromises) {
		let item = document.createElement("details");
			item.classList.add("window");
			item.id = promise.nameShort;
			item.style.setProperty("--background", `url(/assets/${promise.nameShort}/bg.jpg)`);
		let summary = document.createElement("summary");
		let timer = document.createElement("time");
			timer.setAttribute("datetime", promise.dateStart);
			timer.innerHTML = "Too long";
		let closedSummary = document.createElement("span");
			closedSummary.classList.add("hide");
			closedSummary.innerHTML = `waiting for <em>${promise.nameFull}</em>`;
		let openSummary = document.createElement("span");
			openSummary.classList.add("show");
			openSummary.innerHTML = "Have passed";
		let itemContent = document.createElement("section");
		for (const paragraph of promise.textBody) {
			let chunk = document.createElement("p");
			chunk.innerHTML = paragraph;
			itemContent.append(chunk);
		};
		let icon = document.createElement("img");
			icon.src = `/assets/${promise.nameShort}/icon.gif`;
			icon.setAttribute("loading", "lazy");
			icon.setAttribute("aria-hidden", "true");
			icon.setAttribute("alt", "");
		let footer = document.createElement("p");
			footer.innerHTML = "<em>We are still waiting.</em>"
		if (promise.isFulfilled == true) {
			let bouncyText = document.createElement("em")
				bouncyText.classList.add("fixed");
				bouncyText.innerHTML = promise.textBouncy;
			closedSummary.innerHTML = `Until the release of <em>${promise.nameFull}</em>`;
			openSummary.innerHTML = `Until the release of <em>${promise.nameFull}</em>`;
			footer.innerHTML = `<em>${promise.textFooter}</em>`;
			summary.append(bouncyText);
		}
		summary.append(timer, closedSummary, openSummary);
		item.append(summary, itemContent, icon, footer);
		main.append(item);
	}
}