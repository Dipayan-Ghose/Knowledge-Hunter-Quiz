import React from "react";
import { useLoaderData } from "react-router-dom";
import EachTopic from "../EachTopic/EachTopic";
import './Topic.css';

const Topic = () => {
  const quiz = useLoaderData();
  const insideQuiz = quiz.data;
  console.log(insideQuiz);
  return (
    <div className="container mt-5 topicDesign">
      {insideQuiz.map((inQuiz) => (
        <EachTopic key={inQuiz.id} inQuiz={inQuiz}></EachTopic>
      ))}
    </div>
  );
};

export default Topic;
