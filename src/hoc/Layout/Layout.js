import React, {Component} from 'react';
import classes from './Layout.scss';
import MenuToggle from '../../components/navigation/MenuToggle/MenuToggle';
import Drawer from '../../components/navigation/Drawer/Drawer';

class Layout extends Component {
    state = {
        menu: false
    };

    onMenuToggle = () => {
        this.setState({
            menu: !this.state.menu
        })
    };

    onMenuClose = () => {
        this.setState({
            menu: false
        })
    };

    render() {
        return (
            <div className={classes.Layout}>
                <Drawer
                    isOpen={this.state.menu}
                    onClose={this.onMenuClose}
                />

                <MenuToggle
                    onToggle={this.onMenuToggle}
                    isOpen={this.state.menu}
                />
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout;