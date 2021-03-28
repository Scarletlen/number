import React from 'react'
import { Input } from 'antd';
import { Button } from 'antd';

class Secant extends React.Component{
    render(){
        return(
            <div className="Secantui">
                <h1 className ="Ontop">Secant</h1>
                
                <div>
                    <span>F(x) =</span>
                    <span><Input placeholder=""  className="Input_1"/></span>
                </div>
                <div>
                    <span className="Text_Input_2"> X0 =</span>
                    <span><Input placeholder="1.5"  className="Input_2"/></span>
                    <span className="Text_Input_2"> X1 =</span>
                    <span><Input placeholder="2.0"  className="Input_2"/></span>
                    <span className="Text_Input_2"> ERROR : </span>
                    <span><Input placeholder="0.000001"  className="Input_3"/></span>
                    <span className="Poom"><Button type="primary" >Calculate</Button></span>
                </div>

            </div>
        );
    }
}
export default Secant 