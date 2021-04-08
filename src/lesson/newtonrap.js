import React from 'react'
import { Input } from 'antd';
import { Button } from 'antd';
import {Newtoncal} from '../Component/calculate'

class Newtonrap extends React.Component{
    state ={
        Equation:'(-0.6*x)+0.8',
        Innitx: '0',
        ERROR: '0.000001',
        Result: ''
    }
    getEqation = (e) =>{
        this.setState({Equation: e.target.value});
    };
    getinnitx = (e) =>{
        this.setState({Innitx: e.target.value});
    };
    getERROR = (e) =>{
        this.setState({ERROR: e.target.value});
    };
    show_value = (e) =>{
        this.setState({Result: Newtoncal(this.state.Equation,this.state.Innitx,this.state.ERROR)});
        
    };
    render(){
        return(
            <div className="newtonrapui">
                 <h1 className="Ontop">Newton Raphon Method</h1>
                <div>
                        <span>F(x) =</span>
                        <span><Input placeholder="(-0.6*x)+0.8"  className="Input_1" onChange ={this.getEqation}/></span>
                    </div>
                    <div>
                        <span className=""> Initial x = </span>
                        <span><Input placeholder="0"  className="Input_2" onChange ={this.getinnitx}/></span>
                        <span className=""> ERROR : </span>
                        <span><Input placeholder="0.000001"  className="Input_3" onChange = {this.getERROR}/></span>
                        <span className="Poom"><Button type="primary" onClick = {this.show_value} >Calculate</Button></span>
                    </div>
                    <div>
                        {this.state.Result}
                    </div>


            </div>
            
        );
    }

}
export default Newtonrap