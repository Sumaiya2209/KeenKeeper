import React, { Suspense, useState } from 'react';
import Banner from "./Banner";
import DetailsCard from "./detailsCard";
import Friends from "./Friends";

const dataPromise = fetch('./data.json').then(res => res.json());

const HomePage = () => {
  return (
    <div>
      <Banner />
      <DetailsCard />

      <Suspense fallback={ 
        <div className='flex my-10 justify-center'>
          <span className="loading loading-spinner loading-xl"></span>
        </div>
      }>
        <Friends data={dataPromise} />
      </Suspense>
    </div>
  );
};

export default HomePage;