import { h } from "./js/hyperapp.js"

export const SandBox = (children=_sandbox_placeholder()) =>
  h('div', { id: `sandbox`, class: "flex-centered sandbox-purple"}, [
    _grid(),
    _sandbox_actions(),
    children,
  ])

const _sandbox_placeholder = () =>
  h('div', { id: `sandbox-placeholder`}, [
    "Sandbox placeholder"
  ])

const _grid = () =>
  h('div', { id: `grid`}, [])

const _sandbox_actions = () =>
  h('div', { id: `sandbox-actions-menu`}, [
    h('div', { class: ` `}, [
      _action_list(
        h('button', { class: ` `}, ["👁"]),
      ),
      _action_list([
          h('button', { class: ` `}, ["▪"]),
          h('button', { class: ` `}, ["◾"]),
          h('button', { class: ` `}, ["◼"]),
      ])
    ])
  ])

const _action_list = (children) =>
  h('div', { class: `action-list`}, [children])