import React from 'react';
import NavBarComp from '../components/navbar';
import CarouselSlide from '../components/slider';

class Home extends React.Component {
  render() {
    return (
      <div>
        <NavBarComp/>
        <CarouselSlide/>
      </div>
    );
  }
}

export default Home;
