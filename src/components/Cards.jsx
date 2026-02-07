import { Link } from 'react-router-dom';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';

// Program Card Component
export const ProgramCard = ({ title, image, description, targetGroups, approach, outcome, link }) => {
  return (
    <div className="bg-white rounded-3xl border border-primary/5 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group h-full flex flex-col">
      {/* Image Header with Gradient Overlay */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
        <div className="absolute bottom-6 left-8 right-8">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-white leading-tight">
            {title}
          </h3>
        </div>
      </div>

      <div className="p-8 flex-grow flex flex-col">
        <p className="text-gray-700 text-lg leading-relaxed mb-8">{description}</p>

        {approach && approach.length > 0 && (
          <div className="mb-8">
            <span className="text-xs font-bold text-accent uppercase tracking-[0.2em] block mb-4">Our Strategic Approach</span>
            <ul className="space-y-3">
              {approach.map((item, index) => (
                <li key={index} className="text-base text-gray-800 flex items-start">
                  <span className="text-accent mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></span>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {outcome && (
          <div className="mb-8 p-6 bg-primary/5 rounded-2xl border-l-4 border-accent relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full -mr-12 -mt-12"></div>
            <span className="text-xs font-bold text-primary uppercase tracking-[0.2em] block mb-2 relative z-10">Desired Outcome</span>
            <p className="text-lg text-primary font-bold italic relative z-10 leading-snug">"{outcome}"</p>
          </div>
        )}

        {targetGroups && (
          <div className="mb-8">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] block mb-2">Primary Beneficiaries</span>
            <p className="text-sm text-gray-600 font-medium">{targetGroups}</p>
          </div>
        )}

        {link && (
          <div className="mt-auto pt-6 border-t border-gray-100">
            <Link
              to={link}
              className="inline-flex items-center text-primary font-bold text-sm uppercase tracking-widest group/link hover:text-accent transition-colors"
            >
              Explore Full Program Detail 
              <FaArrowRight className="ml-3 group-hover/link:translate-x-2 transition-transform" size={12} />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

// Impact Stat Card Component
export const ImpactStatCard = ({ title, value, description, icon }) => {
  return (
    <div className="card text-center">
      <div className="p-6">
        <div className="text-4xl mb-3">{icon}</div>
        <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">
          {value}
        </div>
        <h4 className="text-lg font-semibold text-gray-900 mb-2">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

// Story Card Component
export const StoryCard = ({ title, name, location, story, image, category, impact }) => {
  return (
    <div className="bg-white rounded-[2.5rem] border border-primary/5 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col h-full">
      {/* Image Section */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-6 left-6">
          <span className="bg-accent text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full shadow-lg shadow-accent/20">
            {category}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Content Section */}
      <div className="p-10 flex flex-col flex-grow">
        <div className="mb-6">
          <h3 className="text-2xl font-heading font-bold text-primary mb-2 leading-tight group-hover:text-accent transition-colors">
            {title}
          </h3>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xs">
              {name.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-bold text-gray-800">{name}</p>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{location}</p>
            </div>
          </div>
        </div>

        <p className="text-gray-600 leading-relaxed mb-8 flex-grow italic">
          "{story}"
        </p>

        {/* Impact Badge */}
        <div className="mt-auto pt-6 border-t border-gray-100">
          <div className="bg-primary/5 rounded-2xl p-4 border border-primary/10 flex items-center gap-4">
            <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-accent">
              <FaCheckCircle size={18} />
            </div>
            <div>
              <p className="text-[10px] font-black text-primary uppercase tracking-widest leading-none mb-1">Key Impact</p>
              <p className="text-sm font-bold text-gray-800 leading-none">{impact}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Feature Card Component (for About Us, Services, etc.)
export const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl p-8 border border-primary/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden h-full">
      {/* Accent top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-primary group-hover:bg-accent transition-colors duration-300"></div>
      
      <div className="text-4xl mb-6 flex justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-heading font-bold text-gray-900 mb-4 text-center">
        {title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed text-center">
        {description}
      </p>
    </div>
  );
};

// Team Member Card Component
export const TeamCard = ({ name, designation, role }) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm p-8 rounded-[2rem] border border-white/10 hover:bg-white hover:text-primary transition-all duration-500 group">
      <div className="w-20 h-20 bg-accent rounded-2xl mb-6 flex items-center justify-center text-white text-3xl font-heading font-bold group-hover:scale-110 transition-transform duration-500">
        {name.charAt(0)}
      </div>
      <h3 className="text-2xl font-heading font-bold mb-2 transition-colors duration-500 group-hover:text-primary">
        {name}
      </h3>
      <p className="text-secondary-light font-bold text-xs uppercase tracking-widest mb-4 group-hover:text-accent">
        {designation}
      </p>
      {role && (
        <div className="pt-4 border-t border-white/10 group-hover:border-primary/10">
          <p className="text-xs font-medium opacity-70 group-hover:opacity-100 italic">
            Expertise: {role}
          </p>
        </div>
      )}
    </div>
  );
};

// Initiative Card Component
export const InitiativeCard = ({ title, description, features, impact }) => {
  return (
    <div className="card">
      <div className="p-6">
        <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>

        {features && features.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Features:</h4>
            <ul className="space-y-1">
              {features.map((feature, index) => (
                <li key={index} className="text-xs text-gray-600 flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {impact && impact.length > 0 && (
          <div className="pt-4 border-t border-gray-200">
            <h4 className="text-sm font-semibold text-gray-800 mb-2">Impact:</h4>
            <ul className="space-y-1">
              {impact.map((item, index) => (
                <li key={index} className="text-xs text-gray-600 flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
