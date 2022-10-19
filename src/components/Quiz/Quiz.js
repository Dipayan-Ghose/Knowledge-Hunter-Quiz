import React from "react";
import Card from "react-bootstrap/Card";
import './Quiz.css';
import QuizOptions from "./QuizOptions/QuizOptions";
const Quiz = ({ ques }) => {
  const { id, correctAnswer, options, question } = ques;
  return (
    <div className="cardStyle">
     <Card border="secondary" >
        <Card.Header >
            <div dangerouslySetInnerHTML={{__html: question}}></div></Card.Header>
        <Card.Body>
          <Card.Text className="options justify-evenly">
            {
                options.map((opt,k) => <QuizOptions 
                    key={k}
                    opt={opt}></QuizOptions>)
            }
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Quiz;
