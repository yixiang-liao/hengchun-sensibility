import React from 'react'
import BackToTopButton from '../components/BackToTopButton'
import InnerPages from '../layouts/HomePage/InnerPages'

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="home" id="home">
        <div className="profile">
          <div className="title-group">
            <h1>恆春感性</h1>
            <h2>Hengchun Sensibility</h2>
            <div className='line'></div>
            <p>在南國風與光裡，找到生活的節奏</p>
          </div>
        </div>
      </div>

      <InnerPages />

        <BackToTopButton />
    </div>
  )
}

export default HomePage
