import React, {Component} from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import {
    Container, Divider, Grid, Header, Image, List, Menu, Segment, Visibility,
} from 'semantic-ui-react';
import {menuStyle, fixedMenuStyle, overlayStyle} from './helpers/styleHelper';
import MoviesPage from './components/pages/MoviesPage';
import {Link, Route} from 'react-router-dom';

class App extends Component {

    state = {
        menuFixed: false,
        overlayFixed: false,
    }

    stickOverlay = () => this.setState({overlayFixed: true})

    stickTopMenu = () => this.setState({menuFixed: true})

    unStickOverlay = () => this.setState({overlayFixed: false})

    unStickTopMenu = () => this.setState({menuFixed: false})

    render() {
        const {menuFixed, overlayFixed, overlayRect} = this.state

        return (
            <div className="App">

                <Visibility
                    onBottomPassed={ this.stickTopMenu }
                    onBottomVisible={ this.unStickTopMenu }
                    once={ false }
                >
                    <Menu
                        borderless
                        fixed={ menuFixed ? 'top' : undefined }
                        style={ menuFixed ? fixedMenuStyle : menuStyle }
                    >
                        <Container text>
                            <Menu.Item>
                                <Image size='mini'
                                       src='http://www.myiconfinder.com/uploads/iconsets/48-48-0b750fa07b31429a05dd3ec0abd2c7af.png'/>
                            </Menu.Item>
                            <Menu.Item header>MovieApp</Menu.Item>
                            <Menu.Item as={ Link } to="/movies">
                                Movies
                            </Menu.Item>
                            <Menu.Item as='a'>Add New</Menu.Item>

                        </Container>
                    </Menu>
                </Visibility>

                <Container text>
                    <Visibility
                        offset={ 80 }
                        once={ false }
                        onTopPassed={ this.stickOverlay }
                        onTopVisible={ this.unStickOverlay }
                        style={ overlayFixed ? {...overlayStyle, ...overlayRect} : {} }
                    />

                    <Route path='/movies' component={ MoviesPage }></Route>

                    <hr/>

                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem expedita, necessitatibus.
                        Deserunt doloremque eos esse eum ex, fugiat illo itaque maxime modi molestias mollitia, pariatur
                        perferendis sit, sunt ullam veniam!
                    </div>
                    <div>Aperiam beatae dolorem laboriosam minima nobis, officiis perspiciatis? Ab beatae culpa eaque,
                        enim hic libero magnam porro praesentium provident qui? Adipisci aut eaque id in necessitatibus
                        quae reiciendis repudiandae voluptatum!
                    </div>
                    <div>Accusamus autem commodi cumque cupiditate deleniti deserunt dolor dolore eius est eum
                        laboriosam laudantium magnam minima molestiae molestias nemo neque, nobis non praesentium quas
                        quia quidem quo tenetur vero, voluptatibus.
                    </div>
                    <div>Accusamus architecto beatae blanditiis consequatur consequuntur cumque eaque excepturi illum
                        iste laboriosam perspiciatis provident, quia reprehenderit sapiente sint ullam voluptatibus
                        voluptatum? Cum distinctio fugit harum id provident, rerum sit tempore!
                    </div>
                    <div>Deserunt dicta illo iste qui quod vitae voluptate voluptates voluptatibus. Ab architecto autem
                        dignissimos, ea error facilis fugiat impedit inventore iste nisi possimus quas, sequi sint,
                        suscipit veniam veritatis voluptates?
                    </div>
                    <div>Aliquid at atque beatae commodi cupiditate dolorem doloremque dolores ea eos expedita explicabo
                        fuga fugiat harum incidunt ipsa ipsam modi mollitia, natus nesciunt officia optio ratione
                        recusandae saepe, sint veritatis.
                    </div>
                    <div>Aut cumque dolorem earum eligendi ex fugiat fugit illum, ipsa iste itaque laboriosam minima nam
                        nulla placeat similique sit unde ut voluptatem. Aspernatur, eum expedita harum neque officia
                        quibusdam similique!
                    </div>
                    <div>Amet assumenda corporis cumque dolor ea iste laborum minima natus necessitatibus, nesciunt
                        officiis perferendis quae, quas quibusdam quis ratione rem temporibus unde vel, voluptate?
                        Aspernatur eos fugiat nostrum! Rerum, vel?
                    </div>
                    <div>Et odit quibusdam sit? Blanditiis delectus dignissimos enim eum quae rem sit unde veritatis?
                        Accusantium aut, consequatur delectus dolores, eos est fugiat id ipsam molestias quam qui
                        reprehenderit tenetur vero!
                    </div>
                    <div>Aut magnam odit sed unde. A beatae debitis dolor doloremque, eveniet fugit iure optio quibusdam
                        voluptas. A ad facere fugit, maiores ratione repellat tempora? Alias atque ipsam nulla pariatur
                        soluta.
                    </div>

                </Container>

                <Segment inverted style={ {margin: '5em 0em 0em', padding: '5em 0em'} } vertical>
                    <Container textAlign='center'>
                        <Grid columns={ 4 } divided stackable inverted>
                            <Grid.Row>
                                <Grid.Column>
                                    <Header inverted as='h4' content='Group 1'/>
                                    <List link inverted>
                                        <List.Item as='a'>Link One</List.Item>
                                        <List.Item as='a'>Link Two</List.Item>
                                        <List.Item as='a'>Link Three</List.Item>
                                        <List.Item as='a'>Link Four</List.Item>
                                    </List>
                                </Grid.Column>
                                <Grid.Column>
                                    <Header inverted as='h4' content='Group 2'/>
                                    <List link inverted>
                                        <List.Item as='a'>Link One</List.Item>
                                        <List.Item as='a'>Link Two</List.Item>
                                        <List.Item as='a'>Link Three</List.Item>
                                        <List.Item as='a'>Link Four</List.Item>
                                    </List>
                                </Grid.Column>
                                <Grid.Column>
                                    <Header inverted as='h4' content='Group 3'/>
                                    <List link inverted>
                                        <List.Item as='a'>Link One</List.Item>
                                        <List.Item as='a'>Link Two</List.Item>
                                        <List.Item as='a'>Link Three</List.Item>
                                        <List.Item as='a'>Link Four</List.Item>
                                    </List>
                                </Grid.Column>
                                <Grid.Column>
                                    <Header inverted as='h4' content='Footer Header'/>
                                    <p>
                                        Extra space for a call to action inside the footer that could help re-engage
                                        users.
                                    </p>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                        <Divider inverted section/>
                        <Image
                            src='http://www.myiconfinder.com/uploads/iconsets/32-32-0b750fa07b31429a05dd3ec0abd2c7af.png'
                            centered size='mini'/>
                        <List horizontal inverted divided link size='small'>
                            <List.Item as='a' href='#'>
                                Site Map
                            </List.Item>
                            <List.Item as='a' href='#'>
                                Contact Us
                            </List.Item>
                            <List.Item as='a' href='#'>
                                Terms and Conditions
                            </List.Item>
                            <List.Item as='a' href='#'>
                                Privacy Policy
                            </List.Item>
                        </List>
                    </Container>
                </Segment>

            </div>
        );
    }
}

export default App;
