'use client'
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type TProps = {
  list: string[];
}

const SideBar = ({ list }: TProps) => {
  const pathname = usePathname();

  return (
    <aside className="w-64 p-6 flex flex-col gap-6">
      {list.map((item) => {
        const path = `/${item.toLowerCase()}`;
        const isActive = pathname === path;

        return (
          <Link
            key={item}
            href={path}
            className={`
              text-[22px] font-semibold leading-[26.4px]
              transition-colors duration-200
              relative group
              ${isActive && 'text-primary'}
            `}
          >
            {item}
            <span
              className={`
                absolute left-0 bottom-0 w-full h-0.5 bg-primary
                transform origin-left transition-transform duration-200
                ${isActive ? 'scale-x-100' : 'scale-x-0'}
                group-hover:scale-x-100
              `}
            />
          </Link>
        );
      })}
    </aside>
  );
};

export default SideBar;