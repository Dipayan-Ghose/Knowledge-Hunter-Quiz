import React from 'react';
import './QuizOptions.css';
const QuizOptions = ({opt,clickBox}) => {

    return (
        <div className='optionGap '>
           <input onClick={()=>clickBox(opt)} type='radio' ></input> {opt}
        </div>
    );
};

export default QuizOptions;