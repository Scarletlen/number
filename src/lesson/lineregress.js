import React from 'react'
import { Row, Col,Input , Button  } from 'antd'
import {InputXY}  from '../Component/matrixinput' 
import {calLinear} from '../Component/calculate'
class LinearRe extends React.Component{
    state = {
        n : 2,
        valueX : "",
        matrixA : [[],[]],
        Point : [],
        data : ""
    }


    onChangeX = e => {
            this.setState({valueX : e.target.value})
    }
   

    onChangematrixXY = (e) =>{
        let index = e.target.name.split(" ")
        let value = e.target.value
        this.state.matrixA[parseInt(index[0])][parseInt(index[1])] = (value)
       
       
    
    }
    onClickmatrixadd = (e)=>{
        if(this.state.n < 10){
            this.setState({n : this.state.n+=1})
            this.state.matrixA.push([])
        }
    }
    onClickmatrixdel = (e)=>{
        if(this.state.n > 2){
            this.setState({n : this.state.n-=1})
            this.state.matrixA.pop([])
        }
    }
    onClickCalculator = (e)=>{
        this.setState({ data : calLinear(this.state.matrixA,this.state.valueX,this.state.n) })   
    }
    
    render(){

        return(
            <div className= "lineare">
                <h1 className="Ontop">Linear Regression</h1>
                <Row>
                    <Row className='rowButtonmatrix'>
                        <Col className='buttonmatrix'>
                            <Button type="primary" onClick={this.onClickmatrixadd}> เพิ่มขนาดเมตตริกซ์ </Button>
                        </Col>
                        <Col className='buttonmatrix'>
                            <Button type="primary" onClick={this.onClickmatrixdel}> ลดขนาดเมตตริกซ์ </Button>
                        </Col>

                    </Row>

                </Row>
                <Row className='titlematrix'>
                    <Col span={10}> จุด X , Y </Col>

                </Row>
                <Row className='matrix'>
                    <Col span={24}> <InputXY n={this.state.n} onChange={this.onChangematrixXY} /> </Col>

                </Row>
                <Row>
                    <div style={{ padding: '0px 40px' }}>
                        กรอก ค่า X ที่ต้องการหา
                    </div>
                </Row>
                <Row style={{ width: '100px', padding: '10px 40px' }}>
                    <div>
                        <Input className="matrixip" style={{ width: '150px' }} placeholder='Example = 40000' onChange={this.onChangeX} />
                    </div>


                </Row>
                
                <Row className='matrix' style={{ padding: '10px 40px' }}>
                    <Button type="primary" onClick={this.onClickCalculator}>คำนวณ</Button>
                </Row>
                
                
                <div>
                    {this.state.data}
                </div>
            </div>
        )
    }
}

export default LinearRe