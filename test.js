let stm = [1,2,3,4]
let stmlen = stm.length
let opt = ["+","-","+"]
let optlen = opt.length
let ss 
let oo
val = 0


for (let s = 0; s <= (stmlen-1); s++){
    ss = Number(stm[s])
    
    for (let o = 0; o <= (optlen-1); o++){
        oo = opt[o]
    }

    if (oo == "+"){
            val += ss
            console.log(val)
        }

    if (oo == "-"){
            val -= ss
            console.log(val)
        }

    if (oo == "/"){
            val /= ss
            console.log(val)
        }

    if (oo == "*"){
            val *= ss
            console.log(val)
        } 
    
}   
//console.log (val)