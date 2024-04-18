
document.addEventListener("DOMContentLoaded", (() => {
  const e = document.querySelector("header"),
     t = document.querySelector("header ul"),
     o = document.querySelector(".mob-search"),
     n = document.querySelector(".search-form"),
     r = document.querySelector(".cancel-btn"),
     i = document.querySelector(".toogle-slide-btn");

  function a() {
     const e = document.body.style.overflow;
     document.body.style.overflow = "hidden" === e ? "auto" : "hidden"
  }
  if (window.matchMedia("(max-width: 1024px)")?.matches || !1) {
     function u() {
        let e = document.querySelector("header");
        if (t.classList.toggle("show-ul"),
           t.classList.contains("show-ul")) {
           let o = document.createElement("div");
           e.appendChild(o),
              o.classList.add("doc-overlay"),
              a(),
              o.addEventListener("click", (function (e) {
                 t.classList.remove("show-ul"),
                    o.remove(),
                    a()
              }))
        } else
           document.querySelector(".doc-overlay").remove(),
              a()
     }
     i?.addEventListener("click", u),
        r?.addEventListener("click", u);
     let g = !0;
     const v = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M7.333 12.667A5.333 5.333 0 1 0 7.333 2a5.333 5.333 0 0 0 0 10.667ZM14 14l-2.9-2.9" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        p = '<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 384 512" fill="#000"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>';

     
     o && o.addEventListener("click", (() => {
        o.innerHTML = g ? p : v,
           g = !g,
           n.classList.toggle("show-search")
     })),
        c.forEach((e => {
           e.addEventListener("click", m)
        }))
  }
}));


// Fixed header on scrolling -->> Start

const header = document.querySelector('header');
const headerFixed = () => {
  if (window.innerWidth <= 1536 && window.scrollY > 50) {
    header.style.position = 'fixed';
    header.style.padding = '15px';
    header.style.left = '0px';
    header.style.zIndex = 100000000000000;
    header.style.width = '100%';
    header.style.background = "var('--white-color')";

    if (window.scrollY > 50) {
      header.style.top = '0px';
    }
  } else {
    header.style.position = 'relative';
    header.style.top = 'inherit';
  }
}

window.addEventListener('scroll', headerFixed);

// Fixed header on scrolling -->> End``