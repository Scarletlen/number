const Desmos=require('desmos')

function  getDesmosInstance (){

    const elt = document.getElementById("desmos-calculator")
    const calculator = Desmos.GraphingCalculator(elt)
    calculator.updateSettings({
        expressionsCollapsed: "false"
    })
    return calculator;
}

export default  { getDesmosInstance }