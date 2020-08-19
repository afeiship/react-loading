import ReactLoading from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import { Controller } from '@feizheng/react-visible';
import './assets/style.scss';

class App extends React.Component {
  state = {
    value: false
  };

  componentDidMount() {
    Controller.singleton(ReactLoading, {
      // children: 'loading',
      backdrop: {
        transparent: true,
        onClick: () => {
          ReactLoading.dismiss(() => {
            console.log('after dismiss');
          });
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
            ReactLoading.present(
              () => {
                console.log('after present');
              },
              { children: `[ ${Math.random().toString(36).slice(-6)} ]` }
            );
          }}>
          Show Dynamic Loading.
        </button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
