console.log('loaded np.js');

STYLES = `
	.np-wrapper {
		position: relative;
		display: inline-block;
	}
`;

function addStyles() {
	var css = STYLES;
  head = document.head || document.getElementsByTagName('head')[0],
  style = document.createElement('style');
	head.appendChild(style);
	style.type = 'text/css';
  style.appendChild(document.createTextNode(css));
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

function wrapElem(el) {
	//wraps an elem with <span class="np-wrapper"> so we can position the banner next to it
	var node = el[0];
	var parent = node.parentNode;
	var wrapper = document.createElement('span');
	wrapper.setAttribute('class','np-wrapper')
	parent.replaceChild(wrapper, node);
	wrapper.appendChild(node);
	return wrapper;
}

function addBanner(selector, banner){
	var wrapper = wrapElem(selector);
	$(wrapper).append(banner)
}

function run(selector) {
	addStyles();
	addBanner($(selector), getBanner());
}

run('p');