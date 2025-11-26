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
    { value: 168015, label: "Individuals Reached", animated: true, suffix: "+" },
    { value: 165036, label: "Households Impacted", animated: true },
    { value: 1157, label: "Villages Covered", animated: true },
    { value: 18, label: "Districts Served", animated: true },
    { value: 14375, label: "SHGs Formed", animated: true },
    { value: 285, label: "Gram Panchayats", animated: true },
    { value: 2, label: "FPOs Promoted", animated: true },
    { value: 608, label: "Team Members", animated: true }
  ];

  // Featured Programs (showing first 6)
  const featuredPrograms = thematicAreas.slice(0, 6);

  // Core Values
  const coreValues = [
    {
      icon: <FaHandHoldingHeart />,
      title: "Inclusion",
      description: "We serve all communities, prioritizing the most marginalized and underserved"
    },
    {
      icon: <FaUsers />,
      title: "Community-Driven",
      description: "Empowering communities through participatory and sustainable development practices"
    },
    {
      icon: <FaLightbulb />,
      title: "Innovation",
      description: "Adopting new methods to enhance efficiency, effectiveness, and scalability"
    },
    {
      icon: <FaHandshake />,
      title: "Collaboration",
      description: "Working hand-in-hand with government, partners, and local institutions"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Empowering Rural Communities Across Odisha"
        subtitle="Since 2002"
        description="Building sustainable livelihoods and fostering self-reliance through innovative programs reaching 165,000+ families across 18 districts"
        primaryButton={{ text: "Our Impact", link: "/impact-stories" }}
        secondaryButton={{ text: "Get Involved", link: "/get-involved" }}
        backgroundImage="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600"
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
            {coreValues.map((value, index) => (
              <FeatureCard
                key={index}
                icon={<div className="text-primary text-4xl">{value.icon}</div>}
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
      <section className="section-padding bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-8 text-center">
              Key Achievements
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <ul className="space-y-4">
                {organizationInfo.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center mr-4 mt-1">
                      
                    </span>
                    <span className="text-gray-700 text-lg">{achievement}</span>
                  </li>
                ))}
              </ul>
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
