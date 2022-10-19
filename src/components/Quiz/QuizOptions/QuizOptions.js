import React from 'react';
import './QuizOptions.css';
const QuizOptions = ({opt,clickBox}) => {

    return (
        <div className='optionGap '>
           <input onClick={()=>clickBox(opt)} type='checkbox' ></input> {opt}
        </div>
    );
};

export default QuizOptions;