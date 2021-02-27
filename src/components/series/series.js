import React, { Component } from 'react';
import List from '../list/list';

function Series(props) {
    const filterList = props.list.filter((element) => element.type == 'SERIES');
    
    return(
        <section>
            <header>Series</header>
            <List filterList={filterList}></List>
        </section>
    );
}

export default Series;