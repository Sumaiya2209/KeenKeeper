import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Banner = () => {
  return (
    <div className="pt-16 px-4">
      <div className="p-10 text-center space-y-6">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
          Friends to keep close in your life
        </h1>
        <p className="text-gray-500">
          Your personal shelf of meaningful connections. Browse, tend, and nurture
          the <br />relationships that matter most.
        </p>
        <div>
          <button className="btn bg-[#244D3F]  hover:bg-green-950 text-white flex items-center gap-2 mx-auto">
            <FaPlus/>
            Add a Friend
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;