import ContactPerson from '@/components/ContactPerson'
import Hero from '@/components/Hero'
import Information from '@/components/Information'
import Marketplace from '@/components/Marketplace'
import Modal from '@/components/Modal'
import Movie from '@/components/Movie'
import Societies from '@/components/Societies'

import { useState } from 'react'

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <Information
        isOpen={isModalOpen}
        onOpen={handleOpenModal}
      />

      <Hero />
      <Movie />
      <Marketplace />
      <Societies />

      <ContactPerson />

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  )
}

export default Home
