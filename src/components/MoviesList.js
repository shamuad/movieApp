import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import {Grid} from 'semantic-ui-react';
import {GridLoader} from 'react-spinners';

const MoviesList = ({movies, deleteMovie}) => {

    const emptyMessage = (
        <p>There are no movies yet.</p>
    );

    const moviesList = (
        <div>

            <GridLoader
                size={ 15 }
                color={ '#1075ef' }
                loading={ movies.fetching }
            />

            {
                movies.error.response ?
                    <h3>Error data retrieving!</h3>
                    :
                    <Grid stackable columns={ 3 }>
                        {
                            movies.movieList.map(movie =>
                                <MovieCard
                                    key={ movie._id }
                                    deleteMovie={deleteMovie}
                                    movie={ movie }/>
                            )
                        }
                    </Grid>
            }
        </div>
    );

    return (
        <div>
            { movies.length === 0 ? emptyMessage : moviesList }
        </div>
    );
};

MoviesList.propTypes = {
    movies: PropTypes.shape({
        movieList: PropTypes.array.isRequired
    }).isRequired
};

export default MoviesList;