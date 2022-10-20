import React from "react";
import { useLoaderData } from "react-router-dom";
import EachTopic from "../EachTopic/EachTopic";
import './Home.css';

const Home = () => {
  const quiz = useLoaderData();
  const insideQuiz = quiz.data;
  console.log(insideQuiz);
  return (
    <div>
        <div className="header">
            <div>
              <img className="img" src="https://blog.cambridgeinternational.org/wp-content/uploads/Exam-tips_resized-1-700x300-1.jpg" alt=''></img>
            </div>
            <div>
              <h3>
              The website has developed to bring out your knowledge about <br></br><span>React, Javascript, Css and Github.</span> <br></br>
              Are You Ready To Take Part In A Quiz!
             
              </h3>
            </div>
        </div>
        <div className="container mt-5 mb-5 topicDesign">
      {insideQuiz.map((inQuiz) => (
        <EachTopic key={inQuiz.id} inQuiz={inQuiz}></EachTopic>
      ))}
    </div>
    </div>
   
  );
};

export default Home;