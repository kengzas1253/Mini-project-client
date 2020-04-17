import React from 'react';
import Navbar from './Navbar';
import Employee from './Employee';
import Works from './Works';

const Homepage =()=>{
  return (
    <div >
        <Navbar/>
      <Works/>
      {/* <Employee/> */}
    </div>
  );
}

export default Homepage;
