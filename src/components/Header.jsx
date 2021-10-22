import React, {Component} from "react";
import {Nav, Navbar, NavItem} from "reactstrap";
import {Link, NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {logoutUser} from "./reducers/mainaction";

class Header extends Component {
    render() {
        return (
            <Navbar color="info" light expand="md">
                <Link to="/" className="text-white ms-3">
                    Daily Record App
                </Link>
                <Nav className="ms-auto">
                    {this.props.isLogged ?
                        <>
                            <NavItem className="me-2">
                                <NavLink tag={Link} to="/profile" className="text-white">
                                    Profile
                                </NavLink>
                            </NavItem>
                            <NavItem className="me-2">
                                <NavLink to="" onClick={() => {
                                    this.props.logoutUser()
                                }} className="text-white">
                                    Logout
                                </NavLink>
                            </NavItem>
                        </>
                        :
                        <>
                            <NavItem className="me-2">
                                <NavLink tag={Link} to="/signup" className="text-white">
                                    Sign Up
                                </NavLink>
                            </NavItem>
                            <NavItem className="me-2">
                                <NavLink tag={{Link}} to="/signin" className="text-white">
                                    Sign In
                                </NavLink>
                            </NavItem>
                        </>
                    }
                </Nav>
            </Navbar>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLogged: state.isLogged
    }
}
export default connect(mapStateToProps, {logoutUser})(Header);
