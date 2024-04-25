function checker() 
{

let str = document.getElementById("input").value
let count = 0
let out = document.getElementById("output")
let output

for ( let i = 0; i<=str.length ; i++ )
{
    if (str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="v")
    {
        count += 1
    }
}

output = str + " has " + count + " vowels & has " + (str.length-count) + " consonants"
out.innerHTML=  output
}