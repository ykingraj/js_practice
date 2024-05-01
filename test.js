
let x = ""
let val = ""
let val2 = ""
let result 
let decimalpointer = -1
let stm = [9,2,3]
let stmlen = stm.length
let opt = ["+","-"]
let optlen = opt.length
    
    
    val= " "
    let ss 
    let oo
    result = stm[0]
    let c1 = 0
    let c2 = 1

    for (let s = 0; s <= (stmlen-2); s++ ) {
        while( s <= stmlen-1 && c2< stm.length) {
            ss = stm[c2]
            break
        }
        while( s <= optlen-1) {
            oo = opt[c1]
            break
        }

        if (oo == "+"){  
            result += ss
        }
        else if (oo == "-"){
            result -= ss
        }
            else if (oo == "/"){
            result /= ss 
        }
        else if (oo == "*"){
            result *= ss
        } 
        
        c1++
        c2++
    }
    console.log(opt);
    console.log(stm);
    console.log(result);
    //document.getElementById("result").innerText= result
    //alert(stm)
    //alert(opt)  