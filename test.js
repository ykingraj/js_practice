    let stm = [1,2,3,4]
    let stmlen = stm.length
    let opt = ["+","+","-"]
    let optlen = opt.length
    let ss 
    let oo
    result = stm[0]

    if ( stm[0] == " "){
        let c1 = 0
        let c2 = 2
    }
    else {
        let c1 = 0
        let c2 = 1
    }
    let c1 = 0
    let c2 = 1

    for (let s = 0; s <= (stmlen-2); s++ ){

        while( s <= stmlen-1 && c2< stm.length){
            ss = stm[c2]
            //console.log(c2 + " c2 result");
            break
        }
   
        while( s <= optlen-1){
            oo = opt[c1]
            //console.log(opt[c1]);
            break
        }
    
        if (oo == "+"){
            //console.log(result)  
            //console.log("+")
            //console.log(ss)      
            result += ss
            //console.log(result)
        
        }

        else if (oo == "-"){
            //console.log(result)
            //console.log("-")
            //console.log(ss)
            result -= ss
            //console.log(result)
        
        }

            else if (oo == "/"){
            result /= ss
            //console.log(result)
            //console.log("/")
        }

        else if (oo == "*"){
            result *= ss
            //console.log(result)
            //console.log("*")
        } 

        c1++
        c2++
    }
    console.log(result);
    //document.getElementById("result").innerText= result
