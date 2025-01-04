import "toastmaker/dist/toastmaker.css";
import ToastMaker from "toastmaker";
import { stringToBinary } from "./utils.js";

const originUrl = document.getElementById("origin-url");
const longUrl = document.getElementById("long-url");

originUrl?.addEventListener("input", () => {
	try {
		const validUrl = new URL(originUrl.value);
		longUrl.value = `${location.origin}/O${stringToBinary(validUrl.href)}ONLINE`;
	} catch (e) {
		console.error(e);
		longUrl.value = "";
	}
});

const openUrl = document.getElementById("open-url");
const copyUrl = document.getElementById("copy-url");

openUrl.addEventListener("click", () => {
	longUrl.value && window.open(longUrl.value, "_blank");
});
copyUrl.addEventListener("click", async () => {
	if (longUrl.value) {
		await navigator.clipboard.writeText(longUrl.value);
		ToastMaker("长网址已复制", 1000);
	}
});
