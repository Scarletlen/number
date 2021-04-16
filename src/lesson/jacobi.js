import React from 'react'
import {  Row ,Button,Col,Input  } from 'antd';
import {MatrixInputA, MatrixInputB} from '../Component/matrixinput'
import {Jacobical} from '../Component/calculate'

class Jacobi extends React.Component{
    state = 
    {
        n: 2,
        matrixA : [[],[]],
        matrixB : [],
        ERROR : "",
        result : ""
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

        getERR= (e) => {
            this.setState({
                ERROR: e.target.value,
            })
        }
        
        onPoom = e =>{
            this.setState({
                result : Jacobical(this.state.n,this.state.matrixA,this.state.matrixB,this.state.ERROR)
            })
        }
    render(){

        return(
            <div className="jacobicname">
                <h1 className ="Ontop">Jacobi-Iteration Method</h1>
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
                   
                </Row>
                <span><Input placeholder="0.000001" onChange={this.getERR} className="Input_3"/></span>
                <span className="Poom"><Button type="primary" onClick ={this.onPoom}>Calculate</Button></span>
                <div>
                    {this.state.result}
                </div>
            </div>
        )
    }

}

export default Jacobi