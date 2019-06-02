import React, {Component} from 'react';
import {Container, Image, Menu, Visibility} from "semantic-ui-react";
import {fixedMenuStyle, menuStyle} from "../helpers/styleHelper";
import {Link, NavLink} from "react-router-dom";

class Header extends Component {
    state = {
        menuFixed: null,
        overlayFixed: false,
    };

    stickTopMenu = () => this.setState({menuFixed: true});
    unStickTopMenu = () => this.setState({menuFixed: null});

    render() {
        const {menuFixed} = this.state;
        return (
            <div>
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
                            <Menu.Item as={ Link } to="/" exact="true">
                                <Image size='mini'
                                       src='http://www.myiconfinder.com/uploads/iconsets/48-48-0b750fa07b31429a05dd3ec0abd2c7af.png'/>
                                <Menu.Item header>MovieApp</Menu.Item>
                            </Menu.Item>
                            <Menu.Item as={ NavLink } to="/movies" exact>
                                Movies
                            </Menu.Item>
                            <Menu.Item as={ NavLink } to="/movies/new">
                                Add New</Menu.Item>
                        </Container>
                    </Menu>
                </Visibility>
            </div>
        );
    }
}

Header.propTypes = {};

export default Header;