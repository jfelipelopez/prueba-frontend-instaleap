import React, { Component } from 'react';
import List from '../list/list';

function Home(props) {
    return(
        <section>
            <header>All - Movies and Series</header>
            <List filterList={props.list}></List>
        </section>
    );
}

export default Home;