import React, {Component} from 'react';
import classes from './QuizList.scss';
import {NavLink} from 'react-router-dom';


class QuizList extends Component {
    renderQuizzes() {
        return [1, 2, 3].map((quiz, index) => {
            return (
                <li
                    key={index}
                >
                    <NavLink to={`/quiz/${quiz}`}>
                        Quiz {quiz}
                    </NavLink>
                </li>
            )
        })
    }

    render() {
        return (
            <div className={classes.QuizList}>
                <h1>Quiz List</h1>
                <ul>
                    {this.renderQuizzes()}
                </ul>
            </div>
        );
    }
}

export default QuizList;
