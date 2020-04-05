import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";


class FeedbackForm extends PureComponent {
  constructor(props) {
    super(props);

    this._handleChangeInput = this._handleChangeInput.bind(this);
    this._handleSubmitForm = this._handleSubmitForm.bind(this);
    this.resetForm = this.resetForm.bind(this);

    this.form = React.createRef();
  }

  _handleChangeInput(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.props.onChangeInput(name, value);
  }

  _handleSubmitForm(event) {
    this.props.onSubmitForm(event);
  }

  resetForm() {
    this.form.reset();
    this.props.cleanState();
  }

  componentDidUpdate() {
    if (this.props.isResetForm) {
      this.resetForm();
    }
  }

  getRef(el) {
    this.form = el;
    return this.form;
  }

  render() {
    const isSending = this.props.isReviewSending;
    return (
      <form className="reviews__form form" action="#" method="post" ref={(el) => this.getRef(el)} onSubmit={this._handleSubmitForm}>
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" disabled={isSending} onChange={this._handleChangeInput}/>
          <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" disabled={isSending} onChange={this._handleChangeInput}/>
          <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" disabled={isSending} onChange={this._handleChangeInput} />
          <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" disabled={isSending} onChange={this._handleChangeInput}/>
          <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"/>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" disabled={isSending} onChange={this._handleChangeInput}/>
          <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"/>
            </svg>
          </label>
        </div>
        <textarea className="reviews__textarea form__textarea" id="comment" name="comment" placeholder="Tell how was your stay, what you like and what can be improved" onChange={ this._handleChangeInput} disabled={isSending }></textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" disabled={this.props.valid && !this.props.isReviewSending ? false : true}>Submit</button>
        </div>
      </form>
    );
  }
}

FeedbackForm.propTypes = {
  valid: PropTypes.bool.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
  isReviewSending: PropTypes.bool.isRequired,
  cleanState: PropTypes.func.isRequired,
  isResetForm: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isReviewSending: state.STATE.isReviewSending
});

export default connect(mapStateToProps)(FeedbackForm);
