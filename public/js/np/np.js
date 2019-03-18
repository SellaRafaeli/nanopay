console.log('loaded np.js');

function addBanner(elem) {

}

function htmlToElement(html) {
  var template = document.createElement('template');
  html = html.trim(); // Never return a text node of whitespace as the result
  template.innerHTML = html;
  return template.content.firstChild;
}

function getBanner() {
	let id = Math.random().toString(36).substr(2,5);
	let banner = `
		<div class="banner np-banner ${id}"> 
			<button onClick='$(".np-banner.${id}").hide()'> closeMe </button>
		</div>
	`;

	return htmlToElement(banner);
}

function run(elem) {
	var banner = getBanner();
	$(elem).append(getBanner())
}

run('p');