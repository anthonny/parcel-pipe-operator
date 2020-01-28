const double = x => x * 2
const add100 = x => x + 102

const setResult = result => document.getElementById("result").innerText = result

document.getElementById("value").addEventListener("keyup", function(_) {
    this.value 
        |> double 
        |> add100 
        |> setResult
})
