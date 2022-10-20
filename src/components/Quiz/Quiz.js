import React from "react";
import Card from "react-bootstrap/Card";
import './Quiz.css';
import QuizOptions from "./QuizOptions/QuizOptions";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye } from 'react-icons/fa';
import { Button } from "react-bootstrap";
import { useState } from "react";

const Quiz = ({ ques }) => {
  const { id, correctAnswer, options, question } = ques;

  // const [isChecked, setIsChecked] = useState(false);
  // setIsChecked(isChecked);

 
  const clickBox =(ans)=>{
   
    if(ans===correctAnswer){
        toast("Correct Answer",{autoClose:1000});
        // alert ('correct');
    }
    else{
       toast("Wrong Answer",{autoClose:1000}) ;
        // alert('wrong');
    }
  };
  const press =()=>{
    toast(correctAnswer,{autoClose:1600});
}
  

  return (
    <div className="cardStyle">
     <Card border="secondary" className="cardPosition">
        <Card.Header className=" text-center">
            <div className="fs-5" dangerouslySetInnerHTML={{__html: question}} ></div>
           <Button onClick={press} variant="light" >< FaEye/></Button> 
            </Card.Header>
        <Card.Body>
          <Card.Text className="options justify-evenly">
            {
                options.map((opt) => <QuizOptions 
                    key={id}
                    opt={opt}
                    clickBox={clickBox}
                    
                    ></QuizOptions>)
            }
          </Card.Text>
        </Card.Body>
      </Card>
      
      <ToastContainer position="top-center"></ToastContainer>
      
    </div>
  );
};

export default Quiz;
