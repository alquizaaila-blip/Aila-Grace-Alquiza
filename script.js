const menuToggle=document.querySelector(".menu-toggle");
const nav=document.querySelector(".nav");
if(menuToggle){menuToggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");menuToggle.setAttribute("aria-expanded",String(open));});}
document.querySelectorAll(".nav a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");menuToggle?.setAttribute("aria-expanded","false");}));

const revealObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting) entry.target.classList.add("visible"); else entry.target.classList.remove("visible");});},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>revealObserver.observe(el));

const sections=document.querySelectorAll("main section[id]");
const navLinks=document.querySelectorAll(".nav a[href^='#']");
const navObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){navLinks.forEach(link=>link.classList.toggle("active",link.getAttribute("href")==="#"+entry.target.id));}});},{rootMargin:"-30% 0px -60% 0px"});
sections.forEach(s=>navObserver.observe(s));

const projectData={
 research:{title:"Vacant Land Research",desc:"Property research and due diligence organized to help real estate professionals understand a parcel before making a decision.",bullets:["Ownership, parcel and tax research","Access, zoning and buildability checks","Environmental and market research"]},
 comps:{title:"Comparative Market Analysis",desc:"Comparable-property research and organized market insights prepared to support pricing and investment review.",bullets:["Comparable property research","Market value and pricing context","Clean, decision-ready summaries"]},
 data:{title:"CRM Data Organization",desc:"Cleaned, structured and tracked data designed to keep research and team workflows accurate and easy to follow.",bullets:["CRM and spreadsheet cleanup","Status tracking and data organization","Consistent records and reporting"]},
 leads:{title:"Skip Tracing & Lead Lists",desc:"Targeted owner research, skip tracing and organized lead information prepared for outreach and real-estate lead generation.",bullets:["Owner and property research","Skip tracing and contact organization","Targeted lead-list preparation"]}
};
const modal=document.getElementById("projectModal"), modalTitle=document.getElementById("modalTitle"), modalDesc=document.getElementById("modalDesc"), modalBullets=document.getElementById("modalBullets"), modalArt=document.getElementById("modalArt");
const art={
 research:`<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#dce4c8"/><path d="M-20 250C120 170 220 240 350 155S510 100 640 30" fill="none" stroke="#fff" stroke-width="42"/><g fill="#b4c29d" stroke="#fff" stroke-width="4"><path d="M35 45l135-15 10 130-135 18z"/><path d="M180 30l130-10 8 130-138 10z"/><path d="M318 20l132 15-12 100-120 15z"/><path d="M45 178l135-18 10 125-170-10z"/><path d="M180 160l138-10 7 128-135 7z"/></g><circle cx="300" cy="120" r="18" fill="#f65b91" stroke="#fff" stroke-width="7"/></svg>`,
 comps:`<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#e1d7cc"/><g fill="#bda9a0" stroke="#fff" stroke-width="5"><rect x="55" y="165" width="82" height="80"/><rect x="165" y="125" width="82" height="120"/><rect x="275" y="75" width="82" height="170"/><rect x="385" y="105" width="82" height="140"/></g><path d="M96 140L206 95 316 45 426 75" fill="none" stroke="#f65b91" stroke-width="5"/><g fill="#f65b91"><circle cx="96" cy="140" r="9"/><circle cx="206" cy="95" r="9"/><circle cx="316" cy="45" r="9"/><circle cx="426" cy="75" r="9"/></g></svg>`,
 data:`<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#f7fafb"/><rect x="45" y="35" width="510" height="225" fill="#fff" stroke="#cfd8df" stroke-width="3"/><g stroke="#dbe1e5" stroke-width="2"><path d="M45 100h510M45 132h510M45 164h510M45 196h510M45 228h510"/><path d="M135 69v191M270 69v191M405 69v191"/></g><g fill="#f65b91"><rect x="58" y="80" width="58" height="7"/><rect x="148" y="80" width="80" height="7"/><rect x="283" y="80" width="62" height="7"/><rect x="418" y="80" width="92" height="7"/><rect x="58" y="112" width="45" height="7"/><rect x="148" y="144" width="100" height="7"/></g></svg>`,
 leads:`<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#f7fafb"/><rect x="48" y="35" width="504" height="230" fill="#fff" stroke="#cfd8df" stroke-width="3"/><g stroke="#e0e5e9" stroke-width="2"><path d="M48 105h504M48 145h504M48 185h504M48 225h504"/><path d="M195 73v192M350 73v192"/></g><g fill="#7e9bb2"><rect x="72" y="87" width="82" height="8"/><rect x="210" y="87" width="92" height="8"/><rect x="365" y="87" width="112" height="8"/><rect x="72" y="127" width="105" height="8"/><rect x="210" y="167" width="72" height="8"/></g><circle cx="520" cy="105" r="14" fill="#f65b91"/></svg>`
};
function closeModal(){modal.classList.remove("show");modal.setAttribute("aria-hidden","true");document.body.style.overflow="";}
document.querySelectorAll(".project-card").forEach(card=>card.addEventListener("click",()=>{const d=projectData[card.dataset.project];modalTitle.textContent=d.title;modalDesc.textContent=d.desc;modalBullets.innerHTML=d.bullets.map(x=>`<div>✓ ${x}</div>`).join("");modalArt.innerHTML=art[card.dataset.project];modal.classList.add("show");modal.setAttribute("aria-hidden","false");document.body.style.overflow="hidden";}));
document.querySelectorAll("[data-close]").forEach(el=>el.addEventListener("click",closeModal));
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal();});

document.getElementById("contactForm")?.addEventListener("submit",e=>{e.preventDefault();const f=new FormData(e.currentTarget);const subject=encodeURIComponent(f.get("subject"));const body=encodeURIComponent(`Name: ${f.get("name")}\nEmail: ${f.get("email")}\n\n${f.get("message")}`);window.location.href=`mailto:aila.alquiza@gmail.com?subject=${subject}&body=${body}`;});

const backTop=document.querySelector(".back-top");window.addEventListener("scroll",()=>{backTop.style.opacity=window.scrollY>500?"1":"0";},{passive:true});
