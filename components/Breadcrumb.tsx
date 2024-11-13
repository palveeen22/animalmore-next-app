import Link from 'next/link';
import React, { Fragment } from 'react';

type BreadcrumbProps = {
  items: string[];
};

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav className="font-nunito text-[18px] font-normal leading-[22.5px]">
    {items.map((item, index) => (
      <Fragment key={index}>
        <Link
          href={item}
          className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
        >
          {item}
        </Link>
        {index < items.length - 1 && (
          <span className="mx-2 text-gray-400">/</span>
        )}
      </Fragment>
    ))}
  </nav>
  );
};

export default Breadcrumb;