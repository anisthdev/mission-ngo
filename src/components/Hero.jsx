import { Link } from 'react-router-dom';

const Hero = ({
  title,
  subtitle,
  description,
  primaryButton,
  secondaryButton,
  backgroundImage,
  height = "h-[500px] md:h-[600px]"
}) => {
  return (
    <div className={`relative ${height} flex items-center justify-center overflow-hidden`}>
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage || 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600'})`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-white text-center md:text-left">
        <div className="max-w-3xl mx-auto md:mx-0">
          {subtitle && (
            <p className="text-primary-light text-sm md:text-base font-semibold mb-2 uppercase tracking-wider">
              {subtitle}
            </p>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 md:mb-6 leading-tight">
            {title}
          </h1>
          {description && (
            <p className="text-lg md:text-xl text-gray-200 mb-6 md:mb-8 max-w-2xl">
              {description}
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            {primaryButton && (
              <Link
                to={primaryButton.link}
                className="btn-primary inline-block text-center"
              >
                {primaryButton.text}
              </Link>
            )}
            {secondaryButton && (
              <Link
                to={secondaryButton.link}
                className="btn-outline bg-white/10 border-white text-white hover:bg-white hover:text-gray-900 inline-block text-center"
              >
                {secondaryButton.text}
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
