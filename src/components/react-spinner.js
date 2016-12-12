import './style.scss';
import classNames from 'classnames';

export default class extends React.Component{
  static propTypes = {
    cssClass:React.PropTypes.string,
    width:React.PropTypes.string,
    size:React.PropTypes.string,
    color:React.PropTypes.string
  }

  static defaultProps={
    size:'28px',
    color:'#26a2ff',
    width:'4px'
  }
  render(){
    return (
      <div className={classNames('react-spinner',this.props.cssClass)} style={{
          width:this.props.size,
          height:this.props.size,
          borderWidth:this.props.width,
          borderTopColor: this.props.color,
          borderLeftColor: this.props.color,
          borderBottomColor: this.props.color,
        }}></div>
    );
  }
}
