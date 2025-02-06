import { useState } from 'react'
import Information from '@/components/Information'
import ContactPerson from '@/components/ContactPerson'
import Hero from '@/components/Hero'


import axios from "axios";
import Swiper, { Navigation, Pagination } from 'swiper'

const Home = () => {
  return (
    <>
      <Information /> 
      <Hero />
      <ContactPerson />
    </>
  );
};

export default Home
