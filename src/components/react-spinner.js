import './style.scss';
import {PureComponent} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default class extends PureComponent{
  static propTypes = {
    className:PropTypes.string,
    width:PropTypes.string,
    size:PropTypes.string,
    color:PropTypes.string
  };

  static defaultProps={
    size:'28px',
    color:'#26a2ff',
    width:'4px'
  };

  render(){
    const {className,size,width,color,...props} = this.props;
    return (
      <div
        {...props}
        className={classNames('react-spinner',className)} style={{
          width:size,
          height:size,
          borderWidth:width,
          borderTopColor: color,
          borderLeftColor: color,
          borderBottomColor: color
        }}></div>
    );
  }
}
