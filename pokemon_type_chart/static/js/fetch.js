
export const getData = async (url) => {
	try {
		let response = await fetch(url);
		let info = await response.json();
		return info;
	}
    catch {
		console.log("url: " + url)
	}
}