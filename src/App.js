import React, { useEffect, useState } from 'react'
import {Nav,Navbar,Container,Button} from 'react-bootstrap';
import {Routes,Route,Router,useNavigate} from 'react-router-dom';
import axios from 'axios'; 
import data from './data.js';
import data2 from './data2.js';
import './App.css';
import Detail from './routes/Detail.js';
import Learning from './components/Learning.js';

function App() {

  let navigate=useNavigate();
  let [learning,setLearning]=useState(data);
  let [testData]=useState(data2);
  
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>Learning Demo</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
                {/* <Nav.Link >수강신청하기</Nav.Link>
                <Nav.Link>내가 찜한 목록</Nav.Link>
                <Nav.Link>내 수강 현황</Nav.Link> */}
                <Nav.Link onClick={()=>{navigate('/detail/0')}}>상세화면 테스트</Nav.Link>
              </Nav>
            </Container>
      </Navbar>

      <div className='main'></div>
      
      <Routes>
        <Route path="/" element={
          <div className='sub'>
            <div className="sub-class">
            {
              learning.map((learn,idx)=>
                <Learning key={idx} learning={learning} idx={idx}/>
              )
            }
          </div>
          <div className='moreup'>
          <Button variant="warning" className='more' onClick={()=>{
            let copy=[...learning,...testData]
            setLearning(copy);
          }}>더보기</Button>{' '}
          </div>
        </div>
        }/>

      <Route path="/detail/:id" element={<Detail learning={learning}/>}/>
      
    </Routes>
    </div>
  );
}

export default App;
