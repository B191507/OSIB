function convertTemperature() {
    const inputTemperature = parseFloat(document.getElementById("num").value);
    const unit = document.getElementById("unit").value;

    let convertedTemperature;
    if (unit === 'Celcius') {
        convertedTemperature = (inputTemperature * 9 / 5) + 32;
        document.getElementById("result").textContent =/*'${inputTemperature} degree Celcius =$(ConvertedTemperature} degree Fahrenhit.'*/convertedTemperature;
    }
    else if (unit === 'Fahrenhit') {
        convertedTemperature = (inputTemperature - 32) + 5 / 9;
        document.getElementById("result").textContent =/*'${inputTemperature} degree Fahrenhit = ${convertedTemprature} degree Celcius.'ConvertedTemperature} degree Fahrenhit.'*/convertedTemperature;s
    }
    else {
        document.getElementById("result").textContent = 'Please Select a valid unit.';
    }
}