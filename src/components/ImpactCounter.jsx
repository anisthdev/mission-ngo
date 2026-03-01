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
    <span ref={counterRef} className="flex flex-col items-center">
      {prefix && (
        <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-slate-400 mb-1 leading-none">
          {prefix}
        </span>
      )}
      <span className="leading-none">
        {formatNumber(count)}
        {suffix && <span className="text-[0.6em] ml-0.5 align-top">{suffix}</span>}
      </span>
    </span>
  );
};

// Stats Section Component with Counters
export const ImpactStats = ({ stats }) => {
  return (
    <div className="bg-white text-primary section-padding relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl -ml-48 -mb-48"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-primary">
            Our Impact in <span className="text-accent">Numbers</span>
          </h2>
          <div className="h-1 w-24 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
            Transforming lives and empowering communities across Odisha through dedicated grassroots intervention.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-y-16 gap-x-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-accent mb-4 group-hover:scale-105 transition-transform duration-500 inline-block">
                {stat.animated ? (
                  <ImpactCounter
                    end={stat.value}
                    suffix={stat.suffix || ""}
                    prefix={stat.prefix || ""}
                  />
                ) : (
                  <div className="flex flex-col items-center">
                    {stat.prefix && (
                      <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-slate-400 mb-1 leading-none">
                        {stat.prefix}
                      </span>
                    )}
                    <span className="leading-none">
                      {stat.value}
                      {stat.suffix && <span className="text-[0.6em] ml-0.5 align-top">{stat.suffix}</span>}
                    </span>
                  </div>
                )}
              </div>
              <div className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-[0.2em] max-w-[150px] mx-auto leading-relaxed">
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
