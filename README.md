# react-loading
> Loading component for react

## properties:
```javascript

  
```

## install && import:
```bash
npm install --save afeiship/react-loading --registry=https://registry.npm.taobao.org
```

```js
import ReactLoading from 'react-loading';
```

```scss
// customize your styles:
$react-loading-options:(
);

@import 'node_modules/react-loading/dist/style.scss';
```


## usage:
```jsx

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

```
