import { h } from "./js/hyperapp.js"

export const fas = (icon_name) =>
  h('i', { class: `fas fa-${icon_name}`}, [])