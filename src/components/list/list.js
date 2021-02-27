import React, { Component } from 'react';
import './list.css';

class List extends Component {
    constructor(props) {
		super(props);
	}
    render() {
        const items = this.props.filterList.map((movie,index) => {
            return(
                <li key={index}><i className={movie.type == 'MOVIE' ? 'fi entradas-de-cine' : 'fi tv'}></i>{movie.name}</li>
            );
        })

        return(
            <ul className="movies-list">
                {items}
            </ul>
        );
    }
}

export default List;