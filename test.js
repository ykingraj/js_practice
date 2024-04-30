let stm = [1,2,3,4]
let stmlen = stm.length
let opt = ["+","-","+"]
let optlen = opt.length
let ss 
let oo
let val = stm[0]
let c1 = 0
let c2 = 1


for (let s = 0; s <= (stmlen-1); s++ ){

    while( s <= stmlen-1 && c2< stm.length){
        ss = stm[c2]
        //console.log(c2 + " c2 val");
        break
    }
   
    while( s <= optlen-1){
        oo = opt[c1]
        //console.log(opt[c1]);
        break
    }
    
    

    if (oo == "+"){
        console.log(val)  
        console.log("+")
        console.log(ss)      
        val += ss
        console.log(val)
        
    }

    else if (oo == "-"){
        console.log(val)
        console.log("-")
        console.log(ss)
        val -= ss
        console.log(val)
        
    }

        else if (oo == "/"){
        val /= ss
        //console.log(val)
        console.log("/")
    }

    else if (oo == "*"){
        val *= ss
        //console.log(val)
        console.log("*")
    } 

    c1++
    c2++
}
//console.log(val);












































/*
for (let s = 1; s <= (stmlen-1); s++){
    ss = Number(stm[s])
 
    for (let o = 0; o <= (optlen-1); o++){
        oo = opt[o]
    

    if (oo == "+"){
            val += ss
            console.log(val)
            console.log("+")
        }

    else if (oo == "-"){
            val -= ss
            console.log(val)
            console.log("-")
        }

    else if (oo == "/"){
            val /= ss
            console.log(val)
            console.log("/")
        }

    else if (oo == "*"){
            val *= ss
            console.log(val)
            console.log("*")
        } 
    }
    continue
}
  
//console.log (val)
*/

