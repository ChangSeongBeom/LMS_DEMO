import React,{useState} from 'react'
import {Nav} from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Comment from '../components/Comment.js';

function Detail({learning}) {
    let[like,setLike]=useState(0);
    let {id}=useParams();
  
    let findLearning=learning.find(function(x){
        return x.id==id;
    })
    let [clickEvent,setClick]=useState(findLearning.click);
    let [comments,setComments]=useState([]);
    let [register,setRegister]=useState(false);
    let [inputValue,setInputValue]=useState('');
  
   
  return (
        <div className='player-outer'>
            <div className='player'>  
                <video className='video' src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" controls></video>
            </div>
            <div className='footDiv'>
                <div className='titleDiv'>
             
                <h3>
                    <Badge bg="warning"  text="dark" onClick={()=>{
                        setLike(like+1);
                        setClick(clickEvent+1);
                 
                    }}> 클릭시 조회수 증가:</Badge>👍{like}
                </h3>
                <h3>
                    <Badge bg="primary">제목: {findLearning.title}</Badge>
                </h3>
                <h3>
                    <Badge bg="light" text="dark">콘텐츠 내용: {findLearning.content}</Badge>
                </h3>
                <h3>
                    <Badge bg="light" text="dark">조회수: {clickEvent}</Badge>
                </h3>
                <h3>
                    <Badge bg="light" text="dark">재생시간: 10분 10초</Badge>
                </h3>
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label  column sm={5}></Form.Label>
                    <Col sm={10} className="commentOuter">
                    <Form.Control className="commentText" type="comment" placeholder="댓글을 남겨주세요" onKeyPress={e => {
                        if (e.key === 'Enter'){alert("엔터 못쳐요~"); e.preventDefault();}}}  onChange={(e)=>{
                            setInputValue(e.target.value);
                        
                    }}/>
                    <Button className="commentButton" variant="primary" onClick={(e)=>{
                        
                        setInputValue(e.target.value);
                        let copy=[...comments,inputValue]
                        setComments(copy);
                        
                        setInputValue("");
                     
                    }}>등록</Button>{' '}
                    </Col>
                    </Form.Group>

                    <Comment comments={comments} setComments={setComments}></Comment>
                </Form>

                
        
                </div> 
            </div>
        </div>

    
  )
}



export default Detail