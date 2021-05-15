const Desmos=require('desmos')

function  getDesmosInstance (){

    const elt = document.getElementById("desmos-calculator")
    const calculator = Desmos.GraphingCalculator(elt)
    return calculator;
}

export default  { getDesmosInstance }