(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const o=document.querySelector(".backdrop"),l=document.querySelector(".burger-menu"),d=document.querySelector(".mobile-menu-btn");l.addEventListener("click",()=>{o.classList.toggle("is-open")});d.addEventListener("click",()=>{o.classList.remove("is-open")});o.addEventListener("click",n=>{n.target===o&&o.classList.remove("is-open")});document.addEventListener("DOMContentLoaded",function(){var n=document.querySelectorAll(".nav-link");document.querySelectorAll(".menu-list .menu-link"),n.forEach(function(r){r.addEventListener("click",function(i){n.forEach(function(c){c.classList.remove("current")}),r.classList.add("current")})})});const u=document.querySelectorAll(".menu-item");u.forEach(n=>{n.addEventListener("click",function(){u.forEach(r=>{r.querySelector(".menu-link").classList.remove("accent")}),this.querySelector(".menu-link").classList.add("accent")})});
//# sourceMappingURL=commonHelpers.js.map
