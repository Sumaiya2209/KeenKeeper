import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';



export const FriendContext = createContext();

const FriendsContext = ({ children }) => {

  const [call, setCall] = useState([]);
  const [text, setText] = useState([]);
  const [video, setVideo] = useState([]);

  const handleCallList = (friend) => {
    toast.success(`${friend.name} added to call list!`);
    const newEntry = { ...friend, type: 'call', timestamp: new Date().toISOString() };
    setCall([...call, newEntry]);
  };

  const handleTextList = (friend) => {
    toast.success(`${friend.name} added to text list!`);
    const newEntry = { ...friend, type: 'text', timestamp: new Date().toISOString() };
    setText([...text, newEntry]);
  };

  const handleVideoList = (friend) => {
    const newEntry = { ...friend, type: 'video', timestamp: new Date().toISOString() };
    setVideo([...video, newEntry]);
      toast.success(`${friend.name} added to video list!`);
  };

  const contextValue = {
    call,
    text,
    video,
    setCall,
    setText,
    setVideo,
    handleCallList,
    handleTextList,
    handleVideoList,
  };

  return (
    <FriendContext.Provider value={contextValue}>
      {children}
    </FriendContext.Provider>
  );
};

export default FriendsContext;