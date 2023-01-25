import React from 'react'
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function Comment({comments,setComments}) {
    console.log(comments);

    
  return (
    // <div>sdf
    //     <div>sdfds</div>
    // </div>
    <div>
        {
            comments.map((comment,idx)=>{
                return(
                <div>
                <Alert key={idx} comment={comment} className='alertButton'>
                <p className='commentArea'>{comments[idx]}</p>
                <Button className="deleteButton" variant="danger" onClick={(e)=>{
                    e.stopPropagation();
                    let delteCopy=[...comments];
                    delteCopy.splice(idx,1);
                    setComments(delteCopy);

                }}>삭제</Button>{' '}
                </Alert>
                </div>
                )
            })
        }
    </div>
  )
}

export default Comment