import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactVisible from '@jswork/react-visible';
import ReactBackdrop from '@jswork/react-backdrop';

const CLASS_NAME = 'react-loading';
const LOADING_GIF =
  'https://tva1.sinaimg.cn/large/006tNbRwgy1fvcdkbo352g303k03kq2r.gif';

export default class ReactLoading extends ReactVisible {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    ...ReactVisible.propTypes,
    /**
     * The loading key effect css className.
     */
    mainClassName: PropTypes.string,
    /**
     * Backdrop props or not display backdrop.
     */
    backdrop: PropTypes.oneOfType([PropTypes.bool, PropTypes.object])
  };

  static defaultProps = {
    ...ReactVisible.defaultProps,
    mainClassName: 'wsui-loading'
  };

  get visibleElementView() {
    const {
      className,
      mainClassName,
      destroyable,
      backdrop,
      rootable,
      value,
      onPresent,
      onDismiss,
      ...props
    } = this.props;
    const { hidden, children } = this.state;

    return (
      <React.Fragment>
        <div
          hidden={hidden}
          data-visible={this.state.value}
          onAnimationEnd={this.handleAnimationEnd}
          className={classNames(mainClassName, CLASS_NAME, className)}
          {...props}>
          <figure className={`${CLASS_NAME}__body`}>
            <img width="32" src={LOADING_GIF} />
            <figcaption>{children}</figcaption>
          </figure>
        </div>
        {!!backdrop && <ReactBackdrop value={this.state.value} {...backdrop} />}
      </React.Fragment>
    );
  }
}
