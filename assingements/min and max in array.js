let a = [19,29,33,24,5,8]
let maxx = a[0]
let i
let C
let sl = []

for(i = 0; i<a.length ; i++)
{
    
    if (maxx < a[i])
    {
        maxx = a[i]
        c = i   
    }
    
}
console.log(c)
sl.push(maxx)
a.splice(c,1)
console.log (sl)
console.log (a)
//console.log (maxx)
