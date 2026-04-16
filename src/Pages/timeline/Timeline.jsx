import React, { useContext, useState } from 'react';
import { FriendContext } from '../../context/FriendsContext';
import Call from '../../assets/call.png';
import Text from '../../assets/text.png';
import Video from '../../assets/video.png';
import { MdKeyboardArrowDown } from 'react-icons/md';


const Timeline = () => {
  const { call, text, video } = useContext(FriendContext);

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };
  const [filter, setFilter] = useState("");
  let allActivities = [];

  if (filter == "calls") {
    allActivities = [...call];
  }
  else if (filter == "texts") {
    allActivities = [...text];
  }
  else if (filter == "videos") {
    allActivities = [...video];
  }
  else {
    allActivities = [...call, ...text, ...video];
  }

  allActivities.sort(
    (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
  );


  return (
    <div className='max-w-4xl mx-auto my-20 space-y-3'>
      <h2 className='text-5xl font-bold my-10'>Timeline</h2>

      <div className="dropdown dropdown-bottom">
        <div tabIndex={0} role="button" className="btn m-1 text-gray-500 font-normal">Filter timeline {filter} <span className='pl-7'> <MdKeyboardArrowDown /></span></div>
        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li onClick={() => { setFilter("all"); document.activeElement.blur(); }}><a>All</a></li>
          <li onClick={() => { setFilter("calls"); document.activeElement.blur(); }}><a>Calls</a></li>
          <li onClick={() => { setFilter("texts"); document.activeElement.blur(); }}><a>Texts</a></li>
          <li onClick={() => { setFilter("videos"); document.activeElement.blur(); }}><a>Videos</a></li>
        </ul>
      </div>


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
                    {formatDate(item.timestamp)}
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