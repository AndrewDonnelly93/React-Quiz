import React from 'react';
import classes from './AnswerItem.scss';

const AnswersItem = props => {

    return (
        <li
            className={`${classes.AnswerItem}
             ${props.state ? classes[props.state] : null}`}
            onClick={() => props.onAnswerClick(props.answer.id)}
        >
            {props.answer.text}
        </li>
    );
};

export default AnswersItem;