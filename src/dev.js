import './dev.scss';
import ReactLoading from './main';

/*===example start===*/

// install: npm install afeiship/react-loading --save
// import : import ReactLoading from 'react-loading'

class App extends React.Component{
  state = {

  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  render(){
    return (
      <div className="hello-react-loading">
        <ReactLoading ref='rc' />
      </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
