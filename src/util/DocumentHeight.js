export default function documentHeight() {
	var body = document.body,
		html = document.documentElement;

	var height = Math.max(body.scrollHeight, body.offsetHeight,
		html.clientHeight, html.scrollHeight, html.offsetHeight);

	return height;
}