"use client";

import { useState } from "react";

const services = [
  {
    title: "AI Engineering",
    description:
      "Design and develop intelligent AI-powered applications and systems.",
    icon: "🧠",
  },
  {
    title: "AI Agents",
    description:
      "Build AI agents capable of reasoning, using tools, handling tasks, and assisting businesses.",
    icon: "🤖",
  },
  {
    title: "AI Automation",
    description:
      "Automate repetitive business workflows and connect different digital tools.",
    icon: "⚙️",
  },
  {
    title: "Website Development",
    description:
      "Build modern, responsive websites, dashboards, SaaS interfaces, and web applications.",
    icon: "🌐",
  },
  {
    title: "Prompt Engineering",
    description:
      "Design structured prompts and AI workflows for reliable and useful AI outputs.",
    icon: "✍️",
  },
  {
    title: "AI Video Generation",
    description:
      "Create cinematic AI-generated videos, advertisements, promotional content, and storytelling experiences.",
    icon: "🎬",
  },
  {
    title: "AI Image Generation",
    description:
      "Create professional AI-generated visuals, product imagery, advertising creatives, and conceptual artwork.",
    icon: "🎨",
  },
  {
    title: "Graphic Design & Branding",
    description:
      "Create logos, visual identities, social media designs, marketing graphics, and brand systems.",
    icon: "✨",
  },
  {
    title: "Digital Marketing & Social Media",
    description:
      "Create AI-assisted marketing strategies, campaigns, social media content, advertisements, and promotional materials.",
    icon: "📈",
  },
  {
    title: "AI Content Creation",
    description:
      "Create high-quality written, visual, and multimedia content using AI-assisted workflows.",
    icon: "📝",
  },
];

const projects = [
  {
    title: "SCY AI Tutor",
    category: "AI Education Platform",
    description:
      "An AI-powered learning assistant designed to help students learn, practice, and understand difficult topics.",
    tech: "AI • Web Application • Education",
    link: "https://scyintelligenceaitutor.created.app",
  },
  {
    title: "Food Engineering Expert",
    category: "AI Food & Nutrition",
    description:
      "An AI-powered food engineering application that analyzes ingredients and provides health scores, calorie estimates, safety ratings, and recipe suggestions.",
    tech: "AI • Python • Streamlit",
    link: "https://foodengineeringexpert.streamlit.app",
  },
  {
    title: "SCY Intelligence Website",
    category: "Digital Product",
    description:
      "The official SCY Intelligence digital platform for showcasing AI engineering, automation, creative technology, and digital solutions.",
    tech: "Web Development • AI • Digital Solutions",
    link: "https://scy-intelligence.vercel.app",
  },
];

