import React from 'react';

interface CategoryCardProps {
  title: string;
  link: string;
}

const CategoryLinkCard = ({ title, link }: CategoryCardProps) => {
  return (
    <a
      href={link}
      className="block p-2 bg-white border border-gray-300 rounded-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="flex items-center justify-center h-8">
        <span className="text-sm font-semibold text-center">{title}</span>
      </div>
    </a>
  );
};

export default CategoryLinkCard;
