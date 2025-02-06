// import { Route, Routes } from 'react-router-dom'
import AppRoutes from '@/router/index';
import Header from '@/layout/Header.jsx'
import Footer from '@/layout/Footer.jsx'

const Default = () => {
  return (
    <>
      <Header />
      <main className="container min-h-[100vh] pt-6 lg:pt-main-span flex">
        <AppRoutes />
      </main>
      <Footer />
    </>
  )
}

export default Default
