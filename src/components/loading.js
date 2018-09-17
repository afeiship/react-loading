import ReactLoading from 'components/react-loading';

export default class {

  static instance;

  static init(inProps) {
    ReactLoading.instance(inProps).then(instance => {
      this.instance = this.instance || instance;
    });
  }

  static present(inOptions, inCallback) {
    this.instance.component.present(inOptions, inCallback);
  }

  static dismiss(inCallback) {
    this.instance.component.dismiss(inCallback);
  }

  static destroy() {
    this.instance.destroy();
    this.instance = null;
  }

}
