import{o as a,c as i,a as p,b as m,r as _,d as h,e as u,w as d,F as y,f as l,g}from"./vendor.4370a8e8.js";const v=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}};v();var f=(n,t)=>{for(const[s,r]of t)n[s]=r;return n};const b={};function x(n,t){return a(),i("h1",null,"Home!!")}var A=f(b,[["render",x]]);const N={};function k(n,t){return a(),i("h1",null,"About!!")}var w=f(N,[["render",k]]);const H=[{path:"/psychologyman/",name:"Home",component:A},{path:"/psychologyman/about",name:"About",component:w}],L=p({history:m(),routes:H});const O={id:"nav"},B=l("Home"),F=l(" | "),V=l("About"),$={setup(n){return(t,s)=>{const r=_("router-link"),e=_("router-view");return a(),i(y,null,[h("div",O,[u(r,{to:"/psychologyman/"},{default:d(()=>[B]),_:1}),F,u(r,{to:"/psychologyman/about"},{default:d(()=>[V]),_:1})]),u(e)],64)}}};g($).use(L).mount("#app");