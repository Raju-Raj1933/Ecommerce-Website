import React from 'react';
import BestSeller from '../Ui/home/BestSeller';
import Categories from '../Ui/home/Categories';
import HeaderCarousel from '../Ui/home/HeaderCarousel';
import NewArivals from '../Ui/home/NewArrival';


function Home() {
  return (
    <div>

      <BestSeller/>
      <Categories/>
      <HeaderCarousel/>
      <NewArivals/>
      </div>
  )
}

export default Home