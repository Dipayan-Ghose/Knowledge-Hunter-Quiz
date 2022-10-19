import React from 'react';
import './QuizOptions.css';
const QuizOptions = ({opt}) => {
    return (
        <div className='optionGap '>
           <input type='checkbox' ></input> {opt}
        </div>
    );
};

export default QuizOptions;