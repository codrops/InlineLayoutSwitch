import { preloadImages, getInitialPosition, getDistance, map } from './utils';
import { gsap } from 'gsap';

// body
const body = document.body;

// .grid__item
const gridItems = [...document.querySelectorAll('.grid__item')];

// .prime (clip path animation will be on the element)
const prime = document.querySelector('.prime');

// image .image--bg
const imageBg = prime.querySelector('.image--bg');

// View all projects link
const viewAllProjects = prime.querySelector('.nav__item--active');

// back button
const back = document.querySelector('.grid__item > .back')

let isAnimating;

// Animation / Show images carousel
const showImages = () => {
    
    if ( isAnimating ) return;
    isAnimating = true;

    const tl = gsap.timeline({
        onComplete: () => {
            // pointer events
            body.classList.add('content-open');
            isAnimating = false;
        },
        defaults: {
            duration: 1,
            ease: 'expo.inOut',
        }
    })
    .addLabel('start', 0)

    for (const gridItem of gridItems) {
        const {x,y} = getInitialPosition(gridItem);
        const delay = map(getDistance(gridItem), 0, 1000, 0, 0.4);

        tl.set(gridItem, {
            x: x,
            y: y,
            opacity: 0
        }, 'start')
        .to(gridItem, {
            x: 0,
            y: 0,
            delay: delay,
            opacity: 1
        }, 'start+=0')
    }
    
    tl.to(imageBg, {
        scale: 1.1
    }, 'start')
    .to(prime, {
        startAt: {clipPath : 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'},
        clipPath: 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)'
    }, 'start')
    
}

// Back animation
back.addEventListener('click', () => {
    
    if ( isAnimating ) return;
    isAnimating = true;

    const tl = gsap.timeline({
        onComplete: () => {
            body.classList.remove('content-open');
            isAnimating = false;
        },
        defaults: {
            duration: 1,
            ease: 'expo.inOut',
        }
    })
    .addLabel('start', 0)
    .to(prime, {
        startAt: {clipPath : 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)'},
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
    }, 'start+=0.4')
    .to(imageBg, {
        startAt: {scale: 1.4},
        scale: 1
    }, 'start+=0.4');

    for (const gridItem of gridItems) {
        const {x,y} = getInitialPosition(gridItem);
        const delay = map(getDistance(gridItem), 0, 1000, 0.4, 0);

        tl.to(gridItem, {
            x: x,
            y: y,
            delay: delay,
            opacity: 0
        }, 'start')
    }

});

viewAllProjects.addEventListener('click', () => showImages());

// Preload images
preloadImages('.image__inner').then(() => document.body.classList.remove('loading'));