let x = ""
let val = ""
let result = "wroking on it"
let decimalpointer = -1
let stm = []
let stmlen = stm.length
let opt = []
let optlen = opt.length

function valadd(a) {
    val = val + a
    document.getElementById("result").innerText= val
    console.log ("553")
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
    val = "0"
    document.getElementById("result").innerText= 0;
}

function show() {
    document.getElementById("result").innerText= val
    //alert(stm)
    //alert(opt)

    
}



let ss 
let oo
val = 0


for (let s = 1; s <= (stmlen-1); s++){
    ss = Number(stm[s])
    
    for (let o = 0; o <= (optlen-1); o++){
        oo = opt[o]

        if (oo == "+"){

            val += ss
        }

        if (oo == "-"){

            val -= ss
        }

        if (oo == "/"){

            val /= ss
        }

        if (oo == "*"){

            val *= ss
        } 
    }
}   
