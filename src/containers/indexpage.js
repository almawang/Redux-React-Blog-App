import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, fetchPost, removeError } from '../actions';
import { Link } from 'react-router';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.renderPosts = this.renderPosts.bind(this);
  }

  componentWillMount() {
    this.props.fetchPosts();
    this.props.removeError();
  }
  renderPosts = () => {
    return this.props.posts.map((post) => {
      return (
        <div className="indexPost" key={post.id} >
          <Link to={`/posts/${post.id}`} className="title">{post.title}</Link>
          <div className="tag">{post.tags}</div>
        </div>
      );
    });
  }
  render() {
    return (
      <div className="indexbar">
        {this.renderPosts()}
      </div>
    );
  }
}
// connects particular parts of redux state to this components props
const mapStateToProps = (state) => (
  {
    posts: state.posts.all,
    post: state.posts.post,
  }
);

// react-redux glue -- outputs Container that know state in props
export default connect(mapStateToProps, { fetchPosts, fetchPost, removeError })(Index);
