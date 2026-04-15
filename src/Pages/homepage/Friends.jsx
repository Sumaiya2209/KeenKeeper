import React, { use } from 'react';

const Friends = ({ data }) => {

  const friends = use(data);
  console.log(friends);

  return (
    <div className='max-w-7xl my-10 mx-auto border-t-2 border-gray-100 py-10 px-4'>
      <h2 className="text-2xl font-bold my-4">Your Friends</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {
          friends.map(friend => (
            <div className="shadow-sm rounded bg-white">
              <img src={friend.picture} alt={friend.name} />
              <div className="card-body items-center text-center">
                <h2 className="card-title">{friend.name}</h2>
                <p>{friend.bio}</p>
              </div>
            </div>
          ))
        }
      </div>

    </div>
  );
};

export default Friends;