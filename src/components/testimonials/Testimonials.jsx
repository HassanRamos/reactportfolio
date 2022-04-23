import React from 'react'
import './testimonials.css'

import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import {  Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


/************ DATA ********** */
const data= [
  {
    id:1,
    avatar:AVTR1,
    name:'Ramos Hassan', 
    review:'to learn more about each warning to learn more about each warning to learn more about each warning about each warning to learn more about each warningabout each warning to learn more about each warning'
  },
  {
    id:2,
    avatar:AVTR2,
    name:'Ramos Hassan', 
    review:'to learn more about each warning to learn more about each warning to learn more about each warning about each warning to learn more about each warningabout each warning to learn more about each warning'
  },
  {
    id:3,
    avatar:AVTR3,
    name:'Ramos Hassan', 
    review:'to learn more about each warning to learn more about each warning to learn more about each warning about each warning to learn more about each warningabout each warning to learn more about each warning'
  },
  {
    id:4,
    avatar:AVTR4,
    name:'Ramos Hassan', 
    review:'to learn more about each warning to learn more about each warning to learn more about each warning about each warning to learn more about each warningabout each warning to learn more about each warning'
  },
  
]

export default function Testimonials() {
  return (
    <section id="testimonials">
      <h5> Clients Reviews</h5>
      <h2>Testimonials</h2>

      <div className='container testimonials__container'
       // install Swiper modules
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}
       >
      {
        data.map(({id,avatar,name,review})=>{
          return(
            <SwiperSlide  key = {id} className='testimonial'>
            <div className='client__avatar'>
              <img src={avatar} alt='AVTR1 '/>
            </div>
            <h5 className='client__name'>{name}</h5>
              <small className='client__review'>
              {review}
              </small>
          </SwiperSlide>
          )

        })
      } 
      </div>
    </section>
  )
}
