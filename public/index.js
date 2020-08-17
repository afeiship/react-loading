import ReactLoading from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import { ReactVisibleController } from '@feizheng/react-visible';
import './assets/style.scss';

class App extends React.Component {
  state = {
    value: false
  };

  componentDidMount() {
    // global config
    this.appLoading = new ReactVisibleController(ReactLoading, {
      children: 'loading',
      backdrop: {
        transparent: true,
        onClick: () => {
          this.appLoading.dismiss();
        }
      }
    });
  }

  render() {
    return (
      <div className="app-container">
        <button
          className="button"
          onClick={(e) => {
            this.appLoading.present(() => {
              console.log('present.');
            });
          }}>
          Show Loading.
        </button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
