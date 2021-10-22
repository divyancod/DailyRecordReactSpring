import React, {Component} from "react";
import {toast} from "react-toastify";
import {authSignUp, isUserAlreadyLogin} from "./reducers/mainaction";
import {
    Container,
    Row,
    Col,
    Card,
    Form,
    Input,
    CardHeader,
    CardBody,
    FormGroup,
    Label,
    CardFooter,
    Button,
} from "reactstrap";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            repassword: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.nameChange = this.nameChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.repasswordChange = this.repasswordChange.bind(this);
    }
    componentDidMount() {
        this.props.isUserAlreadyLogin();
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.email === "" || this.state.password === "") {
            toast("Email or Password can't be empty", {
                type: "error",
            });
            return;
        }
        if (this.state.password !== this.state.repassword) {
            toast("Passwords don't match", {
                type: "error",
            });
            return;
        }
        this.props.authSignUp({name: this.state.name, email: this.state.email, password: this.state.password})
    };
    nameChange = (e) => {
        this.setState({name: e.target.value});
    };
    emailChange = (e) => {
        this.setState({email: e.target.value});
    };
    passwordChange = (e) => {
        this.setState({password: e.target.value});
    };
    repasswordChange = (e) => {
        this.setState({repassword: e.target.value});
    };

    render() {
        if (this.props.user.isLogged === true) {
            return <Redirect to="/"/>
        } else {
            return (
                <Container className="text-center">
                    <Row>
                        <Col lg={6} className="offset-lg-3 mt-5">
                            <Card>
                                <Form onSubmit={this.handleSubmit}>
                                    <CardHeader className="">SignUp Here</CardHeader>
                                    <CardBody>
                                        <FormGroup row className="mb-2">
                                            <Label for="name" sm={3}>
                                                Name
                                            </Label>
                                            <Col sm={9}>
                                                <Input
                                                    type="name"
                                                    name="name"
                                                    id="name"
                                                    value={this.state.name}
                                                    onChange={this.nameChange}
                                                    placeholder="Enter your name"
                                                />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row className="mb-2">
                                            <Label for="email" sm={3}>
                                                Email
                                            </Label>
                                            <Col sm={9}>
                                                <Input
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    value={this.state.email}
                                                    onChange={this.emailChange}
                                                    placeholder="Enter your email"
                                                />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row className="mb-2">
                                            <Label for="password" sm={3}>
                                                Password
                                            </Label>
                                            <Col sm={9}>
                                                <Input
                                                    type="password"
                                                    name="password"
                                                    id="password"
                                                    value={this.state.password}
                                                    onChange={this.passwordChange}
                                                    placeholder="Enter your password"
                                                />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label for="repassword" sm={3}>
                                                Repassword
                                            </Label>
                                            <Col sm={9}>
                                                <Input
                                                    type="password"
                                                    name="repassword"
                                                    id="repassword"
                                                    value={this.state.repassword}
                                                    onChange={this.repasswordChange}
                                                    placeholder="Re-enter your password"
                                                />
                                            </Col>
                                        </FormGroup>
                                    </CardBody>
                                    <CardFooter>
                                        <Button type="submit" block color="primary">
                                            Sign Up
                                        </Button>
                                    </CardFooter>
                                </Form>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            );
        }
    }
}

const mapStateToProps = state => {
    return {
        user: state
    }
}
export default connect(mapStateToProps, {authSignUp,isUserAlreadyLogin})(Signup);
