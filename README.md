# parcel-pipe-operator

A test of the "Tube" operator (pipe operator) using parcel
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Tube

```js
const double = x => x * 2
const add100 = x => x + 102

const setResult = result => document.getElementById("result").innerText = result

document.getElementById("value").addEventListener("keyup", function(_) {
    this.value 
        |> double 
        |> add100 
        |> setResult
})

```
