import React from "react";
import { useLoaderData  } from "react-router-dom";
import EachTopic from "../EachTopic/EachTopic";
import './Topic.css';

const Topic = () => {
  const quiz = useLoaderData();
  const insideQuiz = quiz.data;
  console.log(insideQuiz);

  const ClickHandler = (id) =>{
  console.log("id= ", id);
  
};
// function loader({ id }) {
//   const res = await fetch(`https://openapi.programming-hero.com/api/quiz/${id}`);
//   if (res.status === 404) {
//     throw new Response("Not Found", { status: 404 });
//   }
//   return res.json();
// }

  return (
    <div className="container mt-5 topicDesign">
      {insideQuiz.map((inQuiz) => (
        <EachTopic key={inQuiz.id} inQuiz={inQuiz} ClickHandler={ClickHandler}></EachTopic>
      ))}
    </div>
  );
};

export default Topic;
