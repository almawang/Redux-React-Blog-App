import React, { Component } from 'react';
import marked from 'marked';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchPost, updatePost, deletePost } from '../actions';
import Textarea from 'react-textarea-autosize';

class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      post: null,
    };
    this.renderEdit = this.renderEdit.bind(this);
    this.onEditClick = this.onEditClick.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onContentChange = this.onContentChange.bind(this);
    this.onTagChange = this.onTagChange.bind(this);
  }
  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
    this.setState({
      post: this.props.post,
    });
  }
  onTitleChange(event) {
    this.setState({
      post: Object.assign(this.state.post, { title: event.target.value }),
    });
  }
  onContentChange(event) {
    this.setState({
      post: Object.assign(this.state.post, { content: event.target.value }),
    });
  }
  onTagChange(event) {
    this.setState({
      post: Object.assign(this.state.post, { tags: event.target.value }),
    });
  }
  onEditClick() {
    if (this.state.edit) {
      this.props.updatePost(this.props.params.id, this.state.post);
      this.setState({
        edit: false,
      });
    } else {
      this.setState({
        edit: true,
      });
    }
  }
  onDeleteClick() {
    this.props.deletePost(this.props.params.id);
  }
  renderEdit() {
    if (this.state.edit) {
      return (
        <div className="showbox">
          <input className="title" value={this.state.post.title} onChange={this.onTitleChange} />
          <Textarea className="content" value={this.state.post.content} onChange={this.onContentChange} />
          <input className="tags" value={this.state.post.tags} onChange={this.onTagChange} />
        </div>
      );
    } else {
      return (
        <div className="showbox">
          <div className="title">{this.state.post.title}</div>
          <div className="content" dangerouslySetInnerHTML={{ __html: marked(this.state.post.content || '') }} />
          <div className="tags">{this.state.post.tags}</div>
        </div>
      );
    }
  }
  render() {
    if (this.state.post == null || this.state.post._id !== this.props.params.id) {
      this.setState({
        post: this.props.post,
      });
      return (
        <div>Getting your post</div>
      );
    }
    return (
      <div>
        <div className="editbar">
          <Link to="/" className="back">Back To Index</Link>
          <button className="edit" onClick={this.onEditClick}>Edit</button>
          <button className="delete" onClick={this.onDeleteClick} to="/">Delete</button>
        </div>
        {this.renderEdit()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  post: state.posts.post,
});

// react-redux glue -- outputs Container that know state in props
export default connect(mapStateToProps, { fetchPost, updatePost, deletePost })(Show);
