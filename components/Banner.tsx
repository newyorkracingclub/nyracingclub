'use client';
import { useLayoutEffect, useRef, useState } from 'react';
import { motion, Variants } from 'framer-motion';

interface BannerProps {
  text: string;
  className?: string;
  duration: number;
}

const Banner: React.FC<BannerProps> = ({ text, className, duration }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimension, setDimension] = useState(0);
  const repeatTexts = new Array(6).fill(text);

  useLayoutEffect(() => {
    const computeDimension = () => {
      if (containerRef.current) {
        let total = 0;
        const nodes = containerRef.current.children;
        for (let i = 0; i < nodes.length; i++) {
          total += nodes[i].clientWidth;
        }
        setDimension(total / 2);
      }
    };

    computeDimension();
    window.addEventListener('resize', computeDimension);
    return () => window.removeEventListener('resize', computeDimension);
  }, [repeatTexts.length]);

  const bannerVariant: Variants = {
    animate: () => ({
      x: [0, -dimension],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: duration,
          ease: 'linear',
        },
      },
    }),
  };

  return (
    <div className={`p-2 h-full overflow-hidden ${className}`}>
      <motion.div
        ref={containerRef}
        variants={bannerVariant}
        animate="animate"
        className="flex whitespace-nowrap items-center text-xl md:text-3xl xl:text-4xl font-medium"
      >
        {repeatTexts.map((item, index) => (
          <span key={index} className="lg:px-12 md:px-8 px-4">
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Banner;
