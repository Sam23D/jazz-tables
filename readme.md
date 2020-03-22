
![](https://github.com/Sam23D/ha_template/workflows/CI/badge.svg)

## Usage

How to use `JazzTables` 

```  javascript
JazzTable({
  element: "#table-container",
  data: [
    { name: "Jhon", lname: "Doe" },
    { name: "Bob", lname: "Alice" }
  ],
  type: "raw",
  filters: {
    name: ["like", "Jh"]
  }
})

```


