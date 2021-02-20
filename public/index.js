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
        <div className="has-text-centered">
          <p className="mt-3 mb-3">
            <img src="https://randomuser.me/api/portraits/lego/7.jpg" alt="" />
          </p>
          <button
            className="button is-primary"
            onClick={(e) => {
              ReactLoading.present(
                () => {
                  console.log('after present');
                },
                { children: `[ ${Math.random().toString(36).slice(-6)} ]` }
              );
            }}>
            <span>Show Dynamic Loading.</span>
          </button>
        </div>
      </ReactDemokit>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
