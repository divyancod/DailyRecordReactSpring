import React, {Component} from 'react';
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Col,
    Container,
    Form,
    FormGroup,
    Input,
    Label,
    Row
} from "reactstrap";
import {toast} from "react-toastify";
import {connect} from "react-redux";
import {authLogin} from "./reducers/mainaction";
import {Redirect} from "react-router-dom";
import {isUserAlreadyLogin} from "./reducers/mainaction";

class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
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
        this.props.authLogin({email:this.state.email,password:this.state.password});
        if(this.props.user.error!=='')
        {
            toast(this.props.error,{type:"error"})
        }
    };

    emailChange = (e) => {
        this.setState({email: e.target.value});
    };
    passwordChange = (e) => {
        this.setState({password: e.target.value});
    };

    render() {
        if(this.props.user.isLogged===true)
        {
            return <Redirect to="/"/>
        }else
        {
            return (
                <Container className="text-center">
                    <Row>
                        <Col lg={6} className="offset-lg-3 mt-5">
                            <Card>
                                <Form onSubmit={this.handleSubmit}>
                                    <CardHeader className="">SignIn Here</CardHeader>
                                    <CardBody>
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
                                        <p style={{color:"red"}}>{this.props.user.error}</p>
                                    </CardBody>
                                    <CardFooter>
                                        <Button type="submit" block color="primary">
                                            Sign In
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
const mapStateToProps = state=>{
    return {
        user:state
    }
}
export default connect(mapStateToProps,{authLogin,isUserAlreadyLogin})(Signin);