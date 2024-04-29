let x  = "yking123"
let y
let result = 0
for (let i = 0; i< (x.length); i++)
{
    y = Number(x[i])
    if (isNaN(y))
    {
        continue
    }    
    else
    {
        result = result + y
    }
}
console.log ( result)
