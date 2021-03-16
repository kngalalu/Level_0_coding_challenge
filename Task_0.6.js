function highestNumber(...number)
{
    var max = number[0];
    var i;

    i = 0;
    while(i < number.length)
    {
        if (max < number[i])
        {
            max = number[i];
        }

        i++;
    }

    return max;
}

console.log(highestNumber(1, 22, 3, 2));