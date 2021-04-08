import React from 'react';
import { Input } from 'antd';
import { Button } from 'antd';
import {bisectioncal} from "../Component/calculate"


class Bisection extends React.Component{

    state = {
        Equation:'x^4-13',
        XL: '1.5',
        XR: '2.0',
        ERROR: '0.000001',
        result: ''
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
        this.setState(
            {result: bisectioncal(this.state.XL,this.state.XR,this.state.ERROR,this.state.Equation)}
        );
    }

        

    render(){
      
        return(
            <div className="allinbisetion" >
                <h1 className ="Ontop">Bisection Method</h1>
            
                    <div>
                        <span>F(x) =</span>
                        <span><Input placeholder="x^4-13" onChange={this.getEquation} className="Input_1"/></span>
                    </div>
                    <div>
                        <span className="Text_Input_2"> XL : </span>
                        <span><Input placeholder="1.5" onChange={this.getXL} className="Input_2"/></span>
                        <span className="Text_Input_2"> XR : </span>
                        <span><Input placeholder="2.0" onChange={this.getXR} className="Input_2"/></span>
                        <span className="Text_Input_2"> ERROR : </span>
                        <span><Input placeholder="0.000001" onChange={this.getERR} className="Input_3"/></span>
                        <span className="Poom"><Button type="primary" onClick={this.show_value} >คำนวน</Button></span>
                    </div>
                    <div>
                        {this.state.result}
                    </div>
                    
                </div>
    

        );
    }
}
export default Bisection