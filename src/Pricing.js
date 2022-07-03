import { useEffect, React} from 'react'
import './Pricing.css'
import Title from './Title'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import Aos from 'aos'
import "aos/dist/aos.css"

function Pricing() {
  return (
    <div className='pricing' id='pri'>
     <Title title='Pricing table'/>
     <Container>
         <Row>
             <Col xs={12} sm={6} md={6} lg={4} id='boX'>
             <div>
               <Card className="text-center">
                <Card.Header bsPrefix='Cardheader'>Free</Card.Header>
                <Card.Body>
                    <div className='Cardtitle'>$00</div>
                   <div className='divText'>
                        With supporting text below as a natural lead-in to additional content additional content additional content.
                   </div>
                 <Button id='Button'>Buy Now</Button>
              </Card.Body>
               </Card>
             </div>
             </Col>
             <Col xs={12} sm={6} md={6} lg={4} id='boX'>
             <div>
               <Card className="text-center">
                <Card.Header bsPrefix='Cardheader'>Popular</Card.Header>
                <Card.Body>
                    <div className='Cardtitle'>$600</div>
                   <div className='divText'>
                        With supporting text below as a natural lead-in to additional content additional content additional content.
                   </div>
                 <Button id='Button'>Buy Now</Button>
              </Card.Body>
               </Card>
             </div>
             </Col>
             <Col xs={12} sm={{span:6, offset:3}} md={{span:6, offset:3}} lg={{span:4, offset:0}} id='boX'>
                 <div>
                 <Card className="text-center">
                <Card.Header bsPrefix='Cardheader'>Premiume</Card.Header>
                <Card.Body>
                    <div className='Cardtitle'>$800</div>
                   <div className='divText'>
                        With supporting text below as a natural lead-in to additional content additional content additional content.
                   </div>
                 <Button id='Button'>Buy Now</Button>
                 </Card.Body>
                 </Card>
                 </div>
             </Col>
         </Row>
     </Container>
    </div>
  )
}

export default Pricing