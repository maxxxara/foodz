import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Chef from '../components/home/Chef';
import Hero from '../components/home/Hero'
import Order from '../components/home/Order';
import Services from '../components/home/Services';
import Offers from './../components/home/Offers';

const Home = () => {
  return (
    <>
      <Hero />
      <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInRightBig" >
        <Offers />
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeInLeftBig" animateOnce={true}>
        <Chef />
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeInRightBig" animateOnce={true}>
        <Services />
      </AnimationOnScroll>
      <Order />
    </>
  )
}

export default Home