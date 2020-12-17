import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './Body.css';
import { FaArrowRight,FaAngleRight,FaAngleLeft } from 'react-icons/fa';
import Sreemongol from '../../Images/Sreemongol.png';
import Bazar from '../../Images/1.png';
import sundor from '../../Images/Sundorbon.png'
import { Link } from 'react-router-dom';
import fakedata from '../../fakedata/index';
function Body() {
  const place = fakedata;
  const [places , setPlaces] = useState(place);
    return (
<div className="content">
        <div className="text-wrapper">
          <div className="text">
            <div id="title">
              <h4>COX'S BAZAR</h4>
            </div>
            <div id="description">
              <p>
                As the largest archipelagic country in the world, Indonesia is
                blessed with so many different people, cultures, customs,
                traditions, artworks, food, animals, plants, landscapes, and
                everything that made it almost like 100 (or even 200) countries
                melted beautifully into one.<br/>
                <Link to="/booking/1">
                  <Button variant="warning" className="px-5 btn2"><strong>Booking</strong> <FaArrowRight /></Button>
                </Link>
              </p> 
            </div>
          </div>
        </div>

        <div className="glide">
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              <li className="glide__slide">
                <div className="slide one">
                  <div className="slider-image">
                    <Link to={"/booking/"+"1"} id="titlelink1">
                      <h3>COX'S BAZAR</h3>
                      <img src={Bazar} alt=""/>
                    </Link>
                  </div>
                </div>
              </li>
              <li className="glide__slide">
                <div className="slide one">
                  <div className="slider-image">
                    <Link to={"/booking/"+"2"} id="titlelink2">
                      <h3>SREEMANGAL</h3>
                      <img src={Sreemongol} alt=""/>
                    </Link>
                  </div>
                </div>
              </li>
              <li className="glide__slide">
                <div className="slide one">
                  <div className="slider-image">
                      <Link to={"/booking/"+"3"} id="titlelink3">
                        <h3>SUNDARBANS</h3>
                        <img src={sundor} alt=""/>
                      </Link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="glide__arrows">
              <div className='mr-2'>
                <FaAngleLeft size='1.5rem' color='white'/>
              </div>
              <div>
                <FaAngleRight size='1.5rem' color='white'/>
              </div>
          </div>
        </div>
</div>
    );
}

export default Body;