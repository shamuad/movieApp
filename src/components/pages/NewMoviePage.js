import React, {Component} from 'react';
import NewMovieForm from '../NewMovieForm';

class NewMoviePage extends Component {
    render() {
        return (
            <div>
                <NewMovieForm/>
            </div>
        );
    }
}

NewMoviePage.propTypes = {};

export default NewMoviePage;