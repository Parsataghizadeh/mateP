import React from 'react'
import './Home.css'
import Title from './Title'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

function Serv() {
  return (
    <div className='Serv' id='ser'>
     <Title title="Our Servicess"/>
      <Container className='mtHF'>
       <Row>
        <Col className='firstColBox mb-4' xs={{span: 10, offset: 1}} sm={{span: 6, offset: 0}} lg={{span: 3, offset: 0}}>
          <div className='divInBox'>
            <div className='divIcon'>
             <svg className='svgFIcon' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.293 1.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-9 9a1 1 0 01-.39.242l-3 1a1 1 0 01-1.266-1.265l1-3a1 1 0 01.242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 00.5.5H4v.5a.5.5 0 00.5.5H5v.5a.5.5 0 00.5.5H6v-1.5a.5.5 0 00-.5-.5H5v-.5a.5.5 0 00-.5-.5H3z" clip-rule="evenodd"></path></svg>
            </div>
            <div className='h4Div'>
            <h4 className='h4TB'>
             Content Writing
            </h4>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.</p>
          </div>
        </Col>
        <Col className='firstColBox mb-4' xs={{span: 10, offset: 1}} sm={{span: 6, offset: 0}} lg={{span: 3, offset: 0}}>
          <div className='divInBox'>
            <div className='divIcon'>
             <svg className='svgFIcon' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7.375 16.781l1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4C2.138 11.409 2 11.696 2 12s.138.591.375.781L7.375 16.781zM16.625 7.219l-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4C21.862 12.591 22 12.304 22 12s-.138-.591-.375-.781L16.625 7.219z"></path><path transform="rotate(102.527 12 12)" d="M2.78 11H21.219V13.001H2.78z"></path></svg>
            </div>
            <div className='h4Div'>
            <h4 className='h4TB'>
             Web Development
            </h4>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.</p>
          </div>
        </Col>
        <Col className='firstColBox mb-4' xs={{span: 10, offset: 1}} sm={{span: 6, offset: 0}} lg={{span: 3, offset: 0}}>
          <div className='divInBox'>
            <div className='divIcon'>
             <svg className='svgFIcon' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7.375 16.781l1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4C2.138 11.409 2 11.696 2 12s.138.591.375.781L7.375 16.781zM16.625 7.219l-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4C21.862 12.591 22 12.304 22 12s-.138-.591-.375-.781L16.625 7.219z"></path><path transform="rotate(102.527 12 12)" d="M2.78 11H21.219V13.001H2.78z"></path></svg>
            </div>
            <div className='h4Div'>
            <h4 className='h4TB'>
             Business Consultancy
            </h4>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.</p>
          </div>
        </Col>
        <Col className='firstColBox mb-4' xs={{span: 10, offset: 1}} sm={{span: 6, offset: 0}} lg={{span: 3, offset: 0}}>
          <div className='divInBox'>
            <div className='divIcon'>
             <svg className='svgFIcon' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"></path></svg>
            </div>
            <div className='h4Div'>
            <h4 className='h4TB'>
             Web Development
            </h4>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.</p>
          </div>
        </Col>
       </Row> 
      </Container>
    </div>
  )
}

export default Serv