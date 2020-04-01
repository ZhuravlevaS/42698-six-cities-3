import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Operation, ActionCreator} from "../reducer/state/state.js";

const withSendingReview = (Component) => {
  class withSendingFeedback extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        isValid: false,
        comment: ``,
        rating: null
      };

      this._onChangeInput = this._onChangeInput.bind(this);
      this._onSubmitForm = this._onSubmitForm.bind(this);
      this.cleanState = this.cleanState.bind(this);
    }

    _onChangeInput(name, value) {
      this.setState({
        [name]: value
      }, this.validForm);
    }

    _onSubmitForm() {
      const feedback = {
        comment: this.state.comment,
        rating: this.state.rating
      };
      this.props.handleSubmitForm(feedback, this.props.id);
    }

    cleanState() {
      this.setState({
        comment: ``,
        rating: null
      }, this.props.setResetForm(false));
    }

    validForm() {
      if (this.state.rating && this.state.comment.length > 50 && this.state.comment.length < 300) {
        this.setState({
          isValid: true
        });
      }
    }

    render() {
      return (
        <Component
          {...this.props}
          valid={this.state.isValid}
          onChangeInput={this._onChangeInput}
          onSubmitForm= {this._onSubmitForm}
          isResetForm={this.props.isResetForm}
          cleanState={this.cleanState}
        />
      );
    }
  }

  withSendingFeedback.propTypes = {
    id: PropTypes.number.isRequired,
    handleSubmitForm: PropTypes.func.isRequired,
    setResetForm: PropTypes.func.isRequired,
    isResetForm: PropTypes.bool.isRequired,
  };

  const mapStateToProps = (state) => ({
    isResetForm: state.STATE.isResetForm
  });

  const mapDispatchToProps = (dispatch) => ({
    handleSubmitForm(feedback, id) {
      dispatch(Operation.sendReview(feedback, id));
    },

    setResetForm(bool) {
      dispatch(ActionCreator.setResetForm(bool));
    }
  });

  return connect(mapStateToProps, mapDispatchToProps)(withSendingFeedback);
};


export default withSendingReview;
