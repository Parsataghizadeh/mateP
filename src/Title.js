import React from 'react'
import './Title.css'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'


function Title(props) {
  return (
    <div className='title mt-5'>
      <Container>
       <Row>
        <Col className='t-center'>{props.title}</Col>
       </Row>
     </Container>
     <hr className='span-line'/>
     <Container>
       <Row>
        <Col md={{ span: 8, offset: 2 }} xs={{ span: 10, offset: 1 }} className='t-center1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, dignissimos!
Lorem ipsum dolor sit amet, consectetur.</Col>
       </Row>
     </Container>
    </div>
  )
}

export default Title