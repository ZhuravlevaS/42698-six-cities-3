import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import {Operation} from "../../reducer/user/user";
import {AppRoute} from "../../const.js";

import Header from "../header/header.jsx";

class SignIn extends PureComponent {
  constructor(props) {
    super(props);

    this.login = {
      email: ``,
      password: ``
    };

    this._handleChangeInput = this._handleChangeInput.bind(this);
    this._handleSubmitForm = this._handleSubmitForm.bind(this);
  }

  _handleChangeInput(event) {
    this.login[event.target.name] = event.target.value;
  }

  _handleSubmitForm(event) {
    event.preventDefault();

    this.props._handleSubmitForm(this.login);
  }

  render() {
    if (this.props.authStat === `AUTH`) {
      return <Redirect to={AppRoute.ROOT} />;
    }
    return (
      <div className="page page--gray page--login">
        <Header/>

        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <form className="login__form form" action="#" method="post" onSubmit={this._handleSubmitForm}>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">E-mail</label>
                  <input className="login__input form__input" type="email" name="email" placeholder="Email" required="" onChange={ this._handleChangeInput}/>
                </div>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">Password</label>
                  <input className="login__input form__input" type="password" name="password" placeholder="Password" required="" onChange={ this._handleChangeInput}/>
                </div>
                <button className="login__submit form__submit button" type="submit">Sign in</button>
              </form>
            </section>
            <section className="locations locations--login locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>{this.props.activeCity}</span>
                </a>
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  }
}

SignIn.propTypes = {
  activeCity: PropTypes.string.isRequired,
  authStat: PropTypes.string.isRequired,
  _handleSubmitForm: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  activeCity: state.DATA.city,
  authStat: state.USER.authorizationStatus
});

const mapDispatchToProps = (dispatch) => ({
  _handleSubmitForm(login) {
    dispatch(Operation.login(login));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
