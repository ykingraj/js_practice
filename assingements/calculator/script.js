

let result = document.getElementById("result")
let buttons = Array.from(document.getElementsByClassName("btn"))

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    if (result.innerText === "0" && e.target.innerText != "/" && e.target.innerText != "*") 
    {
      result.innerText = "";
    }
    if (e.target.innerText === "AC") 
    {
      result.innerText = "";
    } 
    else if (e.target.innerText === "=") 
    {
      try {
        result.innerText = eval(result.innerText)
      } 
      catch 
      {
        result.innerText = "ERROR."
      }
    } 

    else 
    {
      result.innerText += e.target.innerText
    }
  })
})


/*
let x = ""
let val = ""
let val2 = ""
let result
let decimalpointer = -1
let stm = []
let opt = []
let ss 
let oo
let c1 = 0
let c2 = 1

function cl() {
    val = " "
    val2 = " "
    stm = [ ]
    opt = [ ]
    document.getElementById("result").innerText= 0;
}
    
function valadd(a) {
    val = val + a
    val2= val2 + a
    document.getElementById("result").innerText= val2
}

function valadd2() {
    decimalpointer = val.indexOf(".")
    if (decimalpointer >=0 ) {
    }  // nothing will happen
    else{
        val = val + "."
        val2 = val2 + "."
    }
    document.getElementById("result").innerText= val2
}

function fundiv() {
    stm.push(val)
    val2= val2 +  "/"
    opt.push("/")
    stm.push("/")
    val= ""
    document.getElementById("result").innerText= val2
}

function fundmulti() {
    stm.push(val)
    val2= val2 +  "*"
    opt.push("*")
    stm.push("*")
    val= ""
    document.getElementById("result").innerText= val2
}

function funadd() {
    stm.push(val)
    val2= val2 +  "+"
    opt.push("+")
    stm.push("+")
    val= ""
    document.getElementById("result").innerText= val2
}

function funsub() {
    stm.push(val)
    val2= val2 +  "-"
    opt.push("-")
    stm.push("-")
    val= ""
    document.getElementById("result").innerText= val2
}

function show() {
    stm.push(val)
    val= " "
    val2 = " "
    /*
    result = Number(stm[0])
    let stmlenn = stm.length
    let optlenn = opt.length
    for (let s = 0; s <= (stmlenn-2); s++ ) {
        while( s <= stmlenn-1 && c2 < stmlenn) {
            ss = Number(stm[c2])
            break
        }
        while( s <= optlenn-1) {
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
    
    //stm.push(result)
    console.log(result);
    document.getElementById("result").innerText= eval(stm)
    alert(stm)
    alert(opt)   
}
*/