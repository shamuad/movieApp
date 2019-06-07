import React from 'react';
import PropTypes from 'prop-types';
import {Grid, GridColumn, Card} from "semantic-ui-react";

const ActorList = props => {
    return (
        <div>
            <Grid stackable columns={ 3 }>
                {
                    props.actors.map((actor) => (
                        <GridColumn key={actor.name}>
                            <Card>
                                <Card
                                image={actor.actorimg}
                                header={actor.name}
                                extra={actor.description}
                                />
                            </Card>
                        </GridColumn>
                    ))
                }
            </Grid>
        </div>
    );
};

ActorList.propTypes = {
    actors: PropTypes.array.isRequired
};

export default ActorList;