const solutions = [
  {
    title: "AI Business Assistant",
    problem:
      "Businesses struggle with repetitive customer support, internal information retrieval, and operational tasks.",
    solution:
      "An intelligent assistant that handles business operations, customer support, and information management.",
    features:
      "Conversational support • Knowledge base integration • Task assistance",
  },
  {
    title: "AI Content Engine",
    problem:
      "Marketing teams spend hours generating content ideas, social posts, and campaigns.",
    solution:
      "An AI engine for generating marketing content, social posts, campaign concepts, scripts, and creative ideas.",
    features:
      "Content ideas • Campaign generation • Brand voice • Multi-format content",
  },
  {
    title: "AI Study Assistant",
    problem:
      "Students need personalized learning support and performance tracking.",
    solution:
      "AI-powered learning, tutoring, quizzes, explanations, and performance analysis.",
    features:
      "Adaptive quizzes • Explanations • Progress tracking • Study plans",
  },
  {
    title: "AI Automation Systems",
    problem:
      "Businesses waste time performing repetitive manual tasks.",
    solution:
      "Connect business processes and automate repetitive workflows.",
    features:
      "Workflow automation • Integrations • Triggers • Error reduction",
  },
  {
    title: "Custom AI Applications",
    problem:
      "Off-the-shelf AI tools do not always fit unique requirements.",
    solution:
      "Build specialized AI applications around specific business or personal needs.",
    features:
      "Custom workflows • API connectivity • Tailored UX • Scalable architecture",
  },
];

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const whatsappNumber = "2348103348891";

  const openWhatsApp = (message: string) => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  const scrollToSection = (id: string) => {
    setMenuOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <main>
      {/* NAVIGATION */}
      <nav className="site-nav">
        <div className="container nav-inner">
          <button
            className="logo"
            onClick={() => scrollToSection("home")}
            aria-label="SCY Intelligence home"
          >
            SCY<span>Intelligence</span>
          </button>

          <div className={`nav-links ${menuOpen ? "active" : ""}`}>
            <button onClick={() => scrollToSection("home")}>Home</button>
            <button onClick={() => scrollToSection("about")}>About</button>
            <button onClick={() => scrollToSection("services")}>
              Services
            </button>
            <button onClick={() => scrollToSection("solutions")}>
              Solutions
            </button>
            <button onClick={() => scrollToSection("projects")}>
              Projects
            </button>
            <button onClick={() => scrollToSection("pricing")}>Pricing</button>
            <button onClick={() => scrollToSection("contact")}>Contact</button>

            <button
              className="nav-cta"
              onClick={() => scrollToSection("contact")}
            >
              Start a Project
            </button>
          </div>

          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />

        <div className="container hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <span className="pulse-dot" />
              AI ENGINEERING • AUTOMATION • CREATIVE TECHNOLOGY
            </div>

            <h1>
              Build Smarter.
              <br />
              Automate Faster.
              <br />
              <span>Create With AI.</span>
            </h1>

            <p>
              SCY Intelligence helps businesses, creators, startups, and
              individuals harness artificial intelligence to build digital
              products, automate workflows, create content, and turn ideas
              into intelligent solutions.
            </p>

            <div className="hero-buttons">
              <button
                className="btn btn-primary"
                onClick={() => scrollToSection("contact")}
              >
                Start a Project →
              </button>

              <button
                className="btn btn-outline"
                onClick={() => scrollToSection("services")}
              >
                Explore Services
              </button>
            </div>

            <div className="hero-trust">
              <span>✦</span> Practical AI solutions for the real world
            </div>
          </div>

          <div className="hero-visual">
            <div className="ai-orb">
              <div className="orb-ring ring-one" />
              <div className="orb-ring ring-two" />
              <div className="orb-ring ring-three" />

              <div className="orb-core">
                <span>SCY</span>
                <small>AI</small>
              </div>

              <div className="orb-particle particle-one">✦</div>
              <div className="orb-particle particle-two">+</div>
              <div className="orb-particle particle-three">01</div>
              <div className="orb-particle particle-four">AI</div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section id="about">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">WHO WE ARE</span>

            <h2>
              Intelligence That Turns
              <span> Ideas Into Reality.</span>
            </h2>

            <div className="gold-line" />

            <p>
              SCY Intelligence combines artificial intelligence, software
              engineering, automation, creative technology, digital
              marketing, and modern web development to help clients solve
              real problems and build practical digital products.
            </p>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <strong>AI</strong>
              <span>Engineering</span>
            </div>

            <div className="stat-card">
              <strong>10+</strong>
              <span>Digital Services</span>
            </div>

            <div className="stat-card">
              <strong>3</strong>
              <span>Live Projects</span>
            </div>

            <div className="stat-card">
              <strong>∞</strong>
              <span>Ideas To Build</span>
            </div>
          </div>

          <div className="about-grid">
            <div className="about-copy">
              <h3>Our Mission</h3>

              <p>
                SCY Intelligence exists to help businesses, creators,
                startups, and organizations use artificial intelligence to
                build, automate, market, and grow.
              </p>

              <p>
                We combine AI, software engineering, automation, creative
                technology, and modern web development to transform ideas
                into useful digital products.
              </p>

              <div className="mission-list">
                <div>
                  <span>01</span>
                  <strong>Innovation</strong>
                  <p>We explore and apply emerging AI technologies.</p>
                </div>

                <div>
                  <span>02</span>
                  <strong>Intelligence</strong>
                  <p>We design systems that think, assist, and automate.</p>
                </div>

                <div>
                  <span>03</span>
                  <strong>Creativity</strong>
                  <p>We blend AI with powerful creative workflows.</p>
                </div>

                <div>
                  <span>04</span>
                  <strong>Trust</strong>
                  <p>We aim to build transparent and reliable solutions.</p>
                </div>
              </div>
            </div>

            <div className="founder-card">
              <div className="founder-avatar">IA</div>

              <span className="founder-label">FOUNDER</span>

              <h3>Ibrahim Adebola</h3>

              <p className="founder-role">
                Founder & AI Engineer
              </p>

              <p>
                An AI-focused engineering student and technology builder
                passionate about artificial intelligence, automation,
                software development, and creative technology.
              </p>

              <button
                className="text-button"
                onClick={() =>
                  openWhatsApp(
                    "Hello Ibrahim, I would like to discuss a project with SCY Intelligence."
                  )
                }
              >
                Work With SCY →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="dark-section">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">WHAT WE DO</span>

            <h2>
              Technology Built Around
              <span> Your Goals.</span>
            </h2>

            <div className="gold-line" />

            <p>
              Premium AI-powered services designed to help you build,
              automate, create, and grow.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service, index) => (
              <button
                key={service.title}
                className={`service-card ${
                  selectedService === service.title ? "selected" : ""
                }`}
                onClick={() =>
                  setSelectedService(
                    selectedService === service.title ? null : service.title
                  )
                }
              >
                <div className="service-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="service-icon">{service.icon}</div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <span className="service-arrow">
                  {selectedService === service.title ? "−" : "+"}
                </span>
              </button>
            ))}
          </div>

          {selectedService && (
            <div className="service-detail">
              <span className="eyebrow">SELECTED SERVICE</span>

              <h3>{selectedService}</h3>

              <p>
                Let's discuss how SCY Intelligence can apply{" "}
                <strong>{selectedService}</strong> to your specific goal.
              </p>

              <button
                className="btn btn-gold"
                onClick={() =>
                  openWhatsApp(
                    `Hello SCY Intelligence, I'm interested in your ${selectedService} service.`
                  )
                }
              >
                Discuss This Service →
              </button>
            </div>
          )}
        </div>
      </section>

      {/* SOLUTIONS */}
      <section id="solutions">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">AI SOLUTIONS</span>

            <h2>
              Solving Problems With
              <span> Intelligence.</span>
            </h2>

            <div className="gold-line" />

            <p>
              Explore practical AI solutions designed around real-world
              problems.
            </p>
          </div>

          <div className="solution-grid">
            {solutions.map((solution, index) => (
              <div className="solution-card" key={solution.title}>
                <div className="solution-top">
                  <span>0{index + 1}</span>
                  <div />
                </div>

                <h3>{solution.title}</h3>

                <div className="solution-block">
                  <small>THE PROBLEM</small>
                  <p>{solution.problem}</p>
                </div>

                <div className="solution-block">
                  <small>THE SOLUTION</small>
                  <p>{solution.solution}</p>
                </div>

                <div className="solution-features">
                  <small>FEATURES</small>
                  <p>{solution.features}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
            {/* PROJECTS */}
      <section id="projects" className="dark-section">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">OUR WORK</span>

            <h2>
              Built With
              <span> Intelligence.</span>
            </h2>

            <div className="gold-line" />

            <p>
              Real projects and digital products developed under the
              SCY Intelligence brand.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <article
                className={`project-card ${
                  selectedProject === project.title ? "selected" : ""
                }`}
                key={project.title}
              >
                <div className="project-number">
                  PROJECT {String(index + 1).padStart(2, "0")}
                </div>

                <div className="project-visual">
                  <div className="project-glow" />
                  <span>
                    {index === 0 ? "AI" : index === 1 ? "FOOD" : "SCY"}
                  </span>
                </div>

                <div className="project-content">
                  <span className="project-category">
                    {project.category}
                  </span>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="project-tech">
                    {project.tech}
                  </div>

                  <div className="project-actions">
                    <button
                      className="btn btn-outline"
                      onClick={() =>
                        setSelectedProject(
                          selectedProject === project.title
                            ? null
                            : project.title
                        )
                      }
                    >
                      {selectedProject === project.title
                        ? "Hide Details"
                        : "View Project"}
                    </button>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      Open ↗
                    </a>
                  </div>

                  {selectedProject === project.title && (
                    <div className="project-expanded">
                      <p>
                        This is a real SCY Intelligence project.
                        Click <strong>Open</strong> to visit the live
                        project.
                      </p>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section id="process">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">OUR PROCESS</span>

            <h2>
              From Idea
              <span> To Reality.</span>
            </h2>

            <div className="gold-line" />

            <p>
              A clear and structured process designed to turn ideas into
              practical digital solutions.
            </p>
          </div>

          <div className="process-grid">
            <div className="process-card">
              <span>01</span>
              <h3>Discover</h3>
              <p>
                Understand your problem, business, audience, and
                objectives.
              </p>
            </div>

            <div className="process-card">
              <span>02</span>
              <h3>Strategize</h3>
              <p>
                Design the right AI, automation, creative, or software
                solution.
              </p>
            </div>

            <div className="process-card">
              <span>03</span>
              <h3>Build</h3>
              <p>
                Develop the solution using modern AI and software
                technologies.
              </p>
            </div>

            <div className="process-card">
              <span>04</span>
              <h3>Refine</h3>
              <p>
                Test, improve, optimize, and make sure the solution
                meets the objective.
              </p>
            </div>

            <div className="process-card">
              <span>05</span>
              <h3>Launch</h3>
              <p>
                Deliver the final product and provide support for
                future improvements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="dark-section">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">PRICING</span>

            <h2>
              Flexible
              <span> Service Packages.</span>
            </h2>

            <div className="gold-line" />

            <p>
              Every project is different. Choose a starting point and
              we'll scope the final solution together.
            </p>
          </div>

          <div className="pricing-grid">
            <div className="pricing-card">
              <span className="pricing-label">STARTER</span>

              <h3>Starter</h3>

              <p>For individuals and small businesses.</p>

              <ul>
                <li>✓ Single service focus</li>
                <li>✓ AI content or image generation</li>
                <li>✓ Basic website or landing page</li>
                <li>✓ Prompt engineering</li>
                <li>✓ 1 revision round</li>
              </ul>

              <button
                className="btn btn-outline"
                onClick={() =>
                  openWhatsApp(
                    "Hello SCY Intelligence, I am interested in the Starter package."
                  )
                }
              >
                Request a Quote
              </button>
            </div>

            <div className="pricing-card featured">
              <div className="popular-badge">MOST POPULAR</div>

              <span className="pricing-label">GROWTH</span>

              <h3>Growth</h3>

              <p>
                For businesses needing multiple AI-powered services.
              </p>

              <ul>
                <li>✓ Multiple services combined</li>
                <li>✓ AI automation setup</li>
                <li>✓ AI agents</li>
                <li>✓ Website + branding</li>
                <li>✓ Content engine</li>
                <li>✓ Priority support</li>
              </ul>

              <button
                className="btn btn-gold"
                onClick={() =>
                  openWhatsApp(
                    "Hello SCY Intelligence, I am interested in the Growth package."
                  )
                }
              >
                Request a Quote
              </button>
            </div>

            <div className="pricing-card">
              <span className="pricing-label">CUSTOM</span>

              <h3>Custom</h3>

              <p>
                For companies requiring custom AI engineering,
                automation, software, or AI agents.
              </p>

              <ul>
                <li>✓ Custom AI application development</li>
                <li>✓ Full workflow automation</li>
                <li>✓ SaaS or dashboard design</li>
                <li>✓ AI integrations</li>
                <li>✓ Ongoing support & iterations</li>
              </ul>

              <button
                className="btn btn-outline"
                onClick={() =>
                  openWhatsApp(
                    "Hello SCY Intelligence, I would like to discuss a custom AI project."
                  )
                }
              >
                Start a Conversation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">LET'S BUILD</span>

            <h2>
              Have An Idea?
              <span> Let's Build It.</span>
            </h2>

            <div className="gold-line" />

            <p>
              Tell us what you're trying to build, automate, create,
              or improve.
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-info">
              <span className="eyebrow">SCY INTELLIGENCE</span>

              <h3>
                Let's turn your
                <span> idea into something real.</span>
              </h3>

              <p>
                Whether you need an AI application, automation system,
                website, creative campaign, or custom digital solution,
                let's discuss what you're trying to achieve.
              </p>

              <div className="contact-details">
                <a href="mailto:scyintelligence@gmail.com">
                  <span>EMAIL</span>
                  scyintelligence@gmail.com
                </a>

                <button
                  onClick={() =>
                    openWhatsApp(
                      "Hello SCY Intelligence, I would like to discuss a project."
                    )
                  }
                >
                  <span>WHATSAPP</span>
                  +234 810 334 8891
                </button>

                <div>
                  <span>LOCATION</span>
                  Kwara State, Nigeria
                </div>
              </div>

              <div className="social-links">
                <a
                  href="https://www.facebook.com/scyintelligence"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>

                <a
                  href="https://x.com/ibr50451"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  X
                </a>

                <a
                  href="https://www.instagram.com/airboy3488"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>

                <a
                  href="https://github.com/Ibraheemadebola92-beep"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>

            <div className="contact-form-card">
              {formSubmitted ? (
                <div className="success-message">
                  <div className="success-icon">✓</div>

                  <h3>Message Ready.</h3>

                  <p>
                    Your project information has been prepared.
                    Contact SCY Intelligence through WhatsApp or email
                    to continue the conversation.
                  </p>

                  <button
                    className="btn btn-gold"
                    onClick={() => setFormSubmitted(false)}
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                    setFormSubmitted(true);
                  }}
                >
                  <label htmlFor="name">Full Name</label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    required
                  />

                  <label htmlFor="email">Email</label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                  />

                  <label htmlFor="service">Service Needed</label>

                  <select id="service" name="service">
                    <option>AI Engineering</option>
                    <option>AI Agents</option>
                    <option>AI Automation</option>
                    <option>Website Development</option>
                    <option>Prompt Engineering</option>
                    <option>AI Video Generation</option>
                    <option>AI Image Generation</option>
                    <option>Graphic Design & Branding</option>
                    <option>Digital Marketing & Social Media</option>
                    <option>AI Content Creation</option>
                    <option>Other</option>
                  </select>

                  <label htmlFor="message">Project Description</label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us what you want to build..."
                    required
                  />

                  <button
                    type="submit"
                    className="btn btn-primary form-submit"
                  >
                    Start My Project →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* AI ASSISTANT PREVIEW */}
      <section id="ai-assistant" className="assistant-section">
        <div className="container">
          <div className="assistant-card">
            <div className="assistant-icon">✦</div>

            <div className="assistant-content">
              <span className="eyebrow">COMING SOON</span>

              <h2>
                Meet the
                <span> SCY AI Assistant.</span>
              </h2>

              <p>
                An intelligent assistant designed to help visitors
                understand SCY Intelligence services, explore solutions,
                and start projects faster.
              </p>

              <button
                className="btn btn-gold"
                onClick={() =>
                  openWhatsApp(
                    "Hello SCY Intelligence, I would like to learn more about the SCY AI Assistant."
                  )
                }
              >
                Talk To SCY →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <button
                className="logo"
                onClick={() => scrollToSection("home")}
              >
                SCY<span>Intelligence</span>
              </button>

              <p>
                AI engineering, automation, creative technology, and
                digital solutions for the next generation of businesses.
              </p>

              <p className="footer-location">
                Kwara State, Nigeria
              </p>
            </div>

            <div>
              <h4>Navigation</h4>

              <button onClick={() => scrollToSection("home")}>
                Home
              </button>

              <button onClick={() => scrollToSection("about")}>
                About
              </button>

              <button onClick={() => scrollToSection("services")}>
                Services
              </button>

              <button onClick={() => scrollToSection("projects")}>
                Projects
              </button>

              <button onClick={() => scrollToSection("pricing")}>
                Pricing
              </button>

              <button onClick={() => scrollToSection("contact")}>
                Contact
              </button>
            </div>

            <div>
              <h4>Services</h4>

              <button onClick={() => scrollToSection("services")}>
                AI Engineering
              </button>

              <button onClick={() => scrollToSection("services")}>
                AI Agents
              </button>

              <button onClick={() => scrollToSection("services")}>
                Automation
              </button>

              <button onClick={() => scrollToSection("services")}>
                Website Development
              </button>

              <button onClick={() => scrollToSection("services")}>
                AI Content
              </button>
            </div>
          </div>

          <div className="footer-bottom">
            <p>
              © {new Date().getFullYear()} SCY Intelligence. All rights
              reserved.
            </p>

            <p>
              Built with AI • Engineering • Creativity
            </p>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <button
        className="whatsapp-float"
        onClick={() =>
          openWhatsApp(
            "Hello SCY Intelligence, I would like to start a project."
          )
        }
        aria-label="Contact SCY Intelligence on WhatsApp"
      >
        <span>◉</span>
      </button>
    </main>
  );
                      }
