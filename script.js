var name = prompt("Hello, may I know your name please?")
var temperature = prompt("What is the temperature?")
var temperatureUnit = prompt("What unit is the temperature in?")
var clothes = [
    'nothing',
    'swimsuit',
    'shorts and shirt',
    'sweater',
    'sweater + jacket',
    'heavy jacket',
    'heavy jacket and toe warmers',
    'dont go outside if you want to live'
];
var hotclothes = [
    'nothing',
    'swimsuit',
    'shorts and shirt'
];
var coldclothes = [
    'sweater',
    'sweater + jacket',
    'heavy jacket',
    'heavy jacket and toe warmers',
    'dont go outside if you want to live'
];
var yolo = [
    'nothing',
    'dont go outside if you want to live'
];

Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
}

if (temperatureUnit === "fahrenheit") {
    // console.log("The Temperature in Kelvin is " + (5/9 * (temperature - 32) + 273))
    // console.log("The Temperature in Celcius is " + (5/9 * (temperature - 32)))
    var temps = [temperature, (5 / 9 * (temperature - 32) + 273), (5 / 9 * (temperature - 32))]
    var tempunits = ["Celcius", "Fahrenheit", "Kelvin"]
    for (var i = 0; i < temps.length; i++) {
        console.log("The temperature is " + temps[i] + " " + tempunits[i]);
    }
    // console.log("The Temperature in Kelvin is " + temps[1] + " and the Temperature in Celcius is " + temps[2])
    if (temps[2] < 0) {
        console.log("ooh it's cold out")
        console.log("Hey " + name + ", you should wear " + coldclothes.random())
    } else if (temps[2] > 40) {
        console.log("ooh it's hot out")
        console.log("Hey " + name + ", you should wear " + hotclothes.random())
    } else if (temps[2] > 100) {
        console.log("you're literally boiling")
        console.log("Hey " + name + ", you should wear " + yolo.random())
    } else {
        console.log("you're fine!")
        console.log("Hey " + name + ", you should wear " + clothes.random())

    }
} else if (temperatureUnit === "celcius") {
    // console.log("The Temperature in Fahrenheit is " + (9/5 * (temperature - 32) + 32))
    // console.log("The Temperature in Kelvin is " + (temperature + 273))
    var temps = [temperature, (9 / 5 * (temperature - 32) + 32), (temperature + 273)]
    var tempunits = ["Celcius", "Fahrenheit", "Kelvin"]
    for (var i = 0; i < temps.length; i++) {
        console.log("The temperature is " + temps[i] + " " + tempunits[i]);
    }
    // console.log("The Temperature in Kelvin is " + temps[2] + " and the Temperature in Fahrenheit is " + temps[1])
    if (temps[0] < 0) {
        console.log("ooh it's cold out")
        console.log("Hey " + name + ", you should wear " + coldclothes.random())
    } else if (temps[0] > 40) {
        console.log("ooh it's hot out")
        console.log("Hey " + name + ", you should wear " + hotclothes.random())
    } else if (temps[0] > 100) {
        console.log("you're literally boiling")
        console.log("Hey " + name + ", you should wear " + yolo.random())
    } else {
        console.log("you're fine!")
        console.log("Hey " + name + ", you should wear " + clothes.random())
    }
} else if (temperatureUnit === "kelvin") {
    // console.log("The Temperature in Fahrenheit is " + (9/5 * (temperature - 273) + 32))
    // console.log("The Temperature in Celcius is " + (temperature - 273))
    var temps = [temperature, (9 / 5 * (temperature - 273) + 32), (temperature - 273)]
    var tempunits = ["Celcius", "Fahrenheit", "Kelvin"]
    for (var i = 0; i < temps.length; i++) {
        console.log("The temperature is " + temps[i] + " " + tempunits[i]);
    }
    // console.log("The Temperature in Fahrenheit is " + temps[1] + " and the Temperature in Celcius is " + temps[2])
    if (temps[2] < 0) {
        console.log("ooh it's cold out")
        console.log("Hey " + name + ", you should wear " + coldclothes.random())
    } else if (temps[2] > 40) {
        console.log("ooh it's hot out")
        console.log("Hey " + name + ", you should wear " + hotclothes.random())
    } else if (temps[2] > 100) {
        console.log("you're literally boiling")
        console.log("Hey " + name + ", you should wear " + yolo.random())
    } else {
        console.log("you're fine!")
        console.log("Hey " + name + ", you should wear " + clothes.random())
    }
} else {
    console.log("check your temperature unit input")
}