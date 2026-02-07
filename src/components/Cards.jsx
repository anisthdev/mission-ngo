import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

// Program Card Component
export const ProgramCard = ({ title, icon, description, targetGroups, approach, outcome, link }) => {
  return (
    <div className="card group">
      <div className="p-6">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>

        {approach && approach.length > 0 && (
          <div className="mb-4">
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">Our Approach:</span>
            <ul className="mt-2 space-y-1">
              {approach.map((item, index) => (
                <li key={index} className="text-xs text-gray-600 flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {outcome && (
          <div className="mb-4 p-3 bg-accent/5 rounded-lg border-l-2 border-accent">
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">Outcome:</span>
            <p className="text-xs text-gray-700 mt-1 italic">{outcome}</p>
          </div>
        )}

        {targetGroups && (
          <div className="mb-4">
            <span className="text-xs font-semibold text-secondary uppercase tracking-wider">Target Groups:</span>
            <p className="text-xs text-gray-500 mt-1">{targetGroups}</p>
          </div>
        )}
        {link && (
          <Link
            to={link}
            className="inline-flex items-center text-primary font-semibold text-sm group-hover:translate-x-1 transition-transform"
          >
            Learn More <FaArrowRight className="ml-2" size={12} />
          </Link>
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
    <div className="card group">
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">
          {title}
        </h3>
        <div className="mb-3">
          <p className="text-sm font-semibold text-gray-700">{name}</p>
          <p className="text-xs text-gray-500">{location}</p>
        </div>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{story}</p>
        <div className="pt-4 border-t border-gray-200">
          <span className="text-xs font-semibold text-accent">{impact}</span>
        </div>
      </div>
    </div>
  );
};

// Feature Card Component (for About Us, Services, etc.)
export const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="card text-center">
      <div className="p-6">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-lg font-heading font-semibold text-gray-900 mb-3">
          {title}
        </h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

// Team Member Card Component
export const TeamCard = ({ name, designation, role, occupation }) => {
  return (
    <div className="card">
      <div className="p-6">
        <div className="w-20 h-20 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
          <span className="text-2xl font-bold text-primary">
            {name.charAt(0)}
          </span>
        </div>
        <h3 className="text-lg font-heading font-semibold text-gray-900 mb-1">
          {name}
        </h3>
        <p className="text-sm font-semibold text-primary mb-2">{designation}</p>
        {occupation && (
          <p className="text-xs text-gray-500 mb-2">{occupation}</p>
        )}
        {role && (
          <p className="text-sm text-gray-600">{role}</p>
        )}
      </div>
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
