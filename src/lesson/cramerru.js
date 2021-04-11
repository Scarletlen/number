import React from 'react';
import { Input, Row ,Button,Col  } from 'antd';
import {MatrixInputA, MatrixInputB} from '../Component/matrixinput'
class Cremeru extends React.Component{
    
    state = 
    {
        n: 2,
        matrixA : [[],[]],
        matrixB : [],
    }
        OnChangeMatrixA = e =>{
            let changedArr = this.state.matrixA
            let index = e.target.name.split('_')
            changedArr[parseInt(index[1])][parseInt(index[2])] = e.target.value
            console.log(e.target.value)
            this.setState({matrixA:changedArr})
        }
    
        OnChangeMatrixB = e =>{
            let changedArr = this.state.matrixB
            let index = e.target.name.split('_')
            changedArr[parseInt(index[1])]= e.target.value
            console.log(e.target.value)
            this.setState({matrixB:changedArr})
        }
    
        onClickAdd = e =>{
            if(this.state.n < 6){
                this.state.matrixA.push([])
                this.setState({n:this.state.n+1})
            } 
        }
    
        onClickDel = e =>{
            if(this.state.n > 2){
                this.state.matrixA.pop()
                this.setState({n:this.state.n-1})
            } 
        }
    render(){
        return(
            <div className ="CramerRule">
                <h1 className ="ontop"></h1>
                <Row>
                    <Col span={22}>
                        <MatrixInputA n={this.state.n} onChange={this.OnChangeMatrixA} value={this.state.matrixA}/>
                    </Col>
                    <Col span={2}>
                        <MatrixInputB n={this.state.n} onChange={this.OnChangeMatrixB} value={this.state.matrixB}/>
                    </Col>
                </Row>
            </div>
            
        );

     
    }

}
export default Cremeru