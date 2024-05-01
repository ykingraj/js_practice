let x = ""
let val = ""
let result 
let decimalpointer = -1
let stm = []
let stmlen = stm.length
let opt = []
let optlen = opt.length

function valadd(a) {
    val = val + a
    document.getElementById("result").innerText= val
}

function valadd2() {
    decimalpointer = val.indexOf(".")
    if (decimalpointer >=0 ) {
    }  // nothing will happen
    else{
        val = val + "."
    }
    document.getElementById("result").innerText= val
}

function fundiv() {
    stm.push(val)
    opt.push("/")
    val= ""
    document.getElementById("result").innerText= val
}

function fundmulti() {
    stm.push(val)
    opt.push("*")
    val= ""
    document.getElementById("result").innerText= val
}

function funadd() {
    stm.push(val)
    opt.push("+")
    val= ""
    document.getElementById("result").innerText= val
}

function funsub() {
    stm.push(val)
    opt.push("-")
    val= ""
    document.getElementById("result").innerText= val
}

function cl() {
    val = " "
    stm = []
    opt = []
    document.getElementById("result").innerText= 0;
}

function show() {

    stm.push(val)
    val= " "
    let ss 
    let oo
    result = stm[0]
    let c1 = 0
    let c2 = 1

    for (let s = 0; s <= (stmlen-2); s++ ){
        while( s <= stmlen-1 && c2< stm.length){
            ss = stm[c2]
            break
        }
        while( s <= optlen-1){
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
    console.log(result);
    document.getElementById("result").innerText= result
    alert(stm)
    alert(opt)   
}

function cl() {
    val = " "
    stm = []
    opt = []
    document.getElementById("result").innerText= 0;
}
