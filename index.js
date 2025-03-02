/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let length = document.getElementById("length")
let volume = document.getElementById("volume")
let mass = document.getElementById("mass")

function convert() {
    let inputValue = document.getElementById("input-value").value
    let feet = inputValue*3.281
    let meter = inputValue/3.281
    let gallon = inputValue*0.219969
    let litres = inputValue*4.546 
    let kilo = inputValue*2.204
    let pound = inputValue/0.453592 
    length.innerText = `${inputValue} meters = ${feet} feet | ${inputValue} feet = ${meter.toFixed(3)} meters`
    volume.innerText = `${inputValue} liters = ${gallon.toFixed(3)} gallons | ${inputValue} gallons = ${litres.toFixed(3)} liters`
    mass.innerText = `${inputValue} kilos = ${pound} pounds | ${inputValue.toFixed(3)} pounds = ${kilo.toFixed(3)} kilos`
    inputValue.value = ""
    
}