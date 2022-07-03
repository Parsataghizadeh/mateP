import { useEffect, React} from 'react'
import './Team.css'
import Title from './Title'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { Image } from 'react-bootstrap'
import Aos from 'aos'
import "aos/dist/aos.css"


function Team() {
  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);
  return (
    <div className='team' id='tea'>
        <div className="teamAll">
          <Title title='Our Teams'/>
          <Container>
            <Row>
               <Col data-aos="fade-up" xs={12} sm={6} lg={3} className='qaz'>
                  <Card style={{ width: '18rem', backgroundColor: '#f1f1f1', boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.1)', border: 'none', borderRadius: '10px' }}>
                  <Image src="https://pps.whatsapp.net/v/t61.24694-24/252455938_2676112359365375_2895184617370296324_n.jpg?ccb=11-4&oh=01_AVyIbDdVJTccSxhntzCkThLUVF1EMwVRg5UiQ5qOVIp5tw&oe=62C5727B" rounded/>
                  <Card.Body>
                  <b className="teamName">Nasim Aghajani</b>
                  <p className="teamWork text-center">Digital Marketing specialist</p>
                  <div className="CartIcon">
                    <div class="d-grid gap-2"><button className="eded">Read about her</button></div>
                  </div>
                  </Card.Body>
                  </Card>
               </Col>
               <Col data-aos="fade-up" xs={12} sm={6} lg={3} className='qaz'>
                  <Card style={{ width: '18rem', backgroundColor: '#f1f1f1', boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.1)', border: 'none', borderRadius: '10px' }}>
                  <Image src="https://pps.whatsapp.net/v/t61.24694-24/262513416_1347800268976860_1960226588536291586_n.jpg?ccb=11-4&oh=cf11bc4c03ea65342021682f7fd71b13&oe=62C56DCB" rounded/>
                  <Card.Body>
                  <b className="teamName">Mohsen Safari</b>
                  <p className="teamWork text-center">Digital Marketing Manager</p>
                  <div className="CartIcon">
                    <div class="d-grid gap-2"><button className="eded">Read about him</button></div>
                  </div>
                  </Card.Body>
                  </Card>
               </Col>
               <Col data-aos="fade-up" xs={12} sm={6} lg={3} className='qaz'>
                  <Card style={{ width: '18rem', backgroundColor: '#f1f1f1', boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.1)', border: 'none', borderRadius: '10px' }}>
                  <Image src="https://pps.whatsapp.net/v/t61.24694-24/260112235_541308290855032_3702710399790509663_n.jpg?ccb=11-4&oh=01_AVxQvVajqs2QRLTBPLlDvtJt51MP7XgxokF6dA2fEjkhFg&oe=62C7A3A1" rounded/>
                  <Card.Body>
                  <b className="teamName">Farhad Aghajani</b>
                  <p className="teamWork text-center">Human resources Manager</p>
                  <div className="CartIcon">
                    <div class="d-grid gap-2"><button className="eded">Read about him</button></div>
                  </div>
                  </Card.Body>
                  </Card>
               </Col>
               <Col data-aos="fade-up" xs={12} sm={6} lg={3} className='qaz'>
                  <Card style={{ width: '18rem', backgroundColor: '#f1f1f1', boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.1)', border: 'none', borderRadius: '10px' }}>
                  <Image src="https://pps.whatsapp.net/v/t61.24694-24/264266506_434690334780526_8655729996544702180_n.jpg?ccb=11-4&oh=01_AVzTAniru54FHHmBL0ysTB8PwIZebWmRzZFunPors0mQjw&oe=62C8125A" rounded/>
                  <Card.Body>
                  <b className="teamName">Parsa Taghizadeh</b>
                  <p className="teamWork text-center">React&Frontend developer</p>
                  <div className="CartIcon">
                    <div class="d-grid gap-2"><button className="eded">Read about him</button></div>
                  </div>
                  </Card.Body>
                  </Card>
               </Col>
            </Row>
          </Container>
        </div>
    </div>
  )
}

export default Team