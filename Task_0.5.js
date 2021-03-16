function areaOfATriangle(a, b, c)
{
    var semiperimeter = 0.5 * (a + b + c);
    
    var area = Math.sqrt(semiperimeter *(semiperimeter - a) * (semiperimeter - b) * (semiperimeter - c));

    return area;
  }
  
  console.log(areaOfATriangle(4, 13, 15)); 