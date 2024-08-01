import React from 'react';

const InfiniteScrollSection = () => {
  const items = [
    'Strategy',
    'UI/UX Design',
    'Interaction Design',
    'User Research',
    'Communication'
  ];

  return (
    <div className="overflow-hidden bg-gray-100 py-4">
      <div className="flex animate-scroll">
        {[...Array(2)].map((_, index) => (
          <div key={index} className="flex items-center whitespace-nowrap">
            {items.map((item, itemIndex) => (
              <React.Fragment key={itemIndex}>
                <span className="text-gray-700 text-lg font-medium px-4">{item}</span>
                {itemIndex < items.length - 1 && (
                  <span className="text-blue-500 px-2">★</span>
                )}
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteScrollSection;