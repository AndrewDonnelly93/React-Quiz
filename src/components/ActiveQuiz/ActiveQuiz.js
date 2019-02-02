import React from 'react';
import classes from './ActiveQuiz.scss';
import AnswersList from './AnswersList/AnswersList';

const ActiveQuiz = (props) => {
  return (
  <div className={classes.ActiveQuiz}>
        <p className={classes.Question}>
            <span>
                <strong>{props.questionNumber}. </strong>
                {props.question}
            </span>

            <small>{props.questionNumber} out of {props.quizLength}</small>
        </p>

        <AnswersList
            answers={props.answers}
            state={props.state}
            onAnswerClick={props.onAnswerClick}
        />
      </div>
  )
};

export default ActiveQuiz;

