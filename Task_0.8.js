  function minutesToHours(m){
    var hours;
    var roundedHours;
    var minutes;
    var roundedMinutes;
    var convertedHours;

    hours = m / 60;
    roundedHours = Math.floor(hours);
    minutes = (hours - roundedHours) * 60;
    roundedMinutes = Math.floor(minutes);

    if ((roundedHours < 2) && (roundedMinutes < 2))
    {
        var convertHours = roundedHours + " hour" + ", " + roundedMinutes + " minute";
        return convertHours;
    }
    else if ((roundedHours < 2) & (roundedMinutes > 1))
    {
        var convertHour = roundedHours + " hour" + ", " + roundedMinutes + " minutes";
        return convertHour;
    }
    else
    {
        convertedHours = roundedHours + " hours" + ", " + roundedMinutes + " minutes";
        return convertedHours;
    }
  }
  console.log(minutesToHours(133));