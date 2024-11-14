'use client'
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import CircleElement from '../CircleElement';

type TMenuItem = {
  name: string;
  count?: number;
}

type TProps = {
  list: TMenuItem[];
}

const SideBar = ({ list }: TProps) => {
  const pathname = usePathname();

  return (
    <aside className="hidden md:block">
    <section className="w-64 py-6 flex flex-col gap-6">
      {list.map((item) => {
        const path = `/${item.name.toLowerCase()}`;
        const isActive = pathname === path;

        return (
          <Link
            key={item.name}
            href={path}
            className={`
              text-[22px] font-semibold leading-[26.4px]
              transition-colors duration-200
              relative group flex items-center gap-x-1
              ${isActive && 'text-primary'}
            `}
          >
            {item.name}
            {item.count !== undefined && <CircleElement count={item.count} />}
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
    </section>
  </aside>
  );
};

export default SideBar;