import React, {Component} from 'react';
import {Button, Checkbox, Form, Image} from 'semantic-ui-react';
import InlineError from '../components/InlineError';

class NewMovieForm extends Component {
    state = {
        title: '',
        cover: '',
        errors: {}
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = () => {
        const errors = this.validate();
        this.setState({
            errors
        })
    }

    validate = () => {
        const errors = {};
        if (!this.state.title) errors.title = "Please give a title name!"
        if (!this.state.cover) errors.cover = "Please insert cover image url!"
        return errors;
    }

    render() {
        const {errors} = this.state;
        return (
            <div>
                <Form onSubmit={ this.onSubmit }>
                    <Form.Field error={!!errors.title}>
                        <label>Title</label>
                        <input
                            id="title"
                            name="title"
                            value={ this.state.title }
                            onChange={ this.handleChange }
                            placeholder='Title'/>
                        { errors.title && <InlineError message={ errors.title }/> }
                    </Form.Field>
                    <Form.Field error={!!errors.cover}>
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
                </Form>
            </div>
        );
    }
}

NewMovieForm.propTypes = {};

export default NewMovieForm;