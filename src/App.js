import React from 'react'
import './index.scss'
import Header from './components/header/index'
import Hero from './components/hero/index'
import Shop from './components/shop/index'
import LookBook from './components/lookbook/index'
import Footer from './components/footer/index'

const App = () => {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Shop />
      <LookBook />
      <Footer />
    </div>
  )
}

export default App

