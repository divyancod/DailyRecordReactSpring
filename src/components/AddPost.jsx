import React, {Component} from 'react';
import {Button, Col, Form, Input, Row} from "reactstrap";
import {connect} from "react-redux";
import {savePost} from "./reducers/mainaction";
import {toast} from "react-toastify";

class AddPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: ""
        }
        this.handleTitleChange = this.handleTitleChange.bind(this)
        this.handleBodyChange = this.handleBodyChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.postSaved === true) {
            if (this.state.title !== '')
                this.setState({title: ""})
            if (this.state.body !== '')
                this.setState({body: ""})
        }
    }

    handleTitleChange = e => {
        this.setState({title: e.target.value})
    }
    handleBodyChange = e => {
        this.setState({body: e.target.value})
    }
    handleSubmit = e => {
        e.preventDefault();
        if (this.state.body === '') {
            toast("Body can't be empty", {type: "warning"})
            return;
        }
        this.props.savePost({title: this.state.title, body: this.state.body, token: this.props.token})
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Row>
                    <Col md={10}>
                        <Input
                            type="text"
                            placeholder="Enter title..."
                            className="mb-2"
                            value={this.state.title}
                            onChange={this.handleTitleChange}
                        />
                    </Col>
                    <Col md={2} className="text-center">
                        <Button type="submit" block color="primary">
                            Add Post
                        </Button>
                    </Col>
                </Row>
                <Input
                    type="textarea"
                    placeholder="Enter your thoughts here..."
                    className="mb-2"
                    value={this.state.body}
                    onChange={this.handleBodyChange}
                />
            </Form>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.token,
        postSaved: state.loadPosts
    }
}
export default connect(mapStateToProps, {savePost})(AddPost);