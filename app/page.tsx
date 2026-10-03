// ============================================================
// AGENTIC LANDING PAGE — Md Amzad Hossain
// ============================================================
// Positioned for Forward Deployed Engineer (FDE) recruiters.
// Content source of truth: ../../my_knowledge/
// ============================================================

import { MobileNav } from "@/components/MobileNav";
import {
  CheckIcon,
  ArrowRightIcon,
  TrendingUpIcon,
  MailIcon,
  BeakerIcon,
  BriefcaseIcon,
  SparklesIcon,
  BookOpenIcon,
  UsersIcon,
  BoltIcon,
} from "@/components/Icons";

const EMAIL = "md.amzadhossain@gmail.com";

const experience = [
  {
    company: "PNC Financial Services",
    role: "Solution Architect",
    dates: "Jan 2024 – Present",
    highlight: "FICO decisioning integration on Confluent Kafka — 500K+ events/day, sub-second latency; presents architecture to the LTAC governance council.",
  },
  {
    company: "Cisco Systems",
    role: "AWS Cloud Architect & Solutions Developer",
    dates: "May 2023 – Dec 2023",
    highlight: "Led on-prem → AWS migration of the Entitlement Get-Asset app with Terraform; 40% lower cost, 50% faster responses.",
  },
  {
    company: "Apple Inc",
    role: "Solution Architect",
    dates: "Aug 2020 – Apr 2023",
    highlight: "Pluggable Oracle/MongoDB microservices that enabled BYOD app onboarding with zero deployment downtime; GBI reporting on GraphQL + Kafka.",
  },
  {
    company: "Cisco Systems",
    role: "Sr Technical Specialist / Technical Specialist",
    dates: "May 2017 – Aug 2020",
    highlight: "Marketing Cloud integrations (Salesforce, Eloqua, MuleSoft, Snowflake); led onshore escalations and root-cause analysis for the global People Directory.",
  },
  {
    company: "Cisco India, Sears, Energy Australia, National Nederlanden, Govt. of India",
    role: "Engineer → Senior Software Engineer",
    dates: "2006 – 2017",
    highlight: "Eleven years building Java/J2EE, middleware, and Node.js systems across e-commerce, energy, insurance, and public sector.",
  },
];

const skills = [
  { group: "Backend", items: ["Java 8–17", "Spring Boot 3", "Spring Cloud", "Hibernate/JPA", "Node.js", "Python", "GraphQL", "REST"] },
  { group: "Data & Streaming", items: ["Confluent Kafka", "Oracle", "MongoDB", "MySQL", "SingleStore", "Snowflake"] },
  { group: "Cloud & DevOps", items: ["AWS", "Terraform", "Docker", "Kubernetes", "OpenShift", "Helm", "Jenkins", "ELK / Splunk"] },
  { group: "Frontend", items: ["Angular", "React", "TypeScript"] },
  { group: "AI", items: ["Generative AI", "AWS ML Practitioner", "GitHub Copilot", "AI ↔ microservices integration"] },
];

