import ReactDemokit from '@jswork/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactLoading from '../src/main';
import { Controller } from '@jswork/react-visible';

import './assets/style.scss';

class App extends React.Component {
  state = {
    value: false
  };

  componentDidMount() {
    Controller.createInstance(
      ReactLoading,
      {
        // children: 'loading',
        backdrop: {
          transparent: true,
          onClick: () => {
            ReactLoading.dismiss(() => {
              console.log('after dismiss');
            });
          }
        }
      },
      true
    );
  }

  render() {
    return (
      <ReactDemokit
        className="p-3 app-container"
        url="https://github.com/afeiship/react-loading">
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
      </ReactDemokit>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
