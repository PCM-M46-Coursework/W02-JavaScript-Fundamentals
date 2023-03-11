let weather = "cloudy";

let message = "Rihanna: ";

// ===========================================================================
//  Weather Forecast by Rihanna
// ===========================================================================

if (weather === "sunny")
{
    message += "When the sun shines, we shine together...";
}
else if (weather === "rainy")
{
    message += "Now that it's raining more than ever...";
}
else
{
    message += "Rihanna has no lyrics for this weather.";
}

console.log(message);

// ===========================================================================
//  Weather Forecast by Oasis
// ===========================================================================

const place = "Manchester";
message = "Oasis: ";

if (place === "Manchester" && weather == "sunny")
{
    message += "Everyone can see the sun.";
}
else if (place === "Manchester" && weather == "rainy")
{
    message += "Lately, did you ever feel the pain, in the morning rain, as it soaks you to the bone?";
}
else
{
    message += "Nobody ever mentions the weather";
}

console.log(message);