import { h, app } from "./js/hyperapp.js"
import { fas } from "./font_awesome.js"
let p = immer.produce

export const JazzTableModel = {
  data: [
    { name: "Jhon", lname: "Doe" , age: 12},
    { name: "Bob", lname: "Alice", age: 23 },
  ],
  actions: {
    log_data: (data)=>(console.log(data)),
  },
  headers: true,
  lines: 0,
  type: "raw",
  filters: {},
  msg: ""
}

export const JazzTable = (state=JazzTableModel) =>
  h('div', { class: ``}, [
    Toolbar(state),
    h('div', { class: `jazz-table-container`}, [
      h('table', { class: ``}, [
        ( state.headers ? _header(state.data) : null ),
        state.data.map(_row),
      ])
    ]),
    Footbar(state),
  ])

const SetData = p((new_state, data) =>{
  new_state.msg = ""
  new_state.data = data
  new_state.lines = data.length
})

const ToogleHeaders = (state)=>({...state, headers: !state.headers})

const ExecuteAction = (action_name) => (new_state) =>{
  if( new_state.actions[action_name] && typeof(new_state.actions[action_name]) == "function"){
    new_state.actions[action_name](new_state.data)
  }
  return new_state
}

const ReadFile = (state, value) =>{
  // This will be done syncronously for implementation cost
  console.log(value.target.files)
  let file = value.target.files[0]

  console.log(file.type)
  if( file.type.match("csv") ){
    return [
      { ...state, msg: "reading file..." }, [
        FileReaderEvent, { file, 
          headers: state.headers, 
          onparse: SetData
        }]
]
  }else{
    return { ...state, msg: "Invalid File Type" }
  }
}

const FileReaderEvent = (dispatch, options) =>{
  let reader = new FileReader()
  const mapIndexed = R.addIndex(R.map);
  reader.addEventListener('load', function(e) {
      var text = e.target.result;
      let columns = text
      .split("\n")
      .map((line)=>(line.split(",")))
      let [hd, ...tail] = columns

      let obj_keys = options.headers ? hd.map(R.trim) : mapIndexed((_, indx)=>(indx), hd)

      let data = tail
      .map(( row_data )=>(R.zipObj(obj_keys, row_data)))

      dispatch(options.onparse, data)
  });
  reader.readAsText(options.file);
}

const Toolbar = (state) =>
  h('div', { class: `toolbar`}, [
    h('div', { class: `toolbar-info`}, [
      h('label', { class: ` `}, [state.msg]),
      h('button', {}, [h('label', { for: `file_input`}, [
        fas("file-upload"),
        " Cargar CSV"
      ])]),
      h('input', { 
        id: "file_input",
        oninput: ReadFile,
        accept: ".csv",
        hidden: true,
        type: `file`}, []),
      
    ]),
    h('div', { class: `toolbar-input`}, [
      h('button', { onclick: ExecuteAction("log_data") }, ["Ejecutar accion"])
    ])
  ])

const Footbar = (state) =>
  h('div', { class: `footbar`}, [ 
    h('span', { class: ` `}, ["filas: ", state.lines]),
    h('div', { class: `footbar-options`}, [
      h('input', { 
        checked: state.headers,
        oninput: ToogleHeaders, 
        type: `checkbox`}, []),
      h('div', { class: ` `}, ["no headers"]),
    ])
   ])



const extract_headers = (data) =>{
  let [first, ..._rest] = data
  return Object.keys(first)
}

const _header = (data) => h('tr', { class: `jazz-theader`}, [
  extract_headers(data)
  .map((header_label)=>(
    h('th', { class: ` `}, [header_label])
  ))
])

const extract_body = (object) =>{
  return Object.values(object)
  .map((value)=>h('td', { class: ` `}, [value]))
}

const _row = (object) => h('tr', { class: ` `}, [
  extract_body(object)
])