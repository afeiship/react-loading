import ReactLoading from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import './assets/style.scss';

class App extends React.Component {
  state = {
    value: false
  };

  render() {
    return (
      <div className="app-container">
        <button
          className="button"
          onClick={(e) => {
            this.setState({ value: !this.state.value });
          }}>
          Toggle
        </button>
        <ReactLoading
          backdrop={{
            onClick: () => {
              this.setState({ value: false });
            }
          }}
          value={this.state.value}
          content={'加载中'}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
