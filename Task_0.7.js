function celsiusToFahrenheits(c)
{
    var Fahrenheits;
    
    Fahrenheits = c * 1.8 + 32;

 return Fahrenheits + " F";
}

console.log(celsiusToFahrenheits(36));

function fahrenheitsToCelsius(F)
{
    var Celsius;

    Celsius = (F - 32) * 5/9;

return Celsius + " C";
}
console.log(fahrenheitsToCelsius(63));