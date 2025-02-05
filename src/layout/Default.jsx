// import { Route, Routes } from 'react-router-dom'
import Router from '@/router/index';
import Header from './Header.jsx'
import Footer from './Footer.jsx'

const Default = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Router />
      </div>
      <Footer />
    </>
  )
}

export default Default
