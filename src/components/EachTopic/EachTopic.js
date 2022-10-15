import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './EachTopic.css';
const EachTopic = ({inQuiz}) => {
  const { id, name, logo, total } = inQuiz;

  return (
    <div className="cardLayout" >
      <Card >
        <Card.Img variant="top" src={logo} />
        <Card.Body className="cardBody">
          <Card.Title className="totalQuiz">{name}</Card.Title>
          <Card.Text className="totalQuiz">Total Quiz: {total}
          </Card.Text>
          <Button className="fs-5 w-75" variant="primary">Start Quiz</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default EachTopic;
