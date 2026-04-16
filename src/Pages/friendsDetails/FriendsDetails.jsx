import { useLoaderData, useParams } from 'react-router';
import Call from '../../assets/call.png';
import Text from '../../assets/text.png';
import Video from '../../assets/video.png';
import { RiDeleteBinLine } from 'react-icons/ri';
import { HiOutlineBellSnooze } from 'react-icons/hi2';
import { LuArchive } from 'react-icons/lu';
import { useState } from 'react';

const FriendsDetails = () => {
  const { friendId } = useParams();

  const friends = useLoaderData();
  const friend = friends.find(f => f.id === Number(friendId));
  
  const [call, setCall] = useState([]);
  const [text, setText] = useState([]);
  const [video, setVideo] = useState([]);

  const handleCallList = (friend) => {
    setCall([...call, friend]);
  };
console.log(call);

const handleTextList = (friend) => {
  setText([...text, friend]);
};
console.log(text);

const handleVideoList = (friend) => {
  setVideo([...video, friend]);
};
console.log(video);

  return (
    <div className="min-h-screen bg-base flex items-center justify-center " >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="space-y-2">
          <div className="card bg-base-100 shadow p-6 items-center text-center space-y-3">
            <img
              src={friend.picture}
              alt={friend.name} />
            <h2 className="text-xl font-bold">{friend.name}</h2>
            <div className="badge text-white rounded-full mt-3"><h1 className={`w-30 ${(friend.status === "Overdue" ? "bg-red-500" : friend.status === "Almost_due" ? "bg-yellow-500" : "bg-green-900")} text-white font-bold py-2 px-4 rounded-full mb-4`}>
              {friend.status}
            </h1></div>
            {friend.tags.map((tag, index) => (
              <div className="badge bg-green-200 text-green-800 rounded-full" key={index}>
                {tag}
              </div>
            ))}
            <p className="italic text-sm text-gray-500">
              {friend.bio}
            </p>
            <p className="text-xs text-gray-400">
              Preferred: {friend.email}
            </p>
          </div>

          <button className="btn bg-base-100 w-full shadow">
           <HiOutlineBellSnooze /> Snooze 2 Weeks</button>
          <button className="btn bg-base-100 w-full shadow">
           <LuArchive /> Archive
          </button>
          <button className="btn bg-base-100 text-red-500 w-full shadow">
            <RiDeleteBinLine /> Delete
          </button>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="card bg-base-100 shadow p-6 text-center">
              <h1 className="text-3xl font-bold">{friend.days_since_contact}</h1>
              <p className="text-sm text-gray-500">Days Since Contact</p>
            </div>
            <div className="card bg-base-100 shadow p-6 text-center">
              <h1 className="text-3xl font-bold">{friend.goal}</h1>
              <p className="text-sm text-gray-500">Goal (Days)</p>
            </div>
            <div className="card bg-base-100 shadow p-6 text-center">
              <h1 className="text-xl font-bold">{friend.next_due_date}</h1>
              <p className="text-sm text-gray-500">Next Due</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow p-6 flex flex-col md:flex-row justify-between items-center">
            <div>
              <h2 className="font-semibold text-gray-500 text-lg">
                Relationship Goal
              </h2>
              <p className="text-gray-500">
                Connect every <span className="font-bold text-gray-800">30 days</span>
              </p>
            </div>
            <button className="btn btn-sm mt-3 md:mt-0">
              Edit
            </button>
          </div>
          <div className="card bg-base-100 shadow p-6">
            <h2 className="font-semibold text-lg mb-4">
              Quick Check-In
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button onClick={() => handleCallList(friend)} className="btn h-24 flex flex-col items-center justify-center gap-2">
                <img src={Call} alt="Call" className="w-8 h-8" />
                <span>Call</span>
              </button>
              <button onClick={() => handleTextList(friend)} className="btn h-24 flex flex-col items-center justify-center gap-2">
                <img src={Text} alt="Text" className="w-8 h-8" />
                <span>Text</span>
              </button>
              <button onClick={() => handleVideoList(friend)} className="btn h-24 flex flex-col items-center justify-center gap-2">
                <img src={Video} alt="Video" className="w-8 h-8" />
                <span>Video</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsDetails;