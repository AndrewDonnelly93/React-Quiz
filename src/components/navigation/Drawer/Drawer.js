import React, {Component} from 'react';
import classes from './Drawer.scss';
import {NavLink} from 'react-router-dom';
import Backdrop from '../../UI/Backdrop/Backdrop';

const links = [
    {to: '/', label: 'List', exact: true},
    {to: '/auth', label: 'Authorisation', exact: false},
    {to: '/quiz-creator', label: 'Create a quiz', exact: false}
];

class Drawer extends Component {
    renderLinks() {
        return links.map((link, index) => {
            return (
                <li key={index}>
                    <NavLink
                        to={link.to}
                        exact={link.exact}
                        activeClassName={classes.active}
                        onClick={() => this.props.onClose()}
                    >
                        {link.label}
                    </NavLink>

                </li>
            )
        })
    }

    render() {
        return (
            <React.Fragment>
                <nav
                    className={`${classes.Drawer}
                ${!this.props.isOpen ? classes.closed : null}`}
                >
                    <ul>
                        {this.renderLinks()}
                    </ul>
                </nav>
                {this.props.isOpen ? <Backdrop onClick={this.props.onClose}/> : null}
            </React.Fragment>
        )
    }
}

export default Drawer;