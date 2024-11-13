import React from 'react';

interface TotalCount {
  count: number
}

const CircleElement = ({count}: TotalCount) => {
  return (
    <div 
      className="w-6 h-6 rounded-full bg-[#DF7E97] flex items-center justify-center text-white">
      <span className="text-sm">{count}</span>
    </div>
  );
};

export default CircleElement;