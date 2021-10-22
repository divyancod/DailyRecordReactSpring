import React, {Component} from "react";
import { Col, Container, Row} from "reactstrap";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import AddPost from "./AddPost";
import PostContainer from "./PostContainer";

class Homepage extends Component {
    render() {
        if (this.props.isLogged) {
            return (
                <Container>
                    <Row>
                        <Col>
                            <h3>Welcome {this.props.name}</h3>
                            <AddPost/>
                            <PostContainer/>
                        </Col>
                    </Row>
                </Container>
            );
        } else {
            return <Redirect to="/signin"/>
        }
    }
}

const mapStateToProps = state => {
    return {
        isLogged: state.isLogged,
        name:state.name
    }
}
export default connect(mapStateToProps)(Homepage)