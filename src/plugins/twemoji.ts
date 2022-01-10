import { App } from "vue";
import twemoji from 'twemoji';

export default {
  install: (app: App) => {
    app.directive('emojify', {
      mounted(el, binding, vnode, oldvnode){
        twemoji.parse(el, {
          folder: "svg",
          ext: ".svg"
        });
      }
    })
  }
}