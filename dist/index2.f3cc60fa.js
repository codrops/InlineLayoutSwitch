var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequiref540;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},e.parcelRequiref540=n);var a=n("5IQP4"),i=n("1oYLf");const r=document.body,l=[...document.querySelectorAll(".grid__item")],s=document.querySelector(".prime"),c=s.querySelector(".image--bg"),d=s.querySelector(".nav__item--active"),p=document.querySelector(".grid__item > .back");let u;p.addEventListener("click",(()=>{if(u)return;u=!0;const e=i.gsap.timeline({onComplete:()=>{r.classList.remove("content-open"),u=!1},defaults:{duration:1,ease:"expo.inOut"}}).addLabel("start",0).to(s,{startAt:{clipPath:"polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)"},clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"},"start+=0.4").to(c,{startAt:{scale:1.4},scale:1},"start+=0.4");for(const t of l){const{x:o,y:n}=(0,a.getInitialPosition)(t),i=(0,a.map)((0,a.getDistance)(t),0,1e3,.4,0);e.to(t,{x:o,y:n,delay:i,opacity:0},"start")}})),d.addEventListener("click",(()=>(()=>{if(u)return;u=!0;const e=i.gsap.timeline({onComplete:()=>{r.classList.add("content-open"),u=!1},defaults:{duration:1,ease:"expo.inOut"}}).addLabel("start",0);for(const t of l){const{x:o,y:n}=(0,a.getInitialPosition)(t),i=(0,a.map)((0,a.getDistance)(t),0,1e3,0,.4);e.set(t,{x:o,y:n,opacity:0},"start").to(t,{x:0,y:0,delay:i,opacity:1},"start+=0")}e.to(c,{scale:1.1},"start").to(s,{startAt:{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"},clipPath:"polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)"},"start")})())),(0,a.preloadImages)(".image__inner").then((()=>document.body.classList.remove("loading")));