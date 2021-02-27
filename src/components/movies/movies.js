import React, { Component } from 'react';
import List from '../list/list';

function Movies(props) {
    const filterList = props.list.filter((element) => element.type == 'MOVIE');

    return(
        <section>
            <header>Movies</header>
            <List filterList={filterList}></List>
        </section>
    );
}

export default Movies;