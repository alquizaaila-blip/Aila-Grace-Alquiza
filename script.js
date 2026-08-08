const menuToggle=document.querySelector(".menu-toggle"),navLinks=document.querySelector(".nav-links");
menuToggle?.addEventListener("click",()=>{const open=navLinks.classList.toggle("open");menuToggle.setAttribute("aria-expanded",open)});
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>navLinks.classList.remove("open")));

const revealObserver=new IntersectionObserver((entries)=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible");}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>revealObserver.observe(el));

const sections=[...document.querySelectorAll("main section[id]")];
const navItems=[...document.querySelectorAll(".nav-links a")];
const navObserver=new IntersectionObserver((entries)=>entries.forEach(e=>{if(e.isIntersecting){navItems.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+e.target.id));}}),{rootMargin:"-35% 0px -55% 0px"});
sections.forEach(s=>navObserver.observe(s));

const backTop=document.querySelector(".back-top");
window.addEventListener("scroll",()=>backTop.classList.toggle("show",scrollY>500));
backTop.addEventListener("click",()=>scrollTo({top:0,behavior:"smooth"}));

const modal=document.querySelector(".modal"), modalImg=document.querySelector(".modal-image"),modalTitle=document.querySelector(".modal-title"),modalDesc=document.querySelector(".modal-description");
document.querySelectorAll(".project-card").forEach(card=>card.addEventListener("click",()=>{
  modalImg.src=card.dataset.image; modalImg.alt=card.dataset.title; modalTitle.textContent=card.dataset.title; modalDesc.textContent=card.dataset.description; modal.classList.add("open"); modal.setAttribute("aria-hidden","false");
}));
function closeModal(){modal.classList.remove("open");modal.setAttribute("aria-hidden","true")}
document.querySelector(".modal-close").addEventListener("click",closeModal);
modal.addEventListener("click",e=>{if(e.target===modal)closeModal()});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});