import React, {Component} from "react";
import {Button} from "reactstrap";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout = (e) => {
        e.preventDefault();
        localStorage.clear();
        this.props.history.push("/signin");
    };

    render() {
        if (this.props.isLogged) {
            return (
                <div>
                    <h1>Hello world</h1>
                    <Button onClick={this.handleLogout}>Logout</Button>
                </div>
            );
        } else {
            return <Redirect to="/signin"/>
        }
    }
}

const mapStateToProps = state => {
    return {
        isLogged: state.isLogged
    }
}
export default connect(mapStateToProps)(Homepage)