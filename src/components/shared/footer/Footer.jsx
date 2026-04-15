import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { FaSquareFacebook, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className='bg-[#244D3F]  pt-20 text-center'>
      <h1 className='text-7xl text-white'><span className='font-bold'>Keen</span>Keeper</h1>
      <p className='text-gray-400 mt-4'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
      <h2 className='text-xl text-white mt-6'>Social Links</h2>
      <div className='flex justify-center gap-4 my-4 mb-6'>
        <div className='w-10 h-10 bg-white rounded-full justify-center items-center flex'>
          <AiFillInstagram className='w-6 h-6'/>
        </div>
        <div className='w-10 h-10 bg-white rounded-full justify-center items-center flex'>
          <FaSquareFacebook className='w-6 h-6'/>
        </div>
        <div className='w-10 h-10 bg-white rounded-full justify-center items-center flex '>
          <FaXTwitter className='w-6 h-6'/>
        </div>
      </div>
       <div className='flex justify-between items-center max-w-7xl mx-auto py-6 text-gray-400 border-t border-gray-500' >
        <div>
          <p>© 2024 KeenKeeper. All rights reserved.</p>
        </div>
        <div className='flex gap-10'>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Cookies</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;