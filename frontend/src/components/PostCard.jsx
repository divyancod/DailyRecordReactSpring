import React, {Component} from 'react';
import {Card, CardBody, CardSubtitle, CardText, CardTitle} from "reactstrap";

class PostCard extends Component {
    render() {
        return (
            <Card>
                <CardBody>
                    <CardTitle tag="h5">{this.props.post.title}</CardTitle>
                    <CardText>{this.props.post.body}</CardText>
                </CardBody>
            </Card>
        );
    }
}

export default PostCard;