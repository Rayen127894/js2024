function max(a,b){
    if (a>b)
    return a
    else 
    return b

}

console.log(max(3,5))



function aff(char){
    return char
}

console.log(aff("bonjour"))


function somme(a,b){
    a=prompt("Donner le premier nombre")
    b=prompt("Donner la deuxieme nombre")
    alert(Number(a)+Number(b))
}

console.log(somme(3,7))



const container = document.getElementById("zone")

function into(){
    container.innerHTML = "Enter"
}

function out(){
    container.innerHTML = "Out"
}

function bg(){
    container.style.backgroundColor = "red"
}