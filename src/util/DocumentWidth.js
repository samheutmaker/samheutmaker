export default function documentWidth() {
	var body = document.body,
		html = document.documentElement;

	var width = Math.max(body.scrollWidth, body.offsetWidth,
		html.clientWidth, html.scrollWidth, html.offsetWidth);

	return width;
}