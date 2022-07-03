import React from 'react'
import './Topic.css'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import Counter from './Counter'



function Topic() {
  return (
    <div className='topic mtt'>
      <div className="imgTopic">
          <Container id='topicCon'>
              <Row className='khar'>
                  <Col xs={12} md={3} className='topicCol'>
                      <div className="topicH"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"></path></svg></div>
                      <div className="topicB"><Counter end={240} start ={0} timer={1} /></div>
                      <div className="topicF">Working Hours</div>
                  </Col>
                  <Col xs={12} md={3} className='topicCol'>
                      <div className="topicH"><svg id='topivSvg' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M14 5H2v9a1 1 0 001 1h10a1 1 0 001-1V5zM1 4v10a2 2 0 002 2h10a2 2 0 002-2V4H1z" clip-rule="evenodd"></path><path d="M8 1.5A2.5 2.5 0 005.5 4h-1a3.5 3.5 0 117 0h-1A2.5 2.5 0 008 1.5z"></path></svg></div>
                      <div className="topicB"><Counter end={400} start ={0} timer={1} /></div>
                      <div className="topicF">Completed Projects</div>
                  </Col>
                  <Col xs={12} md={3} className='topicCol'>
                      <div className="topicH"><svg id='topivSvg' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16.712,13.288c-0.391-0.391-1.023-0.391-1.414,0l-1.597,1.596c-0.824-0.245-2.166-0.771-2.99-1.596 c-0.874-0.874-1.374-2.253-1.594-2.992l1.594-1.594c0.391-0.391,0.391-1.023,0-1.414l-4-4c-0.375-0.375-1.039-0.375-1.414,0 l-2.709,2.71C2.206,6.378,1.991,6.902,2,7.435c0.022,1.423,0.396,6.367,4.297,10.268C10.195,21.6,15.142,21.977,16.566,22 c0.005,0,0.023,0,0.028,0c0.528,0,1.027-0.208,1.405-0.586l2.712-2.712c0.391-0.391,0.391-1.023,0-1.414L16.712,13.288z M16.585,20c-1.248-0.021-5.518-0.356-8.874-3.712C4.343,12.92,4.019,8.636,4,7.414l2.004-2.005L8.59,7.995L7.297,9.288 C7.059,9.526,6.957,9.87,7.026,10.2c0.024,0.115,0.611,2.842,2.271,4.502s4.387,2.247,4.502,2.271 c0.331,0.071,0.673-0.032,0.912-0.271l1.293-1.293l2.586,2.586L16.585,20z"></path><path d="M15.795 6.791L13.005 4 13.005 10.995 20 10.995 17.209 8.205 21.712 3.702 20.298 2.288z"></path></svg></div>
                      <div className="topicB"><Counter end={600} start ={0} timer={1} /></div>
                      <div className="topicF">No. of Clients</div>
                  </Col>
                  <Col xs={12} md={3} className='topicCol'>
                      <div className="topicH"><svg id='topivSvg' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"></path></svg></div>
                      <div className="topicB"><Counter end={160} start ={0} timer={1} /></div>
                      <div className="topicF">Peoples Love</div>
                  </Col>
              </Row>
          </Container>
      </div>
    </div>
  )
}

export default Topic