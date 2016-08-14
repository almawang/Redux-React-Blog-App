import React from 'react';
import { connect } from 'react-redux';

const Error = (props) => {
  if (props.error) {
    return (
      <div className="error">
        {props.errorMessage}
      </div>
    );
  } else {
    return (
      <div />
    );
  }
};

const mapStateToProps = (state) => ({
  error: state.err.error,
  errorMessage: state.err.errorMessage,
});

export default connect(mapStateToProps, null)(Error);
