import React from 'react'
import './EndF.css'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

function EndF() {
  return (
    <div className='endf'>
      <Container>
        <Row>
            <Col xs={12}>
                <div className="copyR">
                    <p>All copyrights reserved © 2022 - Designed & Developed by Parsa Taghizadeh</p>
                </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default EndF