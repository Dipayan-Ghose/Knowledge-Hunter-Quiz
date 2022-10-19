import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const QuizPage = () => {
    const quiz= useLoaderData();
    const questions=quiz.data.questions;
    console.log(quiz.data.questions);
    
    return (
        <div>
            {
                questions.map(ques=> <Quiz 
                    key={ques.id}
                    ques={ques}></Quiz>)
            }
        </div>
    );
};

export default QuizPage;