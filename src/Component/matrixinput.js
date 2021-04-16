import React from "react";
import { Input,Col,Row} from 'antd';


class MatrixInputA extends React.Component{

    createMatrix(){
        let arrMatrix = []
        for(let i=0;i<this.props.n;i++){
            for(let j=0;j<this.props.n;j++){
                arrMatrix.push(<Input className='matrix-input' name={'inputA_'+i.toString()+'_'+j} placeholder={i.toString()+j} onChange={this.props.onChange}/>)
            }
            arrMatrix.push(<div></div>)
        }
        return arrMatrix
    }

    render(){
        return(
            <div>
                {this.createMatrix()}
            </div>
        )
    }
}

class MatrixInputB extends React.Component{

    createMatrix(){
        let arrMatrix = []
        for(let i=0;i<this.props.n;i++){
            arrMatrix.push(<Input className='matrix-input' name={'inputB_'+i} placeholder={i.toString()} onChange={this.props.onChange}/>)
            arrMatrix.push(<div></div>)
        }
        return arrMatrix
    }

    render(){
        return(
            <div>
                {this.createMatrix()}
            </div>
        )
    }
}


class InputXY extends React.Component{

    ShowInput(){
        let arrRow = []
        for(let i = 0 ; i < this.props.n ; i++){
            let arrCol = []
            for(let j = 0 ;  j < 2 ; j++){
                if(j == 0){
                    arrCol.push(<Col className = 'colInput'>  <Input style = {{width : '100px'}}  name = {i.toString()+' '+j.toString()} placeholder = 'X' onChange = {this.props.onChange} autoComplete = 'off'/>  </Col>)
                }
                else if(j == 1){
                    arrCol.push(<Col className = 'colInput'>  <Input style = {{width : '100px'}}  name = {i.toString()+' '+j.toString()} placeholder = 'f(X)' onChange = {this.props.onChange} autoComplete = 'off'/>  </Col>)
                }
               
                
            }
            arrRow.push(<Row className = 'rowInput'>{arrCol}</Row>)
            
            
        } 
        return arrRow
    }
    
    render(){
        return(
            <div>
                {this.ShowInput()}
            </div>
        )
    }
}
export {MatrixInputA, MatrixInputB,InputXY}

