import React, {Component} from 'react';
import {Container, Image, Menu, Visibility} from "semantic-ui-react";
import {fixedMenuStyle, menuStyle} from "../helpers/styleHelper";
import {Link} from "react-router-dom";

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
            </div>
        );
    }
}

Header.propTypes = {};

export default Header;