import React from 'react';
import { motion } from 'framer-motion';

interface BannerProps {
  text: string;
}

const Banner: React.FC<BannerProps> = ({ text }) => {
  const repeatTexts = new Array(6).fill(text);

  return (
    <div className="p-3 overflow-hidden whitespace-nowrap">
      <motion.div
        className="flex whitespace-nowrap items-center text-xl md:text-3xl xl:text-5xl font-medium"
        initial={{ x: '0' }}
        animate={{ x: '-100%' }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      >
        {repeatTexts.map((item, index) => (
          <span key={index} className="lg:px-16 md:px-12 px-8">
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Banner;
