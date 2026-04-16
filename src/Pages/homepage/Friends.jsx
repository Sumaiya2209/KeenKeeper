import React, { use } from 'react';
import { Link } from 'react-router';

const Friends = ({ data }) => {

  const friends = use(data);

  return (
    <div className='max-w-7xl my-10 mx-auto border-t-2 border-gray-100 py-10 px-4'>
      <h2 className="text-2xl font-bold my-4">Your Friends</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {
          friends.map((friend) => (
            <Link to={`/friendsDetails/${friend.id}`} className="shadow-sm rounded bg-white grid justify-center items-center text-center" key={friend.id}>
              <img className='mx-20 mt-10' src={friend.picture} alt={friend.name} />
              <div className="card-body items-center m-0 p-2">
                <h2 className="card-title">{friend.name}</h2>
                <p>{friend.days_since_contact}d ago</p>
              </div>
              <div className="flex justify-center gap-1">
                {friend.tags.map((tag, index) => (
                  <span key={index} className="bg-green-200 text-green-800 text-md  py-1 px-4 rounded-full">
                    {tag}
                  </span>
                ))}
                </div>
                <div className="flex justify-center my-2">
                  <h1 className={`w-30 ${(friend.status === "Overdue" ? "bg-red-500" : friend.status === "Almost_due" ? "bg-yellow-500" : "bg-green-900")} text-white font-bold py-2 px-4 rounded-full mb-4`}>
                    {friend.status}
                  </h1>
                </div>
              </Link>
              ))
        }
            </div>

    </div>
      );
};

      export default Friends;