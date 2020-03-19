import { h, app } from "./js/hyperapp.js"

app({
  init: 0,
  view: state =>
    h('div', { class: `flex-centered`}, [
      "Hello world"
    ]),
  node: document.getElementById("app")
})