import React from 'react'
import {  Row ,Button,Col  } from 'antd';
import {MatrixInputA, MatrixInputB} from '../Component/matrixinput'
class Lude extends React.Component{
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
            <div className="ludeui">
                <h1 className ="Ontop">Gauss Elimination Method</h1>
                <Button onClick={this.onClickDel}>Del</Button>{this.state.n} x {this.state.n}<Button onClick={this.onClickAdd}>Add</Button>
                <Row>
                    <Col span ='6'>
                        <MatrixInputA n={this.state.n} onChange={this.OnChangeMatrixA} value={this.state.matrixA}/>
                    </Col>
                    <Col>
                    
                    </Col>
                    <Col >
                        <MatrixInputB n={this.state.n} onChange={this.OnChangeMatrixB} value={this.state.matrixB}/>
                    </Col>
                    <span className="Poom"><Button type="primary" >Calculate</Button></span>
                </Row>
                <div>
                
                </div>
            </div>
        );
    }

}
export default Lude