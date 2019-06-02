import React from 'react'
import {Card, GridColumn} from 'semantic-ui-react'

const MovieCard = ({movie}) => (
    <GridColumn>
        <Card>
            <Card
                image={ movie.cover }
                header={ movie.title }
            />
        </Card>
    </GridColumn>
);

export default MovieCard