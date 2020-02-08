// import * as mathUtils from "./mathUtils.js"
const {sum, mul} = require("./js/mathUtils.js")

var name = "Vue"

console.log(sum(10, 20))

require('./css/normal.css')
require('./css/special.less')

document.writeln("<h2>Less</h2>")

import Vue from 'vue'
import App from './vue/App.vue'

const app = new Vue({
  el: "#app",
  template: "<App></App>",
  components: {
    App
  }
})

// webpack ./src/main.js -o ./dist/bundle.js --mode development
