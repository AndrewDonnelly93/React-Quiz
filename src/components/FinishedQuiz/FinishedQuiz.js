import React from 'react';
import classes from './FinishedQuiz.scss';
import Button from '../UI/Button/Button';
import {Link} from 'react-router-dom';

const FinishedQuiz = (props) => {
    const successCounts = Object.keys(props.results).reduce((total, key) => {
        if (props.results[key] === 'success') {
            total++;
        }
        return total;
    }, 0);

    return (
        <div className={classes.FinishedQuiz}>
            <ul>
                {props.quiz.map((quizItem, index) => {
                    return (
                        <li
                            key={index}

                        >
                            <strong>{index + 1}. </strong>
                            {quizItem.question}
                            <i className={`fa
                             ${props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check'}
                              ${classes[props.results[quizItem.id]]}`
                            }/>
                        </li>
                    )
                })}
            </ul>

            <p>Correct {successCounts} out of {props.quiz.length}</p>

            <div>
                <Button type="primary" onClick={props.onRetry}>Repeat</Button>
                <Link to="/">
                    <Button type="success">Go to the quizzes list</Button>
                </Link>
            </div>
        </div>
    )
};

export default FinishedQuiz;