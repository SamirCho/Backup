function factorial(x){
    if(x<=1){
        return 1
    }
    return x*factorial(x-1)
}

function print(){
    container.innerHTML=factorial(input.value)
}