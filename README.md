# react-loading
> Spinner component for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @feizheng/react-loading
```

## update
```shell
npm update @feizheng/react-loading
```

## properties
| Name          | Type   | Required | Default                 | Description                             |
| ------------- | ------ | -------- | ----------------------- | --------------------------------------- |
| mainClassName | string | false    | 'webkit-sassui-loading' | The loading key effect css className.   |
| backdrop      | union  | false    | -                       | Backdrop props or not display backdrop. |


## usage
1. import css
  ```scss
  @import "~@feizheng/webkit-sassui-backdrop";
  @import "~@feizheng/webkit-sassui-loading";
  @import "~@feizheng/react-loading/dist/style.scss";

  // customize your styles:
  $react-loading-options: ()
  ```
2. import js
  ```js
  import ReactLoading from '@feizheng/react-loading';
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

  ```

## documentation
- https://afeiship.github.io/react-loading/


## license
Code released under [the MIT license](https://github.com/afeiship/react-loading/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@feizheng/react-loading
[version-url]: https://npmjs.org/package/@feizheng/react-loading

[license-image]: https://img.shields.io/npm/l/@feizheng/react-loading
[license-url]: https://github.com/afeiship/react-loading/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@feizheng/react-loading
[size-url]: https://github.com/afeiship/react-loading/blob/master/dist/react-loading.min.js

[download-image]: https://img.shields.io/npm/dm/@feizheng/react-loading
[download-url]: https://www.npmjs.com/package/@feizheng/react-loading
