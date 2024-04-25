let a = [99,58,12,7,45,66,78,54,4,0,]
let decending_array = []
let assending_array = []
let maxx
let c
let w = 0
let al = a.length

while (w<=al-1)
{
    maxx=a[0]
    for(let i = 0; i<a.length ; i++)
    {
        if (maxx <= a[i])
        {
            maxx = a[i]
            c = i   
        }
    }   
    decending_array.push(maxx)
    a.splice(c,1)
  w++
}

for (let u = al-1; u>=0 ; u--)
{
    assending_array.push(decending_array[u])
}

console.log (decending_array[0]+ " is the maximum value")
console.log (decending_array[al-1]+ " is the minimum value")
console.log (decending_array)
console.log (assending_array)