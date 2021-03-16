function commonLetters(word1, word2)
{
    var sameLetters = " ";
    var i;

    i = 0;
    if (word1.length >= word2.length)
    {
        while (i < word1.length)
        {
            var j;
            j = 0;
            while (j < word2.length)
            {
                if (word1.charAt(i) === word2.charAt(j))
                {
                    sameLetters += word1.charAt(i) + ", ";
                }
                j++;
            }
            i++;
        }

        return sameLetters;
    }
    else
    {
        while (i < word2.length)
        {
            var j;
            j = 0;
            while (j < word1.length)
            {
                if (word2.charAt(i) === word1.charAt(j))
                {
                    sameLetters += word2.charAt(i) + ", ";
                }
                j++;
            }
            i++;
        }
        return sameLetters;
    }
}

console.log("Common Characters are : " + commonLetters("house", "computers"));


