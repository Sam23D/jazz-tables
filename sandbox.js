import { h, app } from "./js/hyperapp.js"

app({
  init: 0,
  view: state =>
    h('div', { class: ` `}, ["Hello hyperapp!"]),
  node: document.getElementById("app")
})