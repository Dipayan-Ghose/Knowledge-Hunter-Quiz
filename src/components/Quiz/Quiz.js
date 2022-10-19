import React from "react";
import Card from "react-bootstrap/Card";
import './Quiz.css';
import QuizOptions from "./QuizOptions/QuizOptions";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Quiz = ({ ques }) => {
  const { id, correctAnswer, options, question } = ques;
 
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
  

  return (
    <div className="cardStyle">
     <Card border="secondary" >
        <Card.Header >
            <div dangerouslySetInnerHTML={{__html: question}}></div></Card.Header>
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
