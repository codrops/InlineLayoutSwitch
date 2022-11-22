const imagesLoaded = require('imagesloaded');

/**
 * Map number x from range [a, b] to [c, d] 
 * @param {Number} x - changing value
 * @param {Number} a 
 * @param {Number} b
 * @param {Number} c
 * @param {Number} d
 */
 const map = (x, a, b, c, d) => (x - a) * (d - c) / (b - a) + c;

/**
 * Distance from the element's center point to the center of the page 
 * @param {Element} element 
 * @returns 
 */
const getDistance = element => {
    const elCenter = {x: element.offsetLeft + element.offsetWidth/2, y: element.offsetTop + element.offsetHeight/2};
    return Math.hypot(elCenter.x - window.innerWidth/2, elCenter.y - window.innerHeight/2);
}

/**
 * Preload images
 * @param {String} selector - Selector/scope from where images need to be preloaded. Default is 'img'
 */
const preloadImages = (selector = 'img') => {
    return new Promise((resolve) => {
        imagesLoaded(document.querySelectorAll(selector), {background: true}, resolve);
    });
};

/** 
 * Calculates the position of an element when the element is [distanceDifference]px more far from the center of the page than it was previously
 * @param {Element} element
 * @param {Number} distanceDifference - The distance the element will have from the center
 * @returns {JSON} the x,y translation values
 */
 const getInitialPosition = (element, distanceDifference = 400) => {
    const winsize = {width: window.innerWidth, height: window.innerHeight};
    const elCenter = {x: element.offsetLeft + element.offsetWidth/2, y: element.offsetTop + element.offsetHeight/2};
    const angle = Math.atan2(Math.abs(winsize.height/2 - elCenter.y), Math.abs(winsize.width/2 - elCenter.x));

    let x = Math.abs(Math.cos(angle) * distanceDifference);
    let y = Math.abs(Math.sin(angle) * distanceDifference);

    return {
        x: elCenter.x < winsize.width/2 ? x*-1 : x,
        y: elCenter.y < winsize.height/2 ? y*-1 : y
    };
};

export {
    map,
    getDistance,
    getInitialPosition,
    preloadImages
};