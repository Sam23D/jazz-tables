import { h, app } from "./js/hyperapp.js"

import { SandBox } from "./sandbox.js"

app({
  init: 0,
  view: state =>
    h('div', { class: `flex-centered`}, [
      SandBox(
        //Put here the element you want to design
        
      )
    ]),
  node: document.getElementById("app")
})