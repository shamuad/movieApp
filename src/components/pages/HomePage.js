import React, {Component} from 'react';
import ActorList from "../ActorList";

class HomePage extends Component {
    state = {
        actors: [
            {
                name: "Dwayne Johnson",
                description: "Dwayne Johnson, popularly known as The Rock is a renowned American actor born in 1972. He is widely known following his long career in wrestling. Dwayne Johnson is also a producer and singer. ",
                actorimg: "https://www.topbestproreview.com/wp-content/uploads/2018/09/Dwayne-Johnson.jpg"
            },
            {
                name: "Thomas Jeffrey Hanks",
                description: "Thomas Hanks is a famous American film-maker and actor. He had done many different roles in comedy and drama series. He started his career in the 80’s. Jeffrey Hanks made an entry in the acting industry in 1984 after acting the movie Splash. ",
                actorimg: "https://www.topbestproreview.com/wp-content/uploads/2018/09/Thomas-Jeffrey-Hanks.jpg"
            },
            {
                name: "Vin diesel",
                description: "Vin Diesel is a 51-year old actor born in Alameda County, California. Besides being an actor, Vin Diesel is also a producer, known and director. He is famously known for his starring role as Dominic in The Fast and Furious. He has also played a leading role in Pacifier and Find Me Guilty. ",
                actorimg: "https://www.topbestproreview.com/wp-content/uploads/2018/09/Vin-diesel.jpeg"
            }]
    }

    render() {
        return (
            <div>
                <h2>2019 Top 3 actors in the world</h2>
                <ActorList actors={ this.state.actors }/>
            </div>
        );
    }
}

HomePage.propTypes = {};

export default HomePage;