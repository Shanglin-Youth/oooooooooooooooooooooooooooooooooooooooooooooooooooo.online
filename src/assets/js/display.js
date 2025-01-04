import { binaryToString } from "./utils";

const matchedPath = location.pathname.match(/^\/O(O+)ONLINE$/i);

if (matchedPath) {
	try {
		const validUrl = new URL(binaryToString(matchedPath[1]));
		if (!validUrl.href.startsWith("http")) {
			throw new Error("错误的网址");
		}
		const realUrlLext = document.getElementById("real-url-text");
		const realUrl = document.getElementById("real-url");
		const diaplayUrl = document.getElementById("display-url");
		realUrlLext.textContent = validUrl.href;
		realUrl.href = validUrl.href;
		diaplayUrl.style.display = "block";
	} catch (e) {
		console.warn("binaryToString fail: ", matchedPath, e);
		location.replace("/");
	}
} else {
	location.replace("/");
}
