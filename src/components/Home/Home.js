import React from "react";
import { useLoaderData } from "react-router-dom";
import EachTopic from "../EachTopic/EachTopic";

const Home = () => {
  const quiz = useLoaderData();
  const insideQuiz = quiz.data;
  console.log(insideQuiz);
  return (
    <div>
        <div>
            <h1>
                This is big header
            </h1>
        </div>
        <div className="container mt-5 topicDesign">
      {insideQuiz.map((inQuiz) => (
        <EachTopic key={inQuiz.id} inQuiz={inQuiz}></EachTopic>
      ))}
    </div>
    </div>
   
  );
};

export default Home;