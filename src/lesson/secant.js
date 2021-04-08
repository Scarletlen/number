import React from 'react'
import { Input } from 'antd';
import { Button } from 'antd';
import { Secantcal} from '../Component/calculate';
class Secant extends React.Component{
    state={
        Equation: 'x^2-7',
        x0: '2.0',
        x1: '2.2',
        ERROR: '0.000001',
        Result: ''
    };
    getEquation = (e) =>{
        this.setState({Equation: e.target.value});
    }
    getx0 = (e) =>{
        this.setState({x0: e.target.value});
    }
    getx1 = (e) =>{
        this.setState({x1: e.target.value});
    }
    getERROR = (e) =>{
        this.setState({ERROR: e.target.value});
    }
    getvalue = (e) =>{
        this.setState({Result: Secantcal(this.state.Equation,this.state.x0,this.state.x1,this.state.ERROR)})
        
    }
    render(){
        return(
            <div className="Secantui">
                <h1 className ="Ontop">Secant</h1>
                
                <div>
                    <span>F(x) =</span>
                    <span><Input placeholder=""  className="Input_1" onChange ={this.getERROR}/></span>
                </div>
                <div>
                    <span className="Text_Input_2"> X0 =</span>
                    <span><Input placeholder="1.5"  className="Input_2" onChange ={this.getx0}/></span>
                    <span className="Text_Input_2"> X1 =</span>
                    <span><Input placeholder="2.0"  className="Input_2" onChange ={this.getx1}/></span>
                    <span className="Text_Input_2"> ERROR : </span>
                    <span><Input placeholder="0.000001"  className="Input_3" onChange ={this.getERROR}/></span>
                    <span className="Poom"><Button type="primary" onClick = {this.getvalue}>Calculate</Button></span>
                </div>
                <div>
                    {this.state.Result}
                </div>
            </div>
        );
    }
}
export default Secant 