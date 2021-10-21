import React, {Component} from 'react';
import {connect} from "react-redux";
import {Button, Col, Container, Input, Row} from "reactstrap";
import {toast} from "react-toastify";
import {updateUserDetails} from "./reducers/mainaction";

class UpdateProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.user.name,
            phone: this.props.user.phone
        }
        this.nameChange = this.nameChange.bind(this);
        this.phoneChange = this.phoneChange.bind(this);
    }

    nameChange = (e) => {
        this.setState({name: e.target.value});
    };
    phoneChange = (e) => {
        this.setState({phone: e.target.value});
    };
    handleSubmit = () => {
        if(this.state.phone.length>10)
        {
            toast("Phone number can't be more than 10 digits",{type:"error"})
            return;
        }
        this.props.updateUserDetails({name:this.state.name,phone:this.state.phone,token:this.props.user.token})

    }

    render() {
        return (
            <Container className="text-center">
                <Row>
                    <Col lg={6} className="offset-lg-3 mt-5">
                        <h1>User Profile</h1>
                        <Input
                            type="name"
                            name="name"
                            id="name"
                            placeholder="Enter your name"
                            value={this.state.name}
                            onChange={this.nameChange}
                            className="mb-2"
                        />
                        <Input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter your email"
                            defaultValue={this.props.user.email}
                            disabled
                            className="mb-2"
                        />
                        <Input
                            type="number"
                            name="phone"
                            id="phone"
                            placeholder="Enter your phone"
                            value={this.state.phone}
                            onChange={this.phoneChange}
                            className="mb-2"
                        />
                        <Button onClick={this.handleSubmit} block color="primary">
                            Update Profile
                        </Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state
    }
}
export default connect(mapStateToProps,{updateUserDetails})(UpdateProfile);