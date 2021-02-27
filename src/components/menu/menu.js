import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './menu.css'

class Menu extends Component {
    constructor(props) {
		super(props);
	}
    
    render() {
        let buttonActive = (buttonlink) => this.props.currentpage == buttonlink ? 'active' : '';

        return(
            <nav className="main-menu">
                <Link className={buttonActive('/home')} to="/home">All</Link>
                <Link className={buttonActive('/movies')} to="/movies">Movies</Link>
                <Link className={buttonActive('/series')} to="/series">Series</Link>
            </nav>
        );
    }
}

export default Menu;