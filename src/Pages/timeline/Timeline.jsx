import React, { useContext, useState } from 'react';
import { FriendContext } from '../../context/FriendsContext';
import { MdKeyboardArrowDown } from 'react-icons/md';
import TimelineCard from './TimelineCard';


const Timeline = () => {
  const { call, text, video } = useContext(FriendContext);

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const [search, setSearch] = useState("");
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

  const filteredActivities = allActivities.filter((item) => {
    const query = search.toLowerCase();
    return (
      item.name.toLowerCase().includes(query) ||
      item.type.toLowerCase().includes(query)
    );
  });

  return (
    <div className='max-w-4xl mx-auto my-20 space-y-3'>
      <h2 className='text-5xl font-bold my-10'>Timeline</h2>

      <div className='flex flex-col md:flex-row items-start md:items-center gap-4 justify-between'>
        <div className="dropdown dropdown-bottom">
        <div tabIndex={0} role="button" className="btn m-1 text-gray-500 font-normal">Filter timeline {filter} <span className='pl-7'> <MdKeyboardArrowDown /></span></div>
        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li onClick={() => { setFilter("all"); document.activeElement.blur(); }}><a>All</a></li>
          <li onClick={() => { setFilter("calls"); document.activeElement.blur(); }}><a>Calls</a></li>
          <li onClick={() => { setFilter("texts"); document.activeElement.blur(); }}><a>Texts</a></li>
          <li onClick={() => { setFilter("videos"); document.activeElement.blur(); }}><a>Videos</a></li>
        </ul>
      </div>
      <input
        type="text"
        placeholder="Search by name or type..."
        className="input input-bordered w-full max-w-xs mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      </div>


      {allActivities.length === 0 ? (
        < div className='bg-base-100 shadow p-10 rounded text-center'>
          <p className='text-center text-gray-500'>No activities yet. Start connecting with your friends!</p>
        </div>
      ) : (
        <TimelineCard allActivities={filteredActivities} formatDate={formatDate} />
      )}
    </div>
  );
};

export default Timeline;