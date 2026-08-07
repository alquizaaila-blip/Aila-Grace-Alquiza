'use client';
import { useEffect } from 'react';

const services = [
  ["Real Estate Research", "Property records, county databases, GIS mapping, ownership research, tax history, and market research."],
  ["Property Due Diligence", "Structured pre-acquisition research covering access, liens, taxes, documentation, zoning, and property risks."],
  ["Underwriting Support", "Review property leads, organize market data, assess risk, and support acquisition decisions."],
  ["Skip Tracing", "Research property owners, heirs, related parties, and contact information using public-record research."],
  ["Comps & Valuation Research", "Zillow and comparable-sales research using location, lot size, recent sales, and market context."],
  ["Lead Management", "Qualify, categorize, document, and organize acquisition leads and property pipelines."],
  ["Transaction & Loan Support", "Owner financing setup, payment tracking, document preparation, e-recording support, and follow-up."],
  ["Back Office Support", "QuickBooks support, documentation, data entry, website updates, record keeping, and process tracking."]
];

const projects = [
  ["Research", "Property Due Diligence", "A structured workflow for reviewing U.S. vacant land before acquisition, including property records, access, taxes, environmental factors, and buildability.", ["Land Research", "Due Diligence"]],
  ["Underwriting", "Pre-Auction Risk Screening", "A repeatable screening process designed to surface property red flags and organize acquisition decisions before bidding.", ["Underwriting", "Risk Review"]],
  ["Research", "Zillow Comps & Market Research", "Comparable-sales research organized around location, lot characteristics, recent sales, and market context.", ["Zillow", "Comps"]],
  ["Operations", "County Research System", "A county-by-county research workflow for collecting property information, documentation, zoning details, and acquisition notes.", ["GIS", "County Records"]],
  ["Lead Management", "Property & Lead Pipeline", "Organized support for property leads, skip tracing, qualification, categorization, and CRM updates.", ["CRM", "Skip Tracing"]]
];

const skills = [
  ["Real Estate Research", 94, "County GIS, assessor records, public records, ownership, taxes, zoning, and property research."],
  ["Property Due Diligence", 92, "Access, floodplain, wetlands, conservation, structures, title-related research, and red flags."],
  ["Underwriting Support", 90, "Lead screening, market research, comparable sales, offer analysis, and risk review."],
  ["Data & Lead Management", 91, "Data entry, skip tracing, CRM updates, pipeline organization, and reporting."],
  ["Transaction Support", 86, "Owner financing, payment tracking, documents, e-recording, and compliance follow-up."],
  ["Administrative Support", 93, "Customer support, documentation, QuickBooks, websites, scheduling, and back-office operations."]
];

const tools = ["LandID","Zillow","PropStream","PropertyRadar","Land.com","LandSearch","LandWatch","TLO","QuickBooks","REsimpli","MOJO Dialer","Convoso","CallTools","ClickUp","Jira","RingCentral","Launch Control","Click2Mail","Simplifile","GeekPay","Adobe","eSignature"];

const experience = [
  ["2024 — 2025", "Research & Data Specialist", "CB Land LLC", "Underwriting reviews, skip tracing, property records, county/state database research, lead qualification, and reporting."],
  ["2023 — 2024", "General Virtual Assistant", "Gokce Capital LLC", "Property due diligence, comparable research, loan management, QuickBooks support, documentation, website listings, lead management, and transaction coordination."],
  ["2021 — 2022", "Technical Support Representative", "VXI Global Davao", "Technical troubleshooting, customer support, billing resolution, sales opportunities, and service issue coordination."]
];

function ProjectImage({index, title}) {
  return <div className={"projectImage p" + (index+1)}>
    <div className="portfolioShot">
      <img src={`/portfolio-${index+1}.png`} alt={`${title} portfolio sample`} />
      <div className="shotGlow"></div>
    </div>
  </div>
}

