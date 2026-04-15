import React from 'react';

const DetailsCard = () => {

  const statsData = [
    {
      id: 1,
      value: 10,
      label: "Total Friends",
      highlight: true,
    },
    {
      id: 2,
      value: 3,
      label: "On Track",
    },
    {
      id: 3,
      value: 6,
      label: "Need Attention",
    },
    {
      id: 4,
      value: 12,
      label: "Interactions This Month",
    },
  ];

  return (
    <div className=' max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
      {statsData.map((stat) => (
        <div key={stat.id} className='text-center p-8 shadow rounded-lg bg-white'>
          <h1 className='text-3xl font-semibold text-green-900'>
            {stat.value}
          </h1>
          <p className='text-lg text-gray-500'>{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default DetailsCard;