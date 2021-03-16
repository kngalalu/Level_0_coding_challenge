function getVowels(str)
{
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    str = str.toLowerCase();
    var vowel = "";


    var i;

    i = 0;
    while(i < str.length)
    {
        if (vowels.includes(str[i]))
            vowel += str[i] + ", ";

        i++;
    }

 return vowel;
}
console.log(getVowels("Umuzi"));