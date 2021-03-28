import React from 'react'
import { Input } from 'antd';
import { Button } from 'antd';


class Onepoint extends React.Component{
    render(){
        return(
            <div className= 'onepointui'>
                <h1 className="Ontop">Onepoint Method</h1>
                <div>
                        <span>F(x) =</span>
                        <span><Input placeholder=""  className="Input_1"/></span>
                    </div>
                    <div>
                        <span className=""> Initial x = </span>
                        <span><Input placeholder=""  className="Input_2"/></span>
                        <span className=""> ERROR : </span>
                        <span><Input placeholder="0.000001"  className="Input_3"/></span>
                        <span className="Poom"><Button type="primary" >Calculate</Button></span>
                    </div>

            </div>
        );
    }
}
export default Onepoint