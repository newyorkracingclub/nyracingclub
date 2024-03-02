import React from 'react';

interface BannerProps {
  text: string;
}

const Banner: React.FC<BannerProps> = ({ text }) => {
  return (
    <div className="mx-auto p-3">
      <div className="text-blue">
        <div className="flex flex-row items-center justify-center">
          <div className="text-xl md:text-3xl xl:text-5xl font-medium overflow-hidden">
            <span>{text}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
