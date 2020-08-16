import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import ReactVisible from '@feizheng/react-visible';
import ReactBackdrop from '@feizheng/react-backdrop';

const CLASS_NAME = 'react-loading';
const LOADING_GIF = 'https://tva1.sinaimg.cn/large/006tNbRwgy1fvcdkbo352g303k03kq2r.gif';

export default class ReactLoading extends ReactVisible {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * Abstract visible value.
     */
    value: PropTypes.bool,
    /**
     * If element destroyed when visible to false.
     * In modal case:
     * 1. set the value to true, you need not care z-index
     * 2. If only has one modal, you can set this to false.
     */
    destroyable: PropTypes.bool,
    /**
     * The change handler.
     */
    onChange: PropTypes.func,
    /**
     * Backdrop props or not display backdrop.
     */
    backdrop: PropTypes.oneOfType([PropTypes.bool, PropTypes.object])
  };

  static defaultProps = {
    onChange: noop,
    destroyable: false
  };

  get visibleElementView() {
    const {
      className,
      destroyable,
      backdrop,
      value,
      children,
      ...props
    } = this.props;
    const { hidden } = this.state;

    return ReactDOM.createPortal(
      <React.Fragment>
        <div
          hidden={hidden}
          data-visible={this.state.value}
          onAnimationEnd={this.handleAnimationEnd}
          className={classNames(
            `webkit-sassui-loading ${CLASS_NAME}`,
            className
          )}
          {...props}>
          <figure className={`${CLASS_NAME}__body`}>
            <img width="32" src={LOADING_GIF} />
            <figcaption>{children}</figcaption>
          </figure>
        </div>
        {!!backdrop && <ReactBackdrop value={this.state.value} {...backdrop} />}
      </React.Fragment>,
      document.body
    );
  }
}
