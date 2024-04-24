let a = [19,29,33,24,5,8]
let maxx = a[0]
let al = a.length-1
let c
let sl = []
let w = 0

while (w<=al)
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
    sl.push(maxx)
    a.splice(c,1)
  w++
}

console.log (sl[0]+ " is the maximum value")
console.log (sl[sl.length-1]+ " is the minimum value")