export default function Home() {
  return (
    <>
      {/* Skip link for accessibility - allows keyboard users to skip navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:outline-none"
      >
        Skip to main content
      </a>
      <main id="main-content" className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans">
      {/* ============================================================ */}
      {/* NAVIGATION - Fixed header with logo and nav links            */}
      {/* ============================================================ */}
      <nav aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#main-content" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white font-bold text-xs">
              MAH
            </div>
            <span className="text-xl font-bold tracking-tight font-display text-slate-900 dark:text-white">
              Md Amzad Hossain
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              About
            </a>
            <a href="#approach" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Approach
            </a>
            <a href="#work" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Impact
            </a>
            <a href="#experience" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Experience
            </a>
            <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Contact
            </a>
          </div>

          {/* Mobile Navigation */}
          <MobileNav />
        </div>
      </nav>

      {/* ============================================================ */}
      {/* HERO SECTION - Main headline and call to action              */}
      {/* ============================================================ */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        {/* Background gradient blurs */}
        <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-blue-100/50 dark:bg-blue-900/10 rounded-full blur-3xl opacity-70 translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-indigo-100/50 dark:bg-indigo-900/10 rounded-full blur-3xl opacity-70 -translate-x-1/3 translate-y-1/4"></div>

        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Open to Forward Deployed Engineer roles · Open to relocate
            </div>

            {/* Main headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight text-slate-900 dark:text-white mb-6">
              Hi, I&apos;m{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Amzad
              </span>
            </h1>

            {/* Title/Specialty */}
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-4 font-medium">
              Solution Architect &amp; Back-end Engineer · 19+ years
            </p>

            {/* Tagline */}
            <p className="text-lg text-slate-500 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
              I solve complex technical problems, work directly with the people who have them, and build the solution myself —
              from the architecture workshop to the production fix.
            </p>

            {/* Fortune 500 proof */}
            <p className="text-sm uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-8">
              Delivered at <span className="font-semibold text-slate-700 dark:text-slate-200">Apple</span> ·{' '}
              <span className="font-semibold text-slate-700 dark:text-slate-200">Cisco</span> ·{' '}
              <span className="font-semibold text-slate-700 dark:text-slate-200">PNC</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`mailto:${EMAIL}`} className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40">
                Email Me
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </a>
              <a href="#work" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 rounded-xl transition-all">
                See the Impact
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* ABOUT/AUTHORITY SECTION - Credentials and trust signals      */}
      {/* ============================================================ */}
      <section id="about" className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 dark:text-white mb-4">
                An Architect Who Still Ships
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Two decades of enterprise systems across banking, consumer tech, networking, energy, insurance, and government —
                now focused on putting that depth in front of customers.
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              <div className="text-center p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">19+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Years Building Enterprise Systems</div>
              </div>
              <div className="text-center p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">500K+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Kafka Events / Day at PNC</div>
              </div>
              <div className="text-center p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">40%</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Cloud Cost Cut at Cisco</div>
              </div>
              <div className="text-center p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">99.9%</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Message Delivery Reliability</div>
              </div>
            </div>

            {/* Credentials */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start gap-4 p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0">
                  <BeakerIcon />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Education</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    MS, Computer Science &amp; Engineering — CSTU (in progress)
                    <br />
                    MCA — West Bengal University of Technology
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 flex-shrink-0">
                  <BriefcaseIcon />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Experience</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Solution Architect at PNC and Apple; AWS Cloud Architect at Cisco. Led onshore/offshore teams.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center text-amber-600 dark:text-amber-400 flex-shrink-0">
                  <SparklesIcon />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Certifications</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    ACE (Architect Career Enablement) · AWS Certified Cloud Practitioner · AWS Certified Machine Learning Practitioner
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* APPROACH SECTION - How I work as a Forward Deployed Engineer */}
      {/* ============================================================ */}
      <section id="approach" className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 dark:text-white mb-4">
                How I Work With Customers
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                The Forward Deployed loop I&apos;ve been running for years — just with different titles
              </p>
            </div>

            {/* Approach grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 1 - Discover */}
              <div className="group bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all hover:shadow-xl hover:shadow-blue-500/10">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white mb-6">
                  <UsersIcon />
                </div>
                <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-1">01</div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Sit With the Problem</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">Get Dev, DevOps, Security, and Business in one room and agree on what actually needs to be built.</p>
                <ul className="space-y-3">
                  <li className="flex items-start text-sm text-slate-600 dark:text-slate-400">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    Architecture workshops in Miro &amp; Mural
                  </li>
                  <li className="flex items-start text-sm text-slate-600 dark:text-slate-400">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    Requirements → user stories → sprint plans
                  </li>
                  <li className="flex items-start text-sm text-slate-600 dark:text-slate-400">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    Early risk identification &amp; mitigation
                  </li>
                </ul>
              </div>

              {/* Step 2 - Build (highlighted) */}
              <div className="relative group bg-white dark:bg-slate-800 rounded-2xl p-8 border-2 border-blue-500 shadow-xl shadow-blue-500/10">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Hands-on
                </div>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white mb-6">
                  <BookOpenIcon />
                </div>
                <div className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-1">02</div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Design It, Then Build It</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">I write the HLD/LLD and the code — Java, Spring Boot, Kafka, AWS, and the UI when it&apos;s needed.</p>
                <ul className="space-y-3">
                  <li className="flex items-start text-sm text-slate-600 dark:text-slate-400">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    Event-driven microservices &amp; API contracts
                  </li>
                  <li className="flex items-start text-sm text-slate-600 dark:text-slate-400">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    Integrations with FICO, Fiserv, Salesforce, Eloqua
                  </li>
                  <li className="flex items-start text-sm text-slate-600 dark:text-slate-400">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    Angular &amp; React front ends
                  </li>
                  <li className="flex items-start text-sm text-slate-600 dark:text-slate-400">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    85%+ test coverage with JUnit &amp; Mockito
                  </li>
                </ul>
              </div>

              {/* Step 3 - Deploy & own */}
              <div className="group bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all hover:shadow-xl hover:shadow-blue-500/10">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white mb-6">
                  <BoltIcon />
                </div>
                <div className="text-sm font-semibold text-amber-600 dark:text-amber-400 mb-1">03</div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Deploy &amp; Own It</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">Ship it into the customer&apos;s real environment and stay until it works under load.</p>
                <ul className="space-y-3">
                  <li className="flex items-start text-sm text-slate-600 dark:text-slate-400">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    Cloud migrations with Terraform &amp; Helm
                  </li>
                  <li className="flex items-start text-sm text-slate-600 dark:text-slate-400">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    Docker, Kubernetes &amp; OpenShift rollouts
                  </li>
                  <li className="flex items-start text-sm text-slate-600 dark:text-slate-400">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    Production escalations &amp; root-cause analysis
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* WORK/CASE STUDIES - Show your best projects                  */}
      {/* ============================================================ */}
      <section id="work" className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 dark:text-white mb-4">
                Impact in the Field
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Business problem in, working system out
              </p>
            </div>

            {/* Case studies grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Case Study 1 */}
              <div className="group bg-slate-50 dark:bg-slate-800 rounded-2xl overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                  <span className="text-white text-5xl font-bold opacity-30">PNC</span>
                </div>
                <div className="p-6">
                  <div className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2">Banking · Credit Decisioning</div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Real-Time FICO Decisioning Integration</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                    Architected the integration layer between FICO Decision Modeler, Fiserv, and internal data sourcing — API contracts,
                    transformation pipelines, and Kafka streaming across 5+ services.
                  </p>
                  <div className="flex items-center gap-2 text-green-600 dark:text-green-400 font-semibold">
                    <TrendingUpIcon />
                    500K+ events/day, sub-second latency
                  </div>
                </div>
              </div>

              {/* Case Study 2 */}
              <div className="group bg-slate-50 dark:bg-slate-800 rounded-2xl overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                  <span className="text-white text-5xl font-bold opacity-30">Cisco</span>
                </div>
                <div className="p-6">
                  <div className="text-sm text-purple-600 dark:text-purple-400 font-medium mb-2">Enterprise · Cloud Migration</div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">On-Prem to AWS, End to End</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                    Led the Entitlement Get-Asset migration: VPC, auto-scaling, RDS, and serverless Lambda via Terraform, plus a new
                    Angular SPA replacing the legacy monolith UI.
                  </p>
                  <div className="flex items-center gap-2 text-green-600 dark:text-green-400 font-semibold">
                    <TrendingUpIcon />
                    40% lower cost · 50% faster
                  </div>
                </div>
              </div>

              {/* Case Study 3 */}
              <div className="group bg-slate-50 dark:bg-slate-800 rounded-2xl overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                  <span className="text-white text-5xl font-bold opacity-30">Apple</span>
                </div>
                <div className="p-6">
                  <div className="text-sm text-amber-600 dark:text-amber-400 font-medium mb-2">Consumer Tech · Platform</div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Pluggable Data Layer for BYOD Apps</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                    Designed Spring Boot microservices that run on Oracle or MongoDB interchangeably, letting teams onboard their own
                    applications onto shared infrastructure.
                  </p>
                  <div className="flex items-center gap-2 text-green-600 dark:text-green-400 font-semibold">
                    <TrendingUpIcon />
                    Zero cloud deployment downtime
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* EXPERIENCE & SKILLS - Career timeline and toolkit            */}
      {/* ============================================================ */}
      <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 dark:text-white mb-4">
                Experience &amp; Toolkit
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                From Java programmer in 2006 to Solution Architect today
              </p>
            </div>

            <div className="grid lg:grid-cols-5 gap-12">
              {/* Timeline */}
              <ol className="lg:col-span-3 relative border-l-2 border-slate-200 dark:border-slate-800 space-y-8 ml-2">
                {experience.map((job) => (
                  <li key={`${job.company}-${job.dates}`} className="pl-6 relative">
                    <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-blue-600 border-4 border-slate-50 dark:border-slate-950"></span>
                    <div className="text-sm text-slate-500 dark:text-slate-400 mb-1">{job.dates}</div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">{job.role}</h3>
                    <div className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">{job.company}</div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{job.highlight}</p>
                  </li>
                ))}
              </ol>

              {/* Skills */}
              <div className="lg:col-span-2 space-y-6">
                {skills.map((s) => (
                  <div key={s.group}>
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-3">{s.group}</h3>
                    <div className="flex flex-wrap gap-2">
                      {s.items.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-full"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FAQ SECTION - Questions recruiters ask                       */}
      {/* ============================================================ */}
      <section id="faq" className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            {/* Section header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 dark:text-white mb-4">
                Recruiter Quick Answers
              </h2>
            </div>

            {/* FAQ items */}
            <div className="space-y-4">
              <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  Why move from Solution Architect to Forward Deployed Engineer?
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Because the role combines the three things I enjoy most: solving complex technical problems, working directly with
                  customers, and actually building the solution. I&apos;ve done all three as an architect — FDE makes it the whole job.
                </p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  Are you still hands-on?
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Yes. At PNC I write and tune the Kafka producers and consumers myself, and at Cisco I built the Lambda services and the
                  Angular front end for the migration I led.
                </p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  Where are you located?
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Santa Clara, CA — and open to relocating.
                </p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  What about AI?
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  I&apos;m an AWS Certified Machine Learning Practitioner, currently in the MSCSE program at CSTU, and have applied
                  Generative AI to API development, code optimization, and documentation — including how AI services integrate with
                  enterprise microservices. This site itself was built and containerized with AI-assisted development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CONTACT SECTION - How to reach you (email only)              */}
      {/* ============================================================ */}
      <section id="contact" className="relative py-20 bg-slate-50 dark:bg-slate-950 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-blue-100/30 dark:bg-blue-900/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 dark:text-white mb-4">
              Hiring a Forward Deployed Engineer?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              Send me the problem your customers are stuck on. I&apos;ll reply with how I&apos;d approach it.
            </p>

            {/* Contact option */}
            <div className="flex justify-center">
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all shadow-lg shadow-blue-500/25"
              >
                <MailIcon className="w-5 h-5 mr-2" />
                {EMAIL}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FOOTER - Copyright                                           */}
      {/* ============================================================ */}
      <footer className="py-8 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-slate-600 dark:text-slate-400">
              © {new Date().getFullYear()} Md Amzad Hossain. All rights reserved.
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400">
              Santa Clara, CA · Built with Next.js &amp; Docker
            </div>
          </div>
        </div>
      </footer>
    </main>
    </>
  );
}
