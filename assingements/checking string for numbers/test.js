let x  = "fgdf7d4fg8f**g4d45fd45g"
let y
let result = 0
let str = ""
let alpha = ""
for (let i = 0; i< (x.length); i++)
{
    y = Number(x[i])
    if (isNaN(y))
    {
        alpha+= x[i]
        alpha+=" "
        continue
    }    
    else
    {
        str += y
        str += "+"
        result += y
    }
}
console.log (str + " = " + result)
console.log (alpha + " = are the alphabets")