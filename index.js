import{S as m,a as p,i as f}from"./assets/vendor-YHhhcpQd.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const u=document.querySelector(".gallery"),d=document.querySelector(".loader"),g=new m(".gallery a",{captionDelay:250,captionsData:"alt"}),h=o=>{const s=o.map(r=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${r.largeImageURL}">
              <img
                class="gallery-image"
                src="${r.webformatURL}"
                alt="${r.tags}"
              />
              <ul class="gallery-atributes">
                <li>Likes <span class="gallery-values">${r.likes}</span></li>
                <li>Views <span class="gallery-values">${r.views}</span></li>
                <li>Comments <span class="gallery-values">${r.comments}</span></li>
                <li>Downloads <span class="gallery-values">${r.downloads}</span></li>
              </ul>
            </a>
        </li>
      `).join(" ");u.innerHTML=s,g.refresh()},i=()=>{u.innerHTML=""},L=()=>{d.classList.remove("hidden")},y=()=>{d.classList.add("hidden")},b="https://pixabay.com/api/",S="48131456-02178b54d24f02562d64ec2d5",v=o=>p.get(b,{params:{key:S,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(s=>s.data),l=document.querySelector(".form"),c=o=>{f.error({backgroundColor:"#ef4040",message:o,messageColor:"black",messageSize:"20",position:"topRight",displayMode:2,close:!0,timeout:2e3})};y();const w=o=>{o.preventDefault(),i();const s=o.currentTarget.elements["search-text"].value.trim();if(!s){c("Field is empty, input again");return}L(),v(s).then(r=>{if(r.hits.length===0){c("Sorry, there are no images matching <br>your search query. Please try again!"),i(),l.reset();return}h(r.hits),l.reset()}).catch(r=>{console.log(r)}).finally(()=>{y()})};l.addEventListener("submit",w);
//# sourceMappingURL=index.js.map
