import React from 'react'
import './index.scss'
import Header from './components/header/index'
import Hero from './components/hero/index'
import Shop from './components/shop/index'

const App = () => {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Shop />
    </div>
  )
}

export default App

