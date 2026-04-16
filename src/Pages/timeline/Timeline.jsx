import React, { useContext } from 'react';
import { FriendContext } from '../../context/FriendsContext';
import Call from '../../assets/call.png';
import Text from '../../assets/text.png';
import Video from '../../assets/video.png';


const Timeline = () => {
  const { call, text, video } = useContext(FriendContext);

  const allActivities = [...call, ...text, ...video];
  
  return (
    <div className='max-w-4xl mx-auto my-20 space-y-3'>
      <h2 className='text-5xl font-bold my-10'>Timeline</h2>

      {allActivities.length === 0 ? (
      < div className='bg-base-100 shadow p-10 rounded text-center'>
        <p className='text-center text-gray-500'>No activities yet. Start connecting with your friends!</p>
      </div>
      ) : (
        <>
          {allActivities.map((item, index) => (
            <div key={index} className="card bg-base-100 text-gray-600 p-4 shadow ">
              <div className='flex items-center gap-4'>
                <div>
                  {item.type === "call" && <img src={Call} alt="Call" className="w-6 h-6" />}
                  {item.type === "text" && <img src={Text} alt="Text" className="w-6 h-6" />}
                  {item.type === "video" && <img src={Video} alt="Video" className="w-6 h-6" />}
                </div>
                <div>
                  <h2 className="font-semibold flex items-center gap-2 text-lg">
                    {item.type === "call" ? "Call" : item.type === "text" ? "Text" : "Video"}<span className='text-gray-500 font-normal'>with {item.name}</span>
                  </h2>
                  <p className="text-sm text-gray-500">
                  </p>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Timeline;