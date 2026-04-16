import React, { useContext, useMemo } from 'react';
import { FriendContext } from '../../context/FriendsContext';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const COLORS = ["#7C3AED", "#1F2937", "#2F855A"]; 

const Stats = () => {
  const { call = [], text = [], video = [] } = useContext(FriendContext);

  const data = useMemo(() => {
    return [
      { name: "Text", value: text.length },
      { name: "Call", value: call.length },
      { name: "Video", value: video.length },
    ];
  }, [call, text, video]);

  return (
    <div className='max-w-5xl mx-auto my-20 px-4'>
      <h2 className='text-4xl font-bold p-4 mb-10'>
        Friendship Analytics
      </h2>
      <div className='bg-base-100 shadow p-10 rounded'>
        <h3 className='text-lg text-gray-600 mb-6'>By Interaction Type</h3>
        <div className='w-full h-[35vh] flex items-center justify-center'>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                innerRadius={80}
                outerRadius={110}
                paddingAngle={6}
                dataKey="value"
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className='flex justify-center gap-6 mt-6 text-sm'>
          {data.map((item, index) => (
            <div key={index} className='flex items-center gap-2'>
              <span
                className='w-3 h-3 rounded-full'
                style={{ backgroundColor: COLORS[index] }}
              ></span>
              <span className='text-gray-600'>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;