import './dev.scss';
import { ReactLoading, Loading } from './main';

/*===example start===*/

// install: npm install afeiship/react-loading --save
// import : import ReactLoading from 'react-loading'

class App extends React.Component {
  state = {

  };

  constructor(props) {
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
    Loading.init();
    window.loading = Loading;
  }

  _onShow = () => {
    Loading.present({
      content:'Loading...'
    })
  };
  _onHide = () => {
    Loading.dismiss();
  };

  render() {
    return (
      <div className="hello-react-loading">
        <button className="button" onClick={this._onShow}>SHOW</button>
        <button className="button" onClick={this._onHide}>Hide</button>
      </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
