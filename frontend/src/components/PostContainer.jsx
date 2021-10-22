import React, {Component} from 'react';
import PostCard from "./PostCard";
import {Col, Row} from "reactstrap";
import {connect} from "react-redux";
import {loadPost} from "./reducers/mainaction";

class PostContainer extends Component {
    componentDidMount() {
        this.props.loadPost({token:this.props.token});
    }
    componentDidUpdate(prevPros,prevState) {
        if(this.props.loadPosts===true)
        {
            //updating the list of posts
            this.props.loadPost({token:this.props.token});
        }
    }

    render() {
        return (
            <Row>
                <hr className="mt-2"/>
                {this.props.posts.map(val=>(
                    <Col key={val.id} md={6} className="p-2">
                        <PostCard post={val}/>
                    </Col>
                ))}
            </Row>
        );
    }
}

const mapStateToProps=state=>{
    return {
        posts:state.posts,
        token:state.token,
        loadPosts:state.loadPosts
    }}
export default connect(mapStateToProps,{loadPost})(PostContainer);