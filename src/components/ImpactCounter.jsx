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
    <div className="bg-slate-50 text-primary section-padding relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-5">
        <div className="absolute -top-24 -left-24 w-64 h-64 border-4 border-primary rounded-full"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 border-4 border-primary rounded-full"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Our Impact in <span className="text-accent">Numbers</span>
          </h2>
          <div className="h-1 w-24 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
            Transforming lives and empowering communities across Odisha through dedicated grassroots intervention.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-12 gap-x-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-3 group-hover:scale-110 transition-transform duration-300 inline-block">
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
              <div className="text-xs md:text-sm font-bold text-slate-400 uppercase tracking-[0.2em]">
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
