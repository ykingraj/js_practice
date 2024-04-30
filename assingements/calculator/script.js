let x = ""
let val = ""
let result = "wroking on it"
let decimalpointer = -1
let statement = []
let operation = []

function valadd(a)
{
    val = val + a
    document.getElementById("result").innerText= val
    console.log ("553")
}

function valadd2()
{
    decimalpointer = val.indexOf(".")
    if (decimalpointer >=0 ){
    }
    else{
        val = val + "."
    }
    document.getElementById("result").innerText= val
}

function show()
{
    document.getElementById("result").innerText= result
}

function fundiv() 
{
    statement.push(val)
    operation.push("/")
    val= ""
    document.getElementById("result").innerText= val
}

function fundmulti() 
{
    
}

function funadd() 
{
    
}

function funsub() 
{
    
}

function cl()
{
    val = 0
    document.getElementById("result").innerText= 0;
}
