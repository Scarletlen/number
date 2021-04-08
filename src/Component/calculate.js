const math=require("mathjs");
function Xtox (equation){
    equation = equation.replaceAll('X','x')

    return equation
}
export function bisectioncal( init_xl, init_xr, init_error,init_fx) {
    init_fx=Xtox(init_fx);
    let fx = math.parse(init_fx).compile()
    let xl = math.bignumber(init_xl)
    let xr = math.bignumber(init_xr)
    let error = math.bignumber(init_error)
    let xm = math.divide(math.add(xl, xr), 2)
    let checkValue = math.multiply(fx.evaluate({ x: xm }), fx.evaluate({ x: xr }))
    let checkError = math.bignumber(Number.MAX_VALUE)
    let newXm = 0
    let data = []

    let iteration = 1

    if (checkValue > 0) {
        xr = xm
    }
    else if (checkValue < 0) {
        xl = xm
    }

    while (math.larger(checkError, error)) {
        newXm = math.divide(math.add(xl, xr), 2)
        checkValue = math.multiply(fx.evaluate({ x: newXm }), fx.evaluate({ x: xr }))
        if (checkValue > 0) {
            xr = newXm
        }
        else if (checkValue < 0) {
            xl = newXm
        }
        checkError = math.abs(math.divide(math.subtract(newXm, xm), newXm))
        xm = newXm
        data.push(<div> {iteration}: {xm.toFixed(15).toString()}</div>)
        //data.push({key:iteration, iteration:iteration, x:xm.toString(), error:math.fix(checkError, 16).toString()})
        iteration = iteration + 1
    }
    return data
}

export function fasepositioncal( init_xl, init_xr, init_error,init_fx){

    init_fx = Xtox(init_fx);
    let data=[];
    let fx = math.parse(init_fx).compile()
    let xl = math.bignumber(init_xl)
    let xr = math.bignumber(init_xr)
    let er = math.bignumber(init_error)
    let fxl = fx.evaluate({x:xl});
    let fxr = fx.evaluate({x:xr});
    let x = math.divide(math.subtract(math.multiply(xl,fxr),math.multiply(xr,fxl)),math.subtract(fxr,fxl));
    let num =math.multiply(fx.evaluate({x:x}),fxr);
    let tmp_er = 9999999;
    let new_x = 0;
    let i =1;

    if(num>0){
        xr = x;
    }
    else if(num<0){
        xl = x;
    }

    while(tmp_er > er){
        fxr = fx.evaluate({x:xr});
        fxl = fx.evaluate({x:xl});
        new_x = math.divide(math.subtract(math.multiply(xl,fxr),math.multiply(xr,fxl)),math.subtract(fxr,fxl));
        num = math.multiply(fx.evaluate({x:x}),fxr);
        if(num>0){
            xr = new_x;
        }
        else if(num<0){
            xl = new_x;
        }
        tmp_er = math.abs(math.divide(math.subtract(new_x,x),new_x))
        x = new_x;
        data.push(<div>{i}: z is {x.toFixed(15).toString()}</div>)
        i++;
    }


    return data;
}
export function onepointcal(initialEquation ,initialX,initialError){
    let equation =Xtox(initialEquation)
    equation = math.parse(equation).compile()
     
     let X = math.bignumber(initialX)

     let error = math.bignumber(initialError)
     
     let arr = []

     let i = 1;
     
     
     let oldX = 0;

     let checkError = 1
     let oldcheckError = 2;
     while(checkError > error){

        
         X  = equation.evaluate({x : X})

         checkError =  math.abs((X - oldX)/X);
         if(i>3&&(checkError > oldcheckError)){
            arr.push(<div>ลู่ออก</div>)
            break;
        }
          oldcheckError = checkError;
        
         oldX = X
         
        
        arr.push(<div>i :{i} iterration :{i.toString()} x:  {X.toFixed(15).toString()} error : {checkError.toFixed(15).toString()}</div>)
        i++
        
     }
     return arr
}

export function Newtoncal(initialEquation, initialX, initialError) {

    let equation = Xtox(initialEquation)

    equation = math.parse(equation)
    let X = math.bignumber(initialX)

    let fXprime = math.derivative(equation,'x').compile()
    
   
    let error = math.bignumber(initialError)

    

    let arr = []

    let i = 1;


    let oldX = X;

    let checkError = 9999
    let oldcheckError = 9999;
    while (checkError > error) {

        let fXdiff = fXprime.evaluate({x : X})
        let fX = equation.evaluate({ x: X })
        X = math.subtract(X, math.divide(fX, fXdiff))



        checkError = math.abs((X - oldX) / X);
        if ((checkError > oldcheckError)&&i>3) {
            arr.push(<div>ลู่ออก</div>)
            break;
        }
        oldcheckError = checkError;

        oldX = X

        arr.push(<div>iteration: {i.toString()} x: {X.toFixed(15).toString()} error: {checkError.toFixed(15).toString()} </div>)
        
        i++

    }
    return arr
}

export function Secantcal(initialEquation, initialX0,initialX1, initialError) {

    let equation = Xtox(initialEquation)

    equation = math.parse(equation).compile()
    let x0 = math.bignumber(initialX0)
    let x1 = math.bignumber(initialX1)


   let fx0 = equation.evaluate({x:x0})
   let fx1 = equation.evaluate({x:x1})
    
   
    let error = math.bignumber(initialError)

    

    let arr = []

    let i = 1;


    let oldX = 0;

    let checkError = 9999
    let oldcheckError = 9999;
    while (checkError > error) {

    let    x = math.subtract(x1 , math.divide(math.multiply(fx1,math.subtract(x0 , x1) ), math.subtract(fx0 , fx1)));
            
            checkError = Math.abs((x - x1)/x);
            
            fx0 = fx1;
            x0 = x1;
            x1 = x;
            fx1 = equation.evaluate({x : x1})


       
        if (checkError > oldcheckError) {
            arr.push(<div>ลู่ออก</div>)
            break;
        }
        oldcheckError = checkError;

        oldX = x

        arr.push(<div>iteration: {i.toString()} x: {x.toFixed(15).toString()} error: {checkError.toFixed(15).toString()}</div>)
       
        i++

    }
    
    return arr
}