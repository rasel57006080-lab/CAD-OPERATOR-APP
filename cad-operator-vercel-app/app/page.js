 "use client";

import { useState } from "react";
import { Ruler, Calculator, FolderOpen, BriefcaseBusiness, Mail, ArrowRight, Layers3, Box, CheckCircle2 } from "lucide-react";

const projects = [
  {title:"Residential Floor Plan", type:"Architectural CAD", status:"Completed", desc:"Clean 2D floor plan with dimensions and room layouts."},
  {title:"Structural Drawing Set", type:"Structural CAD", status:"Completed", desc:"Column, beam, slab and foundation drawing workflow."},
  {title:"Interior Layout", type:"Interior CAD", status:"In Progress", desc:"Furniture planning, ceiling layout and lighting coordination."}
];

export default function Home() {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const area = length && width ? (Number(length) * Number(width)).toFixed(2) : "0.00";

  return (
    <main>
      <header className="nav">
        <div className="brand"><div className="brandMark">C</div><div><b>CAD OPERATOR</b><span>Drafting • Design • Engineering</span></div></div>
        <nav><a href="#home">Home</a><a href="#projects">Projects</a><a href="#tools">CAD Tools</a><a href="#portfolio">Portfolio</a><a href="#contact">Contact</a></nav>
        <a className="navBtn" href="#contact">Hire Me <ArrowRight size={16}/></a>
      </header>

      <section id="home" className="hero">
        <div className="heroCopy">
          <div className="eyebrow"><span></span> PROFESSIONAL CAD OPERATOR</div>
          <h1>Precision in every<br/><em>line & dimension.</em></h1>
          <p>Professional 2D CAD drafting, architectural drawings, structural detailing and visualization — organized in one modern workspace.</p>
          <div className="actions"><a className="primary" href="#projects">View Projects <ArrowRight size={18}/></a><a className="secondary" href="#tools">Explore Tools</a></div>
          <div className="stats"><div><b>50+</b><span>Projects</span></div><div><b>100%</b><span>Detail Focus</span></div><div><b>24/7</b><span>Portfolio Access</span></div></div>
        </div>
        <div className="heroVisual">
          <div className="grid"></div>
          <div className="blueprint"><div className="bpTitle">FLOOR PLAN / A-101</div><div className="room r1">LIVING</div><div className="room r2">BEDROOM</div><div className="room r3">KITCHEN</div><div className="room r4">DINING</div><div className="dimension top">12'-0"</div><div className="dimension side">10'-0"</div></div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="sectionHead"><div><div className="eyebrow">SELECTED WORK</div><h2>Featured Projects</h2></div><a href="#portfolio">View all <ArrowRight size={16}/></a></div>
        <div className="cards">{projects.map((p,i)=><article className="project" key={p.title}><div className={"projectImage p"+i}><div className="drawing"><div></div><div></div><div></div></div></div><div className="projectBody"><span>{p.type}</span><h3>{p.title}</h3><p>{p.desc}</p><small><CheckCircle2 size={15}/> {p.status}</small></div></article>)}</div>
      </section>

      <section id="tools" className="section toolsSection">
        <div className="sectionHead"><div><div className="eyebrow">WORK SMARTER</div><h2>CAD & Engineering Tools</h2></div></div>
        <div className="toolGrid">
          <div className="toolCard"><Ruler/><h3>Area Calculator</h3><p>Calculate rectangular room/floor area instantly.</p><div className="inputs"><input type="number" placeholder="Length" value={length} onChange={e=>setLength(e.target.value)}/><input type="number" placeholder="Width" value={width} onChange={e=>setWidth(e.target.value)}/></div><div className="result">{area} <span>sq units</span></div></div>
          <div className="toolCard"><Calculator/><h3>Engineering Calculator</h3><p>Use this workspace as a base for concrete, rebar and quantity calculations.</p><div className="miniTools"><span>Concrete Volume</span><span>Rebar Weight</span><span>Unit Converter</span></div></div>
          <div className="toolCard"><Layers3/><h3>Drawing Manager</h3><p>Organize drawing numbers, revisions, status and project files.</p><div className="miniTools"><span>DWG / PDF</span><span>Revision Control</span><span>Project Archive</span></div></div>
        </div>
      </section>

      <section id="portfolio" className="portfolio section">
        <div><div className="eyebrow">PORTFOLIO</div><h2>From concept to<br/><em>construction-ready</em> drawings.</h2><p>Showcase architectural plans, structural drawings, elevations, sections, details and 3D visualizations in a clean professional portfolio.</p><a className="primary" href="#contact">Work With Me <ArrowRight size={18}/></a></div>
        <div className="portfolioPanel"><Box size={34}/><h3>YOUR PROJECTS</h3><p>Upload your CAD images here later.</p><div className="uploadMock">＋ Add Project Image</div></div>
      </section>

      <section id="contact" className="contact section">
        <div className="eyebrow">CONTACT</div><h2>Have a drawing project?</h2><p>Let's turn your requirements into precise, professional CAD drawings.</p>
        <div className="contactCards"><a href="mailto:your@email.com"><Mail/><b>Email</b><span>your@email.com</span></a><a href="#"><BriefcaseBusiness/><b>Portfolio</b><span>Behance / LinkedIn</span></a></div>
      </section>

      <footer>© 2026 CAD OPERATOR · Professional Drafting & Design</footer>
    </main>
  );
}
