import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import ReactVisible from 'react-visible';
import ReactAppendToDocument from 'react-append-to-document';

export default class extends ReactVisible {
  /*===properties start===*/
  /*===properties end===*/

  get visibleElementView() {
    const { className, destroyable, backdrop, value, backdropProps, ...props } = this.props;
    const { content, hidden } = this.state;
    return (
      <div
        hidden={hidden}
        data-visible={this.state.value}
        onAnimationEnd={this._onAnimationEnd}
        className={classNames('webkit-sassui-loading react-loading', className)} {...props}>
        <figure className="bd">
          <img width="32" src="https://ws4.sinaimg.cn/large/006tNbRwgy1fvcdkbo352g303k03kq2r.gif" />
        </figure>
        <footer className="ft">{content}</footer>
      </div>
    )
  }

  static instance(inProps) {
    return ReactAppendToDocument.append(this, inProps, {
      className: 'react-ios-loading-container'
    });
  }

  constructor(inProps) {
    super(inProps);
    this.resetCallback();
  }

  componentWillUnmount() {
    this.resetCallback();
  }

  resetCallback() {
    this._onPresent = noop;
    this._onDismiss = noop;
  }

  present(inStates, inCallback) {
    this.setState(inStates, () => {
      super.present();
      this._onPresent = inCallback || noop;
    })
  }

  dismiss(inCallback) {
    super.dismiss();
    this._onDismiss = inCallback || noop;
  }

  onAnimationEnd () {
    super.onAnimationEnd();
    const { value } = this.state;
    value && this._onPresent();
    !value && this._onDismiss();
  }

}
