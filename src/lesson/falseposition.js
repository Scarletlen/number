import React from 'react';
import { Input } from 'antd';
import { Button } from 'antd';
import {fasepositioncal} from '../Component/calculate';

class Falseposition extends React.Component{
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

    show_varlue =(e) =>{
        this.setState({result: fasepositioncal(this.state.XL,this.state.XR,this.state.ERROR,this.state.Equation)});
    };

    render(){
        return (
            <div className= 'falseui'>
                <h1 className ="Ontop">False Position</h1>
                
                    <div>
                        <span>F(x) =</span>
                        <span><Input placeholder=""  className="Input_1" onChange ={this.getEquation}/></span>
                    </div>
                    <div>
                        <span className="Text_Input_2"> XL : </span>
                        <span><Input placeholder="1.5"  className="Input_2" onChange ={this.getXL}/></span>
                        <span className="Text_Input_2"> XR : </span>
                        <span><Input placeholder="2.0"  className="Input_2"  onChange ={this.getXR}/></span>
                        <span className="Text_Input_2"> ERROR : </span>
                        <span><Input placeholder="0.000001"  className="Input_3"  onChange ={this.getERR}/></span>
                        <span className="Poom"><Button type="primary" onClick ={this.show_varlue} >Calculate</Button></span>
                    </div>
                    <div>
                        {this.state.result}
                    </div>
                    

            </div>
        );
    }
}

export default Falseposition
