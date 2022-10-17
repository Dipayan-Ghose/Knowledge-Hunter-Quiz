import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizPage = () => {
    const quiz= useLoaderData();
    console.log(quiz.data.questions);
    
    return (
        <div>
            
        </div>
    );
};

export default QuizPage;