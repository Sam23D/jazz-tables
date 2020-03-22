import { h, app } from "./js/hyperapp.js"
import { JazzTable, JazzTableModel } from "./jazz_table.js"

app({
  init: JazzTableModel,
  view: state =>
    h('div', { class: `` }, [
      JazzTable(state)
    ]),
  node: document.getElementById("app")
})