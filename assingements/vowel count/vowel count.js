let str = "racecar"
let count = 0
for ( let i = 0; i<=str.length ; i++ )
{
    if (str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="v")
    {
        count += 1
    }
}
console.log(str + " has " + count + " vowels")
console.log(str + " has " + (str.length-count) + " consonants")