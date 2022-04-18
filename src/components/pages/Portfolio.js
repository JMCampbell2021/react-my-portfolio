import React from 'react';
import CivicProject2 from '../../assets/images/CivicProject2.png';
import WeatherDash from '../../assets/images/Weather Dashboard.png';
import SpellingApp from '../../assets/images/Spelling App.png';

export default function Portfolio() {
  return (
    <div className='container-fluid mh-100 p-5'>
      <h1>Portfolio</h1>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className='row'>
      <div className='col'>
      <a href="https://boiling-fortress-60978.herokuapp.com/login">  <img src={CivicProject2} className="img-fluid img-thumbnail" alt='Civic Project'/>
      </a>
      </div>
      <div className='col'>
      <a href="https://jmcampbell2021.github.io/weather-dashboard/"> <img src={WeatherDash} className="img-fluid img-thumbnail" alt='Civic Project' /> </a>
      </div>
      <div className='col'>
      <a href='https://zacharycampanelli.github.io/SpellingPractice/'>
        <img src={SpellingApp} className="img-fluid img-thumbnail" alt='Civic Project' />
      </a>
      </div>  

      </div>
    </div>
  );
}
