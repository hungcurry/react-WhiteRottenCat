import Information from '@/components/Information'
import ContactPerson from '@/components/ContactPerson'
import Hero from '@/components/Hero'
import Movie from '@/components/Movie'
import Marketplace from '@/components/Marketplace'
import Societies from '@/components/Societies'
import Modal from '@/components/Modal'

import { useState } from 'react'
import axios from "axios";
import Swiper, { Navigation, Pagination } from 'swiper'

const Home = () => {
  return (
    <>
      <Information /> 

      <Hero />
      <Movie />
      <Marketplace />
      <Societies />

      <ContactPerson />

      <Modal />
    </>
  );
};

export default Home
