import React, {Component} from 'react';
import {Button, Form, Image, Message} from 'semantic-ui-react';
import InlineError from '../components/InlineError';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';

class NewMovieForm extends Component {
    state = {
        _id: this.props.movie ? this.props.movie._id : '',
        title: this.props.movie ? this.props.movie.title : '',
        cover: this.props.movie ? this.props.movie.cover : '',
        errors: {},
        redirect:false
    };

    static propTypes = {
        onNewMovieSubmit: PropTypes.func.isRequired
    };

    componentWillReceiveProps(nextProps, nextContext) {
        const {movie} = nextProps.newMovie
        if (
            movie.title &&
            movie.title !== this.state.title
        ) {
            this.setState({
                title: movie.title,
                cover: movie.cover
            })
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = () => {
        const errors = this.validate();
        this.setState({
            errors,
            redirect:true
        });

        const _id = this.state._id || this.props.newMovie.movie._id;

        if (Object.keys(errors).length === 0) {
            if(!_id)
                this.props.onNewMovieSubmit(this.state);
            else
                this.props.onUpdateMovieSubmit({...this.state, _id})
        }
    }

    validate = () => {
        const errors = {};
        if (!this.state.title) errors.title = "Please give a title name!"
        if (!this.state.cover) errors.cover = "Please insert cover image url!"
        return errors;
    }

    render() {
        const {errors} = this.state;
        const form = (
            <Form onSubmit={ this.onSubmit }
                  loading={ this.props.newMovie.fetching || this.props.newMovie.movie.fetching }>
                <Form.Field error={ !!errors.title }>
                    <label>Title</label>
                    <input
                        id="title"
                        name="title"
                        value={ this.state.title }
                        onChange={ this.handleChange }
                        placeholder='Title'/>
                    { errors.title && <InlineError message={ errors.title }/> }
                </Form.Field>
                <Form.Field error={ !!errors.cover }>
                    <label>Cover image url</label>
                    <input
                        id="cover"
                        name="cover"
                        value={ this.state.cover }
                        onChange={ this.handleChange }
                        placeholder='Cover image url'/>
                    { errors.cover && <InlineError message={ errors.cover }/> }
                </Form.Field>
                <div className="clearfix">
                    <Image src={ this.state.cover } size='small'/>
                </div>
                <Button type='submit'>Submit</Button>
                {
                    this.props.newMovie.error.response &&
                    (
                        <Message negative>
                            <Message.Header>We're sorry! </Message.Header>
                            <p>An error occured. Please try again later!</p>
                        </Message>
                    )
                }
            </Form>
        );

        return (
            <div>
                {
                    this.props.newMovie.done && this.state.redirect ? <Redirect to="/movies"/> : form
                }
            </div>
        );
    }
}

NewMovieForm.propTypes = {};

export default NewMovieForm;