let x = [3,80,91,15,17,0,66,17]
let len = x.length-1

for (let a = 0; a<= len ; a++)
{   
    let flag = true
    let z = false
    let y = x[a]

    if (y==0)
    {
        console.log("0 is nither prime, not even and not odd")
        z = true
        flag = false
    }
    else if (z==false)
    {
        for (let i = (y-1); i<=y && i>=2; i--)
        {
            if (y%i != 0)
            {
                continue
            }
            else { flag = false}
        }
    }

    if (flag == true)
    {
        console.log(y + " is a prime number")
    }

    if (z == false) 
    {
        if (y%2==0)
        {
            console.log (y + " is an even number")
        }
    
        else 
        {
            console.log (y + " is an odd number")
        }
    }
}
