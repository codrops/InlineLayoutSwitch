/**
 * Class representing a content item element (.content__item)
 */
 export class ContentItem {
	// DOM elements
	DOM = {
		// main element (.content__item)
		el: null,
        // back (.back)
        back: null,
        // number (.number > .oh__inner)
        number: null,
        // title (.title > .oh__inner)
        title: null,
	};
	
	/**
	 * Constructor.
	 * @param {Element} DOM_el - main element (.content__item)
	 */
	constructor(DOM_el) {
		this.DOM.el = DOM_el;
        this.DOM.back = this.DOM.el.querySelector('.back');
        this.DOM.number = this.DOM.el.querySelector('.number > .oh__inner');
        this.DOM.title = this.DOM.el.querySelector('.title > .oh__inner');
	}

    isCurrent() {
        return this.DOM.el.classList.contains('content__item--current');
    }
}
