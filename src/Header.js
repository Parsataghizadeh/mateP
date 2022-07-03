import { useEffect, React} from 'react'
import './Header.css'
import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-scroll'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import Aos from 'aos'
import "aos/dist/aos.css"


function Header() {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);
  function goUp() {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  return (
    <div className='header-org'>
     <Navbar expand="lg">
    <Container>
     <Navbar.Brand bsPrefix='ms-4' href="#home"><img className='d-inline-block align-top' src='https://preview.uideck.com/items/mate/img/logo.png'></img></Navbar.Brand>
     <Navbar.Toggle aria-controls="basic-navbar-nav" />
     <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
      <Link to="/" spy={true} smooth={true} offset={50} duration={500} className="navlink-header" href="#home">Home</Link>
      <Link to="ser" spy={true} smooth={true} offset={-150} duration={500} className="navlink-headerE" href="#link">Services</Link>
      <Link to="fea" spy={true} smooth={true} offset={-110} duration={500} className="navlink-header" href="#link">Features</Link>
      <Link to="pri" spy={true} smooth={true} offset={-80} duration={500} className="navlink-header" href="#link">Pricing</Link>
      <Link to="tea" spy={true} smooth={true} offset={-60} duration={500} className="navlink-header" href="#link">Team</Link>
      <Link to="con" spy={true} smooth={true} offset={50} duration={500} className="navlink-header" href="#link">Contact</Link>
      </Nav>
      </Navbar.Collapse>
      
   </Container>
    </Navbar> 
    <button data-aos="fade-up" className='endKh' onClick={goUp}><svg className='Arrow' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 3.5a.5.5 0 01.5.5v9a.5.5 0 01-1 0V4a.5.5 0 01.5-.5z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M7.646 2.646a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L8 3.707 5.354 6.354a.5.5 0 11-.708-.708l3-3z" clip-rule="evenodd"></path></svg></button>
    <Container className='mt-5_custom1' id='mt-5_custom1'>
      <Row>
        <Col xs={12}><div data-aos="fade-down"><h1 className='f-text'>Mate - Free Parallax Website Template</h1></div></Col>
      </Row>
    </Container> 
    <Container className='mt-4' id='mt-4'>
      <Row>
        <Col xs={12}><h1 className='f-text2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1></Col>
      </Row> 
    </Container> 
    <Container className='mt-4' id='mt-4'>
      <Row>
        <Col xs={12}  className="download-col mt-4 mb-5"><a href='src\img\Untitled-1.jpg' download className='download-a-f py-2 px-4'>Download</a></Col>
      </Row>
    </Container>
    <div className='mt-5'>
      <br/>
    </div>
    </div>
  )
}

export default Header