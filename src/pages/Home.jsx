import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { ImpactStats } from '../components/ImpactCounter';
import { ProgramCard, FeatureCard } from '../components/Cards';
import { organizationInfo } from '../data/organizationData';
import { thematicAreas } from '../data/programsData';
import { FaHandHoldingHeart, FaUsers, FaLightbulb, FaHandshake } from 'react-icons/fa';

const Home = () => {
  // Impact Statistics for Counter
  const impactStatistics = [
    { value: 20, label: "Years of Experience", animated: true, suffix: "+" },
    { value: 50000, label: "Members Impacted", animated: true, suffix: "+" },
    { value: 100, label: "Villages Covered", animated: true, suffix: "+" },
    { value: 500, label: "SHGs/Groups Strengthened", animated: true, suffix: "+" },
    { value: 18, label: "Districts in Odisha", animated: true }
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
        description="Building sustainable livelihoods and fostering self-reliance through innovative programs reaching 165,000+ families across 18 districts"
        primaryButton={{ text: "Our Impact", link: "/impact-stories" }}
        secondaryButton={{ text: "Get Involved", link: "/get-involved" }}
        images={[
          "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600",
          "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1600",
          "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1600",
          "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=1600"
        ]}
      />

      {/* Mission & Vision Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-primary font-semibold mb-2 uppercase tracking-wider">
              {organizationInfo.tagline}
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
              Who We Are
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Our Mission */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {organizationInfo.mission}
              </p>
            </div>

            {/* Our Vision */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-heading font-bold text-secondary mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {organizationInfo.vision}
              </p>
            </div>
          </div>

          {/* Core Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {organizationInfo.coreValues.map((value, index) => (
              <FeatureCard
                key={index}
                icon={<div className="text-primary text-4xl">{valueIcons[value.title] || <FaHandHoldingHeart />}</div>}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <ImpactStats stats={impactStatistics} />

      {/* Featured Programs Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Our Work
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We work across 8 thematic areas to create sustainable impact in rural communities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {featuredPrograms.map((program) => (
              <ProgramCard
                key={program.id}
                title={program.title}
                icon={program.icon}
                description={program.description}
                targetGroups={program.targetGroups}
                approach={program.approach}
                outcome={program.outcome}
                link="/our-work"
              />
            ))}
          </div>

          <div className="text-center">
            <Link to="/our-work" className="btn-primary inline-block">
              Explore All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Key Achievements Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Key Achievements
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence has led to significant milestones in rural development
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* List of high-level achievements */}
            <div className="space-y-6">
              <h3 className="text-2xl font-heading font-bold text-gray-800 mb-6">Overview</h3>
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <ul className="space-y-4">
                  {organizationInfo.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center mr-4 mt-1">
                        <FaHandshake size={12} />
                      </span>
                      <span className="text-gray-700 font-medium">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Detailed Achievement Highlight */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="bg-primary p-6 text-white">
                <h3 className="text-2xl font-heading font-bold">Spotlight: Capacity Building</h3>
                <p className="text-primary-light mt-2 text-sm">Of Community Institutions</p>
              </div>
              <div className="p-8">
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "Capacity building has remained a cross-cutting focus to ensure long-term sustainability of programmes and institutions."
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 border-b pb-2">Key Interventions</h4>
                    <ul className="space-y-2">
                      {["Training on governance, finance, and compliance", "Exposure visits and peer learning", "Leadership development for youth, women, and producer leaders"].map((item, i) => (
                        <li key={i} className="text-xs text-gray-600 flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 border-b pb-2">Measurable Impact</h4>
                    <ul className="space-y-2">
                      {[
                        "50+ training programmes/workshops conducted",
                        "1,200+ community members trained",
                        "Improved institutional performance (meetings, records, compliance)",
                        "Increased participation of women and youth in leadership roles"
                      ].map((item, i) => (
                        <li key={i} className="text-xs text-gray-600 flex items-start">
                          <span className="text-accent mr-2">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <div className="bg-secondary/5 p-4 rounded-lg">
                    <span className="text-xs font-bold text-secondary uppercase tracking-wider">Overall Outcome</span>
                    <p className="text-sm text-gray-700 mt-1">
                      Community institutions became more confident, self-reliant, and capable of managing development initiatives independently.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section-padding bg-secondary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Be Part of the Change
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join us in empowering rural communities and creating sustainable livelihoods
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/get-involved" className="btn-primary inline-block">
              Donate Now
            </Link>
            <Link
              to="/get-involved"
              className="btn-outline bg-white/10 border-white text-white hover:bg-white hover:text-secondary inline-block"
            >
              Volunteer With Us
            </Link>
            <Link
              to="/contact"
              className="btn-outline bg-white/10 border-white text-white hover:bg-white hover:text-secondary inline-block"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
