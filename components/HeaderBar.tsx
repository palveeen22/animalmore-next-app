// components/HeaderBar.tsx
import React from 'react'

const HeaderBar = ({ items }: { items: string[] }) => {
  return (
    <div className="w-full overflow-x-auto scrollbar-hide">
      <div className="flex gap-8 py-8 min-w-max font-semibold text-sm md:text-[22px] leading-[35.2px]">
        {items.map((item, index) => (
          <button
            key={index}
            className="text-primary hover:text-gray-900 whitespace-nowrap transition-colors"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  )
}

export default HeaderBar