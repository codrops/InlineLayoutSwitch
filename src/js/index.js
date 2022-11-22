import { preloadImages } from './utils';
import { gsap } from 'gsap';
import { ContentItem } from './contentItem';
import { Flip } from 'gsap/Flip';
gsap.registerPlugin(Flip);

// body
const body = document.body;

// .content__item elements
const contentItems = [...document.querySelectorAll('.content__item')];

// For the purposes of the demo (which is to showcase the animation only) we'll hardcode the following.
const contentItemsArr = [];
contentItems.forEach(item => contentItemsArr.push(new ContentItem(item)));
const contentItemCurrent = contentItemsArr.find(item => item.isCurrent());

// .image elements
const images = [...document.querySelectorAll('.image')];

// total
const totalImages = images.length;

// .prime
const prime = document.querySelector('.prime');

// all .image-wrap. This is the original position af an image element bofore moving to the content item (Flip animation)
const imageWraps = [...prime.querySelectorAll('.image-wrap')];

// View all projects link
const viewAllProjects = prime.querySelector('.nav__item--active');

// Quote texts that will get hidden when showing the images carousel
const texts = [...prime.querySelectorAll('.oh > .oh__inner')];

// .nav-wrap element that moves up/down when toggling the view
const navWrap = document.querySelector('.nav-wrap');

let isAnimating;

// Animation / Show images carousel
const showImages = () => {
    
    if ( isAnimating ) return;
    isAnimating = true;

    // Save current state of the images
    const flipstate = Flip.getState(images);
    
    const tl = gsap.timeline({
        onComplete: () => {
            // pointer events
            body.classList.add('content-open');
            isAnimating = false;
        },
        defaults: {
            duration: 1.2,
            ease: 'power4.inOut',
        }
    })
    .addLabel('start', 0)
    .add(() => {
        // Append each image to each content item
        for (const [pos, contentItem] of contentItems.entries()) {
            contentItem.appendChild(images[totalImages-1-pos]);
        }
        
        // flip them
        Flip.from(flipstate, {
            duration: 1,
            ease: 'expo.inOut',
            absolute: true,
            simple: true,
            /*
            spin: pos => {
                if (pos === totalImages-1) return 0;

                return pos%2 ? 1 : -1;
            },
            */
            stagger: -0.06
        });
    }, 'start+=0.15');

    for (const text of texts) {
        const xy = gsap.utils.random(0,1,1);

        tl.to(text, {
            xPercent: xy ? gsap.utils.random(0,1,1)%2 ? -100 : 100 : 0,
            yPercent: xy ? 0 : gsap.utils.random(0,1,1)%2 ? -100 : 100
        }, 'start');
    }

    tl
    .to(navWrap, {
        yPercent: 120 // a bit more than 100 so it doesn't end right below the viewport
    }, 'start')
    .to([contentItemCurrent.DOM.number, contentItemCurrent.DOM.title], {
        y: 0
    }, 'start+=0.3')
    .to(contentItemCurrent.DOM.back, {
        opacity: 1
    }, 'start+=0.3');
    
}

// Back animation
contentItemCurrent.DOM.back.addEventListener('click', () => {
    
    if ( isAnimating ) return;
    isAnimating = true;

    // Save current state of the images
    const flipstate = Flip.getState(images);

    const tl = gsap.timeline({
        onComplete: () => {
            body.classList.remove('content-open');
            isAnimating = false;
        },
        defaults: {
            duration: 1.2,
            ease: 'power4.inOut',
        }
    })
    .addLabel('start', 0)
    .to([contentItemCurrent.DOM.number, contentItemCurrent.DOM.title], {
        y: '100%'
    }, 'start')
    .to(contentItemCurrent.DOM.back, {
        opacity: 0
    }, 'start')
    .to(navWrap, {
        yPercent: 0
    }, 'start')
    .to(texts, {
        xPercent: 0,
        yPercent: 0
    }, 'start')
    .add(() => {
        // Put images in their original positions
        prime.prepend(images[0]);
        for (const [pos, imageWrap] of imageWraps.entries()) {
            imageWrap.appendChild(images[pos+1]);
        }
        
        // flip them
        Flip.from(flipstate, {
            duration: 1,
            ease: 'expo.inOut',
            absolute: true,
            simple: true,
            stagger: 0.06
        });
    }, 'start+=0.15');

});

viewAllProjects.addEventListener('click', () => showImages());

for (const item of contentItemsArr) {
    if ( !item.isCurrent() ) {
        item.DOM.el.addEventListener('mouseenter', () => {
            gsap.to([item.DOM.number, item.DOM.title], {
                y: 0
            });
        });
        item.DOM.el.addEventListener('mouseleave', () => {
            gsap.to([item.DOM.number, item.DOM.title], {
                y: '100%'
            });
        });
    }
}

// Preload images
preloadImages('.image__inner').then(() => document.body.classList.remove('loading'));