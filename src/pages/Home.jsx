import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import Hero from '../components/Hero';
import NewsMarquee from '../components/NewsMarquee';
import { ImpactStats } from '../components/ImpactCounter';
import { ProgramCard, FeatureCard } from '../components/Cards';
import TimelineSection from '../components/TimelineSection';
import DonationSection from '../components/DonationSection';
import { organizationInfo } from '../data/organizationData';
import { thematicAreas } from '../data/programsData';
import { FaHandHoldingHeart, FaUsers, FaLightbulb, FaHandshake, FaArrowRight } from 'react-icons/fa';
import { RiBankLine, RiTeamLine, RiLineChartLine, RiSeedlingLine, RiUserStarLine, RiFocus2Line } from 'react-icons/ri';

const Home = () => {
  // Impact Statistics for Counter
  const impactStatistics = [
    { value: 23, label: "Years of Excellence", animated: true, suffix: "+" },
    { value: 190000, label: "Households Impacted", animated: true, suffix: "+" },
    { value: 1560, label: "Revenue Villages Covered", animated: true, suffix: "+" },
    { value: 14375, label: "Women SHGs Strengthened", animated: true, suffix: "+" },
    { value: 18, label: "Districts presence in Odisha", animated: true }
  ];

  // Featured Programs (showing first 6)
  const featuredPrograms = thematicAreas.slice(0, 6);

  // Icon mapping for Core Values
  const valueIcons = {
    "Inclusion": <FaHandHoldingHeart />,
    "Community-Driven": <FaUsers />,
    "Innovation": <FaLightbulb />,
    "Collaboration": <FaHandshake />
  };

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Empowering Rural Communities Across Odisha"
        subtitle="Since 2002"
        description="Building sustainable livelihoods and fostering self-reliance through innovative programs reaching 190,000+ families across 18 districts"
        primaryButton={{ text: "Our Impact", link: "/impact-stories" }}
        secondaryButton={{ text: "Get Involved", link: "/get-involved" }}
        images={[
          "/images/assets/slideshow-1.jpg",
          "/images/assets/slideshow-2.jpg",
          "/images/assets/slideshow-3.jpg",
          "/images/assets/slideshow-4.jpg"
        ]}
      />

      {/* News & Announcements Marquee */}
      <NewsMarquee />

      {/* Mission & Vision Section - "Who We Are" */}
      <section className="section-padding relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl -ml-48 -mb-48"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
            <div className="max-w-2xl">
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-accent font-bold mb-3 uppercase tracking-widest text-sm"
              >
                {organizationInfo.tagline}
              </motion.p>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-heading font-bold text-primary leading-tight"
              >
                Who We Are & <br /><span className="text-accent">Our Purpose</span>
              </motion.h2>
            </div>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="hidden lg:block w-32 h-px bg-primary/20 mb-4"
            ></motion.div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 mb-24">
            {/* Our Mission */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6 relative"
            >
              <div className="bg-white p-10 rounded-2xl shadow-xl shadow-primary/5 border border-primary/5 relative z-10">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                  <FaHandHoldingHeart size={30} />
                </div>
                <h3 className="text-3xl font-heading font-bold text-primary mb-6">
                  Our Mission
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed italic">
                  "{organizationInfo.mission}"
                </p>
              </div>
              {/* Decorative background box */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-primary/5 rounded-2xl -z-0"></div>
            </motion.div>

            {/* Our Vision */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6 lg:mt-12 relative"
            >
              <div className="bg-primary p-10 rounded-2xl shadow-xl shadow-primary/20 relative z-10 text-white">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-white mb-6">
                  <FaLightbulb size={30} />
                </div>
                <h3 className="text-3xl font-heading font-bold mb-6">
                  Our Vision
                </h3>
                <p className="text-white/90 text-lg leading-relaxed italic">
                  "{organizationInfo.vision}"
                </p>
              </div>
              {/* Decorative background box */}
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-accent/10 rounded-2xl -z-0"></div>
            </motion.div>
          </div>

          {/* Core Values Label */}
          <div className="text-center mb-12">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-[0.3em] mb-4">The Pillars of MISSION</h3>
            <div className="h-px w-20 bg-accent mx-auto"></div>
          </div>

          {/* Core Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {organizationInfo.coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <FeatureCard
                  icon={<div className="text-primary group-hover:text-accent transition-colors duration-300">{valueIcons[value.title] || <FaHandHoldingHeart />}</div>}
                  title={value.title}
                  description={value.description}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <ImpactStats stats={impactStatistics} />

      {/* Featured Programs Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
                Our Thematic <span className="text-accent">Areas</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We work across multiple integrated domains to create sustainable impact in rural communities of Odisha.
              </p>
            </div>
            <Link to="/our-work" className="btn-primary flex items-center gap-2 group">
              View All Programs
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredPrograms.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProgramCard
                  title={program.title}
                  image={program.image}
                  description={program.description}
                  targetGroups={program.targetGroups}
                  approach={program.approach}
                  outcome={program.outcome}
                  slug={program.slug}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programme Timeline Section */}
      <TimelineSection />

      {/* Key Achievements Section - Redesigned as a Gallery */}
      <section className="bg-primary py-24 relative overflow-hidden">
        {/* Decorative Watermark */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none">
          <h2 className="text-[20vw] font-heading font-black leading-none text-white whitespace-nowrap">
            SUCCESS STORIES
          </h2>
        </div>

        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Left Column: Sticky Title & Big Stat */}
            <div className="lg:w-1/3">
              <div className="lg:sticky lg:top-32">
                <motion.p 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-accent font-bold mb-4 uppercase tracking-[0.3em] text-sm"
                >
                  Key Achievements
                </motion.p>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-6xl font-heading font-bold text-white mb-8 leading-tight"
                >
                  Milestones of <br />
                  <span className="text-secondary-light">Impact</span>
                </motion.h2>
                
                <div className="h-px w-full bg-white/10 mb-8"></div>
                
                <div className="space-y-8">
                  <div className="flex items-center gap-6 group">
                    <div className="text-5xl font-heading font-bold text-accent group-hover:scale-110 transition-transform">136</div>
                    <div className="text-white/60 text-sm font-bold uppercase tracking-widest leading-snug">
                      Projects <br />Successfully <br />Executed
                    </div>
                  </div>
                  <div className="flex items-center gap-6 group">
                    <div className="text-5xl font-heading font-bold text-secondary-light group-hover:scale-110 transition-transform">18</div>
                    <div className="text-white/60 text-sm font-bold uppercase tracking-widest leading-snug">
                      Districts <br />Actively <br />Served
                    </div>
                  </div>
                </div>

                <div className="mt-12 hidden lg:block">
                  <p className="text-white/40 text-sm max-w-xs leading-relaxed italic">
                    "Our journey is marked by the resilience of the communities we serve and the dedication of our field teams."
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Scrollable Cards (Icon Based) */}
            <div className="lg:w-2/3 space-y-8">
              {/* High-level Achievement Cards */}
              {[
                {
                  title: "NABARD-Supported Success",
                  desc: "Successful implementation of various NABARD-supported livelihood and infrastructure projects across Odisha.",
                  icon: <RiBankLine />,
                  tag: "Institutional Trust",
                  color: "text-primary"
                },
                {
                  title: "Strengthening Collectives",
                  desc: "Formation and strategic capacity building of multiple Farmer Producer Organizations (FPOs) and producer collectives.",
                  icon: <RiTeamLine />,
                  tag: "Community Power",
                  color: "text-accent"
                },
                {
                  title: "Market Access & Growth",
                  desc: "Established robust market linkages for rural products, connecting local producers to national distribution channels.",
                  icon: <RiLineChartLine />,
                  tag: "Economic Inclusion",
                  color: "text-primary"
                },
                {
                  title: "Sustainable Innovation",
                  desc: "Adoption of technology-driven solutions in agriculture and livelihoods to enhance efficiency and scalability.",
                  icon: <RiSeedlingLine />,
                  tag: "Innovation",
                  color: "text-accent"
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="bg-slate-50 rounded-3xl overflow-hidden flex flex-col md:flex-row h-auto shadow-xl group hover:shadow-2xl transition-all duration-500 border border-slate-100"
                >
                  {/* Icon Box with Ghost Effect */}
                  <div className="md:w-1/3 bg-white p-8 flex items-center justify-center relative overflow-hidden border-r border-slate-100">
                    {/* Ghost Icon */}
                    <div className={`absolute -bottom-4 -right-4 text-8xl opacity-[0.03] ${item.color} transform rotate-12 group-hover:rotate-0 transition-transform duration-700`}>
                      {item.icon}
                    </div>
                    {/* Foreground Icon */}
                    <div className={`w-20 h-20 rounded-2xl bg-white shadow-lg flex items-center justify-center text-4xl ${item.color} relative z-10 border border-primary/5 group-hover:bg-primary group-hover:text-white transition-all duration-500`}>
                      {item.icon}
                    </div>
                  </div>

                  <div className="md:w-2/3 p-10 flex flex-col justify-center relative">
                    <div className="mb-4">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Detailed Highlight - Capacity Building */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-accent rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl"
              >
                {/* Large Ghost Icon for Background */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30rem] text-white opacity-[0.05] pointer-events-none">
                  <RiUserStarLine />
                </div>
                
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white text-3xl">
                        <RiFocus2Line />
                      </div>
                      <h3 className="text-3xl md:text-4xl font-heading font-bold italic">Strategic Focus</h3>
                    </div>
                    <div className="px-5 py-2 bg-white/10 backdrop-blur-md rounded-xl text-[10px] font-bold uppercase tracking-[0.2em] border border-white/10">
                      Capacity Building Spotlight
                    </div>
                  </div>
                  
                  <p className="text-white text-2xl font-heading font-medium leading-relaxed italic mb-12 max-w-3xl border-l-4 border-white/30 pl-8">
                    "We empower community leaders to become the primary architects of their own sustainable development."
                  </p>

                  <div className="grid md:grid-cols-2 gap-12">
                    <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
                      <h4 className="text-secondary-light font-bold uppercase tracking-[0.2em] text-xs mb-6 flex items-center gap-2">
                        <span className="w-2 h-2 bg-secondary-light rounded-full"></span>
                        Key Interventions
                      </h4>
                      <ul className="space-y-4">
                        {[
                          "Governance & financial compliance",
                          "Exposure visits & peer learning",
                          "Leadership training for women & youth"
                        ].map((li, i) => (
                          <li key={i} className="flex items-start gap-4 text-sm font-medium text-white/90">
                            <span className="text-secondary-light mt-0.5">•</span>
                            {li}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
                      <h4 className="text-secondary-light font-bold uppercase tracking-[0.2em] text-xs mb-6 flex items-center gap-2">
                        <span className="w-2 h-2 bg-secondary-light rounded-full"></span>
                        Measurable Impact
                      </h4>
                      <ul className="space-y-4">
                        {[
                          "50+ intensive workshops conducted",
                          "1,200+ community leaders trained",
                          "Drastic improvement in record-keeping",
                          "Significant rise in youth leadership"
                        ].map((li, i) => (
                          <li key={i} className="flex items-start gap-4 text-sm font-medium text-white/90">
                            <span className="text-secondary-light mt-0.5">✓</span>
                            {li}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <DonationSection />

      {/* Supporting Partners Section */}
      <section className="py-20 bg-white border-t border-primary/5">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-accent font-bold uppercase tracking-[0.3em] text-xs mb-4">Our Ecosystem</p>
            <h2 className="text-3xl font-heading font-bold text-primary">Supporting Partners</h2>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 hover:opacity-100 transition-opacity duration-500">
            {organizationInfo.partners.slice(0, 12).map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="h-12 md:h-16 w-auto flex items-center justify-center grayscale hover:grayscale-0 transition-all"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="h-full w-auto object-contain"
                />
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/about" className="text-sm font-bold text-primary/50 hover:text-accent transition-colors flex items-center justify-center gap-2 group">
              View All 28+ Partners
              <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-primary-dark relative overflow-hidden">
        {/* Background Decorative Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-primary-light)_0%,_transparent_70%)] opacity-20"></div>
        </div>

        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
              Be Part of the <span className="text-secondary-light">Change</span>
            </h2>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join us in empowering rural communities and creating sustainable livelihoods. Your support makes a real difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/get-involved" className="bg-accent hover:bg-accent-light text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all duration-300 shadow-xl shadow-accent/20 hover:-translate-y-1">
                Support Our Mission
              </Link>
              <Link
                to="/contact"
                className="text-white hover:text-secondary-light font-bold uppercase tracking-widest text-sm transition-colors flex items-center gap-2 group"
              >
                Partner With Us
                <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;