export default function Home() {
  useEffect(() => {
    const items = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        } else if (entry.boundingClientRect.top > 0) {
          entry.target.classList.remove('is-visible');
        }
      });
    }, { threshold: 0.12 });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return <main>
    <nav className="nav">
      <a className="brand" href="#home">AG<span>.</span></a>
      <div className="links"><a href="#about">About</a><a href="#services">Services</a><a href="#portfolio">Portfolio</a><a href="#skills">Skills</a><a href="#testimonials">Testimonials</a></div>
      <a className="navButton" href="#contact">Let's talk ↗</a>
    </nav>

    <section className="hero" id="home">
      <div className="heroText">
        <div className="eyebrow"><span></span> YOUR RELIABLE “RE” VIRTUAL ASSISTANT</div>
        <h1>Hi, I'm<br/><em>Aila Grace</em><br/>Alquiza.</h1>
        <h2>Real Estate Virtual Assistant | Research & Data Specialist</h2>
        <p>I help real estate businesses stay organized and make informed decisions through accurate property research, due diligence, data support, and reliable virtual assistance.</p>
        <div className="actions"><a className="primary" href="#portfolio">View Projects ↗</a><a className="secondary" href="#contact">Contact Me</a><a className="resume" href="/Aila-Alquiza-Resume.pdf" target="_blank">Resume ↗</a></div>
        <div className="heroTags"><span>Real Estate Research</span><span>Due Diligence</span><span>Data Support</span></div>
      </div>
      <div className="heroVisual">
        <div className="softCircle"></div>
        <div className="portrait"><img src="/aila-photo.jpg" alt="Aila Grace Alquiza"/></div>
        <div className="availability"><b>●</b> Available for projects<br/><small>Freelancer-ready</small></div>
      </div>
    </section>

    <section className="reveal section about" id="about">
      <div className="label">About</div>
      <div className="twoCol">
        <div><h2>Organized research.<br/><em>Reliable support.</em></h2></div>
        <div><p className="lead">I am a highly organized Real Estate Virtual Assistant with hands-on experience in underwriting analysis, property due diligence, skip tracing, loan management, transaction coordination, and back-office operations.</p><p>My work combines careful research, clear documentation, practical problem-solving, and consistent communication. I am comfortable working independently, learning new systems quickly, and supporting fast-moving real estate workflows.</p>
        <div className="checkList"><span>✓ Web & property research</span><span>✓ Due diligence & underwriting</span><span>✓ Lead & data management</span><span>✓ Administrative support</span></div></div>
      </div>
      <div className="techStrip">{["Real Estate Research","Due Diligence","Underwriting","Skip Tracing","Lead Management","Virtual Assistance"].map(x=><span key={x}>{x}</span>)}</div>
    </section>

    <section className="reveal section services" id="services">
      <div className="label">Services</div>
      <div className="sectionIntro"><h2>Professional support that<br/><em>covers the details.</em></h2><p>From property research to back-office operations, each service is designed to make your workflow cleaner, faster, and easier to manage.</p></div>
      <div className="serviceGrid">{services.map(([title,text],i)=><article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{text}</p><b>↗</b></article>)}</div>
    </section>

    <section className="reveal section portfolio" id="portfolio">
      <div className="label">Portfolio</div>
      <div className="sectionIntro"><h2>Selected work<br/><em>and systems.</em></h2><p>A mix of research workflows, property analysis, and operational support that highlights how I approach real estate work with structure and attention to detail.</p></div>
      <div className="projects">{projects.map(([type,title,text,tags],i)=><article className="project reveal" key={title}><ProjectImage index={i} title={type}/><div className="projectCopy"><span>{type}</span><h3>{title}</h3><p>{text}</p><div>{tags.map(t=><b key={t}>{t}</b>)}</div><a href="#contact">View Project ↗</a></div></article>)}</div>
    </section>

    <section className="reveal section skills" id="skills">
      <div className="label">Skills</div>
      <div className="sectionIntro"><h2>A balanced mix of<br/><em>research & operations.</em></h2><p>Focused on real estate research, due diligence, data analysis, transaction support, and administrative operations.</p></div>
      <div className="skillGrid">{skills.map(([title,pct,text])=><article key={title}><h3>{title}</h3><strong>{pct}%</strong><p>{text}</p><div className="bar"><i style={{width:pct+"%"}}></i></div></article>)}</div>
      <div className="tools">{tools.map(t=><span key={t}>{t}</span>)}</div>
    </section>

    <section className="reveal section testimonials" id="testimonials">
      <div className="label">Why Work With Me</div>
      <div className="testimonialBox"><div><h2>Clean work.<br/><em>Reliable communication.</em></h2><p>I focus on accuracy, organization, and making your day-to-day workload easier. Whether the task is a property search or a detailed back-office workflow, I treat every assignment with care.</p></div><div className="quoteList"><div><b>01</b><span>Research with purpose</span><p>I don't just collect information — I organize it so it can support a decision.</p></div><div><b>02</b><span>Detail-driven execution</span><p>Consistent documentation and careful review help prevent missed details.</p></div><div><b>03</b><span>Easy to work with</span><p>Clear updates, dependable follow-through, and a willingness to learn new systems.</p></div></div></div>
    </section>

    <section className="reveal section experience">
      <div className="label">Experience</div>
      <div className="experienceList">{experience.map(([date,role,company,text])=><article key={company}><span>{date}</span><div><h3>{role}</h3><b>{company}</b><p>{text}</p></div></article>)}</div>
    </section>

    <section className="reveal contact" id="contact">
      <div className="label">Contact</div>
      <div className="contactGrid"><div><h2>Let's build something<br/><em>impactful together.</em></h2><p>Share your project idea, property research needs, or collaboration request and I’ll get back to you.</p><a className="email" href="mailto:aila.alquiza@gmail.com">aila.alquiza@gmail.com ↗</a><div className="contactMeta"><span>Davao City, Philippines</span><span>+63 96 7658 3323</span></div></div><form action="mailto:aila.alquiza@gmail.com" method="post" encType="text/plain"><label>Full name<input name="name" placeholder="Your name"/></label><label>Email<input name="email" type="email" placeholder="you@example.com"/></label><label>Project details<textarea name="message" placeholder="Tell me about your needs"></textarea></label><button>Send Message ↗</button></form></div>
    </section>
    <footer><b>Aila Grace Alquiza</b><span>Real Estate Virtual Assistant | Research & Data Specialist</span><a href="#home">Home · About · Services · Portfolio · Contact</a></footer>
  </main>
}
