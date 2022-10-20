import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import './EachTopic.css';
const EachTopic = ({inQuiz,ClickHandler}) => {
  const { id, name, logo, total } = inQuiz;

  return (
    <div className="cardLayout" >
      <Card >
        <Card.Img variant="top" className="" src={logo} />
        <Card.Body className="cardBody">
          <Card.Title className="totalQuiz">{name}</Card.Title>
          <Card.Text className="totalQuiz">Total Quiz: {total}
          </Card.Text>
          <Button onClick={()=>ClickHandler(id)} className="fs-5 w-75 " variant="primary"> <Link to={`/inQuiz/${id}`} className='link'>Start Quiz</Link></Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default EachTopic;
