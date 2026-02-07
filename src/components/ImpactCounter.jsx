import { useState, useEffect, useRef } from 'react';

const ImpactCounter = ({ end, duration = 2000, suffix = "", prefix = "" }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const animateCount = () => {
      const startTime = Date.now();
      const endValue = typeof end === 'string' ? parseInt(end.replace(/[^0-9]/g, '')) : end;

      const updateCount = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(easeOutQuart * endValue);

        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          setCount(endValue);
        }
      };

      requestAnimationFrame(updateCount);
    };

    const currentRef = counterRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCount();
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated, end, duration]);

  const formatNumber = (num) => {
    return num.toLocaleString('en-IN');
  };

  return (
    <span ref={counterRef}>
      {prefix}{formatNumber(count)}{suffix}
    </span>
  );
};

// Stats Section Component with Counters
export const ImpactStats = ({ stats }) => {
  return (
    <div className="bg-secondary-dark text-white section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Transforming lives and empowering communities across Odisha
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">
                {stat.animated ? (
                  <ImpactCounter
                    end={stat.value}
                    suffix={stat.suffix || ""}
                    prefix={stat.prefix || ""}
                  />
                ) : (
                  `${stat.prefix || ""}${stat.value}${stat.suffix || ""}`
                )}
              </div>
              <div className="text-sm md:text-base font-semibold text-gray-200">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImpactCounter;
