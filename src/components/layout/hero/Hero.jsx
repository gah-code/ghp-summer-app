import React from 'react';
import HeroImg from '../../../assets/Images/hero-img.jpg';

const Hero = () => {
  return (
    <section className='section-hero'>
      <div className='hero'>
        <div className='hero-text-box'>
          <h1 className='heading-primary'>
            Booking a photographer made simple as smiling for a photo
          </h1>
          <p className='hero-description'>
            Start today and save time scheduling services for your most
            cherished
          </p>
          <a href='cta'>Book a session today!</a>
          <a href='#how'>Learn more &darr;</a>
        </div>
        <div className='hero-img-box'>
          <img
            className='hero-img'
            alt='Summer family photography highlights'
            src={HeroImg}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
