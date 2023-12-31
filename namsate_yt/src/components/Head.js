import React from 'react';

const Head = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 p-5 m-1 shadow-lg">
      <div className="flex col-span-1">
        <img className='h-8' alt='menu' src='https://cdn1.iconfinder.com/data/icons/heroicons-ui/24/menu-512.png'/>
        <img className="h-8 ml-4" alt='yt logo' src='https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png?20220706172052'/>
      </div> 
      <div className="flex items-center col-span-2 sm:col-span-6 lg:col-span-8 justify-center mt-4 sm:mt-0">
        <input type='text' className='w-full sm:w-3/4 lg:w-1/2 text-justify border border-gray-700 rounded-l-full text-black px-4 py-2'/>
        <button className='border border-black rounded-r-full p-2 bg-gray-200'>🔍</button>
      </div>
      <div className="flex items-center justify-end col-span-1 sm:col-span-4 lg:col-span-2 mt-4 sm:mt-0">
        <img className='h-8' alt='user-ico' src='https://cdn-icons-png.flaticon.com/512/666/666201.png'/>
      </div>
    </div>
  );
};

export default Head;
