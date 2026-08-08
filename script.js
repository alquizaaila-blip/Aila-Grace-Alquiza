const revealItems=document.querySelectorAll(".section-reveal");
const revealObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add("revealed");}
    else if(entry.boundingClientRect.top>0){entry.target.classList.remove("revealed");}
  });
},{threshold:.12,rootMargin:"0px 0px -8% 0px"});
revealItems.forEach(el=>revealObserver.observe(el));

const nav=document.querySelector(".nav"),menu=document.querySelector(".menu-toggle");
menu.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll(".nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const sections=[...document.querySelectorAll("main section[id]")];
const links=[...document.querySelectorAll(".nav a[href^='#']")];
function updateActive(){
  let current="home";
  sections.forEach(s=>{if(scrollY>=s.offsetTop-175)current=s.id});
  links.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+current));
  document.querySelector(".back-top").classList.toggle("show",scrollY>500);
}
window.addEventListener("scroll",updateActive,{passive:true});window.addEventListener("resize",updateActive);updateActive();

document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener("click",e=>{
    const t=document.querySelector(a.getAttribute("href"));
    if(t){e.preventDefault();t.scrollIntoView({behavior:"smooth",block:"start"});}
  });
});

const projectData={
 research:{label:"PROPERTY RESEARCH",title:"Vacant Land Research",desc:"A structured property-research workflow designed to help real estate investors understand an opportunity before moving deeper into due diligence.",art:"research-art",items:["Ownership and assessor research","Parcel size, access, zoning and buildability checks","Tax, floodplain, environmental and location research","Organized findings for underwriting and decision-making"]},
 comps:{label:"COMPARABLES",title:"Comparative Market Analysis",desc:"A comparable-sales workflow that turns market information into useful pricing context for investment-property review.",art:"comps-art",items:["Comparable property selection","Sale-price and property-detail review","Market positioning and value comparison","Clear notes and organized research results"]},
 data:{label:"DATA MANAGEMENT",title:"CRM Data Organization",desc:"A clean-data workflow for keeping real estate research, leads, statuses, notes and supporting information easy to review.",art:"data-art",items:["Spreadsheet and CRM organization","Data cleanup and consistency checks","Status tracking and research notes","Structured records for team workflows"]},
 leads:{label:"LEAD GENERATION",title:"Skip Tracing & Lead Lists",desc:"A targeted lead-generation workflow combining owner research, skip tracing and organized contact data.",art:"leads-art",items:["Targeted owner and property research","Skip-tracing research","Contact-information organization","Lead lists prepared for outreach"]}
};
const modal=document.getElementById("projectModal"),art=document.getElementById("modalArt"),title=document.getElementById("modalTitle"),label=document.getElementById("modalLabel"),desc=document.getElementById("modalDesc"),bullets=document.getElementById("modalBullets");
document.querySelectorAll(".project-card").forEach(card=>{
  card.addEventListener("click",()=>{
    const d=projectData[card.dataset.project];
    label.textContent=d.label;title.textContent=d.title;desc.textContent=d.desc;
    bullets.innerHTML=d.items.map(x=>`<div>♡ &nbsp; ${x}</div>`).join("");
    art.className="modal-art "+d.art;modal.classList.add("open");modal.setAttribute("aria-hidden","false");document.body.style.overflow="hidden";
  });
});
function closeModal(){modal.classList.remove("open");modal.setAttribute("aria-hidden","true");document.body.style.overflow=""}
document.querySelectorAll("[data-close]").forEach(x=>x.addEventListener("click",closeModal));
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&modal.classList.contains("open"))closeModal()});

document.getElementById("contactForm").addEventListener("submit",e=>{
  e.preventDefault();
  const data=new FormData(e.currentTarget);
  const subject=encodeURIComponent(data.get("subject"));
  const body=encodeURIComponent(`Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`);
  window.location.href=`mailto:aila.alquiza@gmail.com?subject=${subject}&body=${body}`;
});
