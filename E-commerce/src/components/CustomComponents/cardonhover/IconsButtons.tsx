import React from 'react';
import { ShoppingBag, Heart, Search, Shuffle } from 'lucide-react';

const IconButtons: React.FC = () => {
  const icons = [
    { component: ShoppingBag, label: 'Shopping Bag' },
    { component: Heart, label: 'Heart' },
    { component: Search, label: 'Search' },
    { component: Shuffle, label: 'Shuffle' },
  ];

  return (
     <div className="flex flex-col items-end space-y-2 p-2">
      {icons.map((icon, index) => (
        <button
          key={index}
          className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
          aria-label={icon.label}
        >
          <icon.component className="w-4 h-4" />
        </button>
      ))}
    </div>
  );
};

export default IconButtons;