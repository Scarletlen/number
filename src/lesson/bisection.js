import React from 'react';
import { Input } from 'antd';
import { Button } from 'antd';



class Bisection extends React.Component{

    state = {
        Equation:'x^4-13',
        XL: '1.5',
        XR: '2.0',
        ERROR: '0.000001',
        result: '',
      };
     

    getEquation = (e) => {
        this.setState({

            Equation: e.target.value,
        });
    };

    getXL = (e) => {
        this.setState({
            XL: e.target.value,
        });
    };

    getXR = (e) => {
        this.setState({
            XR: e.target.value,
        });
    };

    getERR= (e) => {
        this.setState({
            ERROR: e.target.value,
        });
    };

    show_value = (e) =>{

        const Parser = require('expr-eval').Parser; // ฟั่งชั้นแปลงสมการ
        let i = 1;
        let arr = [];

        let Equation = this.state.Equation;
        let XL = this.state.XL;
        XL = parseFloat(XL);
        let XR = this.state.XR;
        XR = parseFloat(XR);
        let ERROR = this.state.ERROR;
        ERROR = parseFloat(ERROR);

        let Xmid = (XL+XR)/2;
        let XM = 0;
        let errer_sum = 1;

        var expression = Parser.parse(Equation);
        let result = expression.evaluate({ x: Xmid }) * expression.evaluate({ x: XR });

        (result < 0) ? (XL = Xmid) : XR = Xmid;

        while(errer_sum > ERROR){
            XM = (XL+XR)/2;

            result = expression.evaluate({ x: XM }) * expression.evaluate({ x: XR });

            (result < 0) ? (XL = XM) : (XR = XM);

            errer_sum = Math.abs((XM-Xmid)/XM);
            Xmid = XM;
            arr.push(<div className='result' key={i}>Iteration {i} : {XM}</div>);
            i = i+1;
        }
        this.setState({result: arr})
    }

    render(){
      
        return(
            <div className="allinbisetion" >
                
                <div className="in_box">
                    <h2>Bisection Method</h2>
                    <div>
                        <span>F(x) :</span>
                        <span><Input placeholder="x^4-13" onChange={this.getEquation} className="Input_2"/></span>
                        <span className="PoomBisec"><Button type="primary" onClick={this.show_value} >Calculate</Button></span>
                    </div>
                    <div>
                        
                        <span className="Text_Input_2"> XL : </span>
                        <span><Input placeholder="1.5" onChange={this.getXL} className="Input_2"/></span>
                        <span className="Text_Input_2"> XR : </span>
                        <span><Input placeholder="2.0" onChange={this.getXR} className="Input_2"/></span>
                        <span className="Text_Input_2"> ERROR : </span>
                        <span><Input placeholder="0.000001" onChange={this.getERR} className="Input_2"/></span>
                    </div>
                    {this.state.result}
                </div>
            </div>

        );
    }
}
export default Bisection