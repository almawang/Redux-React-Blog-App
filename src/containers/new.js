import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../actions';
import Textarea from 'react-textarea-autosize';

class New extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      tags: '',
    };
    this.onTitleInput = this.onTitleInput.bind(this);
    this.onTextInput = this.onTextInput.bind(this);
    this.onTagInput = this.onTagInput.bind(this);
    this.onEnter = this.onEnter.bind(this);
  }

  onTitleInput(event) {
    this.setState({
      title: event.target.value,
    });
  }
  onTextInput(event) {
    this.setState({
      content: event.target.value,
    });
  }
  onTagInput(event) {
    this.setState({
      tags: event.target.value,
    });
  }
  onEnter(event) {
    this.props.createPost(this.state);
  }

  render() {
    return (
      <div className="newbar">
        <input className="title" placeholder="Title" name={this.state.title} onChange={this.onTitleInput} />
        <Textarea className="content" placeholder="Content" name={this.state.content} onChange={this.onTextInput} />
        <input className="tags" placeholder="Tags" name={this.state.tags} onChange={this.onTagInput} />
        <button onClick={this.onEnter}> Create Post </button>
      </div>
    );
  }
}

// react-redux glue -- outputs Container that know state in props
export default connect(null, { createPost })(New);
