import { useEffect, React} from 'react'
import './Baner1.css';
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import Aos from 'aos'
import "aos/dist/aos.css"

function Baner1() {
  useEffect(() => {
    Aos.init({duration: 200});
  }, []);
  return (
    <div className='baner1 mt-5' id='fea'>
     <section className='banerS'>
     <div id='title'>
      <Container>
       <Row>
        <Col id='t-center'>Some Features</Col>
       </Row>
     </Container>
     <hr className='span-line'/>
     <Container className='pareshodam'>
       <Row>
        <Col md={{ span: 8, offset: 2 }} xs={{ span: 10, offset: 1 }} id='t-center1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, dignissimos!
Lorem ipsum dolor sit amet, consectetur.</Col>
       </Row>
     </Container>
    </div>
    <Container id='conSakhti'>
        <Row>
            <Col className='fText' xxl={8} xs={12}>
                <Container id='banerRR'>
                    <Row>
                     <Col xs={12} sm={12} lg={6} id='hamebaham'>
                      <div className='divBoxx' id='etmam'>
                       <div className='divLogo'>
                        <svg className='svgBoxx' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M461.8 53.6c-.4-1.7-1.6-3-3.3-3.4-54.4-13.3-180.1 34.1-248.2 102.2-13.3 13.3-24.2 26.4-33.1 39.1-21-1.9-42-.3-59.9 7.5-50.5 22.2-65.2 80.2-69.3 105.1-1 5.9 3.9 11 9.8 10.4l81.1-8.9c.1 7.8.6 14 1.1 18.3.4 4.2 2.3 8.1 5.3 11.1l31.4 31.4c3 3 6.9 4.9 11.1 5.3 4.3.5 10.5 1 18.2 1.1l-8.9 81c-.6 5.9 4.5 10.8 10.4 9.8 24.9-4 83-18.7 105.1-69.2 7.8-17.9 9.4-38.8 7.6-59.7 12.7-8.9 25.9-19.8 39.2-33.1 68.4-68 115.5-190.9 102.4-248zM298.6 213.5c-16.7-16.7-16.7-43.7 0-60.4 16.7-16.7 43.7-16.7 60.4 0 16.7 16.7 16.7 43.7 0 60.4-16.7 16.7-43.7 16.7-60.4 0z"></path><path d="M174.5 380.5c-4.2 4.2-11.7 6.6-19.8 8-18.2 3.1-34.1-12.8-31-31 1.4-8.1 3.7-15.6 7.9-19.7l.1-.1c2.3-2.3.4-6.1-2.8-5.7-9.8 1.2-19.4 5.6-26.9 13.1-18 18-19.7 84.8-19.7 84.8s66.9-1.7 84.9-19.7c7.6-7.6 11.9-17.1 13.1-26.9.3-3.2-3.6-5.1-5.8-2.8z"></path></svg>
                       </div>
                       <div className='divTB'>
                        Bootstrap 4 Based
                       </div>
                        <div className='divDis'>
                         Lorem Ipsum is simply dummy text of the printing and typesetting printing industry.
                        </div>
                       </div>
                     </Col>
                     <Col xs={12} sm={12} lg={6} id='hamebaham'>
                      <div className='divBoxx'>
                       <div className='divLogo'>
                        <svg className='svgBoxx' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path></svg>                       </div>
                       <div className='divTB'>
                        Bootstrap 4 Based
                       </div>
                        <div className='divDis'>
                         Lorem Ipsum is simply dummy text of the printing and typesetting printing industry.
                        </div>
                       </div>
                     </Col>
                     <Col xs={12} sm={12} lg={6} id='hamebaham'>
                      <div className='divBoxx' id='etmam'>
                       <div className='divLogo'>
                       <svg className='svgBoxx' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M4 16h16V5H4v11zm9 2v2h4v2H7v-2h4v-2H2.992A.998.998 0 0 1 2 16.993V4.007C2 3.451 2.455 3 2.992 3h18.016c.548 0 .992.449.992 1.007v12.986c0 .556-.455 1.007-.992 1.007H13z"></path></g></svg>                       </div>
                       <div className='divTB'>
                        Bootstrap 4 Based
                       </div>
                        <div className='divDis'>
                         Lorem Ipsum is simply dummy text of the printing and typesetting printing industry.
                        </div>
                       </div>
                     </Col>
                     <Col xs={12} sm={12} lg={6} id='hamebaham'>
                      <div className='divBoxx'>
                       <div className='divLogo'>
                        <svg className='svgBoxx' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512.5 390.6c-29.9 0-57.9 11.6-79.1 32.8-21.1 21.2-32.8 49.2-32.8 79.1 0 29.9 11.7 57.9 32.8 79.1 21.2 21.1 49.2 32.8 79.1 32.8 29.9 0 57.9-11.7 79.1-32.8 21.1-21.2 32.8-49.2 32.8-79.1 0-29.9-11.7-57.9-32.8-79.1a110.96 110.96 0 0 0-79.1-32.8zm412.3 235.5l-65.4-55.9c3.1-19 4.7-38.4 4.7-57.7s-1.6-38.8-4.7-57.7l65.4-55.9a32.03 32.03 0 0 0 9.3-35.2l-.9-2.6a442.5 442.5 0 0 0-79.6-137.7l-1.8-2.1a32.12 32.12 0 0 0-35.1-9.5l-81.2 28.9c-30-24.6-63.4-44-99.6-57.5l-15.7-84.9a32.05 32.05 0 0 0-25.8-25.7l-2.7-.5c-52-9.4-106.8-9.4-158.8 0l-2.7.5a32.05 32.05 0 0 0-25.8 25.7l-15.8 85.3a353.44 353.44 0 0 0-98.9 57.3l-81.8-29.1a32 32 0 0 0-35.1 9.5l-1.8 2.1a445.93 445.93 0 0 0-79.6 137.7l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.2 56.5c-3.1 18.8-4.6 38-4.6 57 0 19.2 1.5 38.4 4.6 57l-66 56.5a32.03 32.03 0 0 0-9.3 35.2l.9 2.6c18.1 50.3 44.8 96.8 79.6 137.7l1.8 2.1a32.12 32.12 0 0 0 35.1 9.5l81.8-29.1c29.8 24.5 63 43.9 98.9 57.3l15.8 85.3a32.05 32.05 0 0 0 25.8 25.7l2.7.5a448.27 448.27 0 0 0 158.8 0l2.7-.5a32.05 32.05 0 0 0 25.8-25.7l15.7-84.9c36.2-13.6 69.6-32.9 99.6-57.5l81.2 28.9a32 32 0 0 0 35.1-9.5l1.8-2.1c34.8-41.1 61.5-87.4 79.6-137.7l.9-2.6c4.3-12.4.6-26.3-9.5-35zm-412.3 52.2c-97.1 0-175.8-78.7-175.8-175.8s78.7-175.8 175.8-175.8 175.8 78.7 175.8 175.8-78.7 175.8-175.8 175.8z"></path></svg>                       </div>
                       <div className='divTB'>
                        Bootstrap 4 Based
                       </div>
                        <div className='divDis'>
                         Lorem Ipsum is simply dummy text of the printing and typesetting printing industry.
                        </div>
                       </div>
                     </Col>  
                    </Row>
                </Container>
            </Col>
            <Col className='imgBaner' md={4}>
             <div data-aos="zoom-in" className='imgDivv'><img className='imgBanerO' src='https://preview.uideck.com/items/mate/img/features/feature.png'></img></div>
            </Col>
        </Row>
    </Container>
     </section>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
    </div>
  )
}

export default Baner1