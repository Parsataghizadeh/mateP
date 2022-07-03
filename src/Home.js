import React from 'react'
import './Home.css'
import Title from './Title'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import Baner1 from './Baner1'
import Pricing from './Pricing'
import Topic from './Topic'
import Team from './Team'
import Serv from './Serv.js'


function Home() {
  return (
    <div className='Home'>
      <Serv/>
      <Baner1/>
      <Pricing/>
      <Topic/>
      <Team/>
    </div>
  )
}

export default Home