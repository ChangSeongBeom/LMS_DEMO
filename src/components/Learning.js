import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useNavigate} from 'react-router-dom';

function Learning({learning,idx}) {
    let navigate=useNavigate();
    return (
        <Card style={{ width: '18rem' }}>
   
          <Card.Body className='goLearningBody'>
            <img src={learning[idx].img_link}/>
            <Card.Title>{learning[idx].title}</Card.Title>
            <Card.Text>{learning[idx].content}</Card.Text>
           
            <Button variant="primary" className='goLearning' onClick={()=>{navigate(`/detail/${idx}`)}}>수강신청하러 가기</Button>
         
          </Card.Body>
        </Card>
      );
}

export default Learning