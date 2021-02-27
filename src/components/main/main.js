import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter, useLocation } from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchMovies } from '../../redux/ActionCreators';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Menu from '../menu/menu';
import Home from '../home/home';
import Movies from '../movies/movies';
import Series from '../series/series';

import './main.css'

const mapStateToProps = state => {
	return {
		moviesinfo: state.movies
	}
}

const mapDispatchToProps = dispatch => ({
    fetchMovies: () => dispatch(fetchMovies())
});

class Main extends Component {
	constructor(props) {
		super(props);
	}
    componentDidMount() {
        this.props.fetchMovies();
    }
    
    render() {
        const HomePage = () => {
    
            return(
                <Home
                    list={this.props.moviesinfo.movies}
                ></Home>
            )
        };
        const MoviesPage = () => {
            return(
                <Movies
                    list={this.props.moviesinfo.movies}
                ></Movies>
            )
        };
        const SeriesPage = () => {
    
            return(
                <Series
                    list={this.props.moviesinfo.movies}
                ></Series>
            )
        };


        return(
            <div className="App">
                <TransitionGroup className="content">
                    <CSSTransition key={this.props.location.key} classNames="fade" timeout={300}>
                        <Switch location={this.props.location}>
                            <Route path='/home' component={HomePage} />
                            <Route path='/movies' component={MoviesPage} />
                            <Route path='/series' component={SeriesPage} />
                            <Redirect to="/home" />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
                <Menu
                    currentpage={this.props.location.pathname}
                ></Menu>
            </div>
        );
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));