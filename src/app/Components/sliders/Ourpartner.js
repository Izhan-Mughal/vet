'use client'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Ourpartner = () => {
  return (
    <>
      <section className='our-partners bg-white'>
        <div className='partner-container'>
          <Swiper spaceBetween={20} slidesPerView={9} breakpoints={{
            // when window width is >= 768px
            300: {
              spaceBetween:60,
              slidesPerView: 6,
            }
          }} >
            <SwiperSlide><img src="/our-partners/image1.png" className='parnter-logo' alt="image" /></SwiperSlide>
            <SwiperSlide><img src="/our-partners/image2.png" className='parnter-logo' alt="image" /></SwiperSlide>
            <SwiperSlide><img src="/our-partners/image3.png" className='parnter-logo' alt="image" /></SwiperSlide>
            <SwiperSlide><img src="/our-partners/image4.png" className='parnter-logo' alt="image" /></SwiperSlide>
            <SwiperSlide><img src="/our-partners/image5.png" className='parnter-logo' alt="image" /></SwiperSlide>
            <SwiperSlide><img src="/our-partners/image6.png" className='parnter-logo' alt="image" /></SwiperSlide>
            <SwiperSlide><img src="/our-partners/image7.png" className='parnter-logo' alt="image" /></SwiperSlide>
            <SwiperSlide><img src="/our-partners/image8.png" className='parnter-logo' alt="image" /></SwiperSlide>
            <SwiperSlide><img src="/our-partners/image1.png" className='parnter-logo' alt="image" /></SwiperSlide>
            <SwiperSlide><img src="/our-partners/image2.png" className='parnter-logo' alt="image" /></SwiperSlide>
          </Swiper>
        </div>
      </section >
    </>
  )
}

export default Ourpartner