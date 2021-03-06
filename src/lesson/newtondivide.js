import React from 'react'
import { Row, Col } from 'antd'
import { Input, Button } from 'antd'
import { InputXY } from '../Component/matrixinput'
import { calNewtonInterpolation2, copyArray } from '../Component/calculate'
import '../App.css'
import apis from '../api/index'
import Modal_Example from '../Component/model'

import Graph from "../Component/Desmos"
class Newtondivide extends React.Component {
    state = {
        n: 2,
        matrixA: [[], []],
        Point: [],
        valueX: '',
        data: "",
        isModalVisible: false,
        apiData: [],
        hasData: false,
        iscal: false,
        instantgraph: null,
        exps: ""
    }
    async getData() {
        let tempData = null
        await apis.getInter().then(res => { tempData = res.data })
        this.setState({ apiData: tempData })
        this.setState({ hasData: true })
        /* console.log(tempData); */
    }

    onClickOk = e => {
        this.setState({ isModalVisible: false })
    }

    onClickInsert = e => {
        /*         console.log(e.currentTarget);
                console.log(e.target);
                console.log(e.currentTarget.getAttribute('name'));
                console.log(e.target.name); */
        let index = e.currentTarget.getAttribute('name').split('_')
        index = parseInt(index[1])
        this.setState({
            matrixA: copyArray(this.state.apiData[index]["n"], this.state.apiData[index]["matrixA"]),
            Point: [...this.state.apiData[index]["point"]],
            n: this.state.apiData[index]["n"],
            valueX: this.state.apiData[index]["x"],
            isModalVisible: false
        })
    }

    onClickExample = e => {
        if (!this.state.hasData) {
            this.getData()
        }
        this.setState({ isModalVisible: true })
    }
    onChangeX = e => {
        this.setState
            (
                { valueX: e.target.value }
            )
    }
    onChangePoint = e => {
        let index = []
        index = e.target.value
        this.setState
            (
                { Point: index.split(",") }
            )
    }
    onChangematrixXY = (e) => {
        let index = e.target.name.split(" ")
        let value = e.target.value
        let arr = this.state.matrixA;
        arr[parseInt(index[0])][parseInt(index[1])] = value
        this.setState({
            matrixA: arr
        })
        console.log(this.state.matrixA.toString())


    }
    onClickmatrixadd = (e) => {
        if (this.state.n < 10) {
            this.setState({ n: this.state.n += 1 })
            this.state.matrixA.push([])
        }
    }
    onClickmatrixdel = (e) => {
        if (this.state.n > 2) {
            this.setState({ n: this.state.n -= 1 })
            this.state.matrixA.pop([])
        }
    }
    onClickCalculator = (e) => {
        let temdata = calNewtonInterpolation2(this.state.matrixA, this.state.Point, this.state.valueX)
        let temin=this.state.instantgraph
        let ext = "f(x)="
        let joot =""
        let st = ""
        
            temdata['c'].map((x, i) => {
                ext = ext + '(' + x + ')' + st
                if (i != temdata['c'].length - 1) {
                    ext = ext + "+"
                    st = st + "(x-" + this.state.matrixA[parseInt(this.state.Point[i]-1)][0] + ")"
                }
            })

            this.state.matrixA.map((x,i)=>{
                joot=joot+"("+x[0]+","+x[1]+")"
                if(i<this.state.n-1){
                    joot=joot+","
                }
            })
            temin.setExpression({ id: 'graph1', latex:  ext})
            temin.setExpression({ id: 'graph2', latex:  joot})
            temin.setExpression({ id: 'graph3', latex:  "("+this.state.valueX+", f("+this.state.valueX+"))" })
            this.setState({
                data: temdata,
                iscal: true,
                exps: ext,
                instantgraph: temin
            })
    }
    componentDidMount() {
        
        const calculator = Graph.getDesmosInstance();

       // calculator.setExpression()
        this.setState({ instantgraph: calculator });
    
}

render() {

    return (
        <div className="newtondevide">
            <h1 className="Ontop">Newton's divided-differences</h1>
            <Modal_Example
                visible={this.state.isModalVisible}
                onOk={this.onClickOk}
                hasData={this.state.hasData}
                apiData={this.state.apiData}
                onClick={this.onClickInsert}
            />
            <Row>
                <Row className='rowButtonmatrix'>
                    <Col className='buttonmatrix'>
                        <Button type="primary" onClick={this.onClickmatrixdel}> ลดขนาดเมตตริกซ์ </Button>
                    </Col>

                    <Col className='buttonmatrix'>
                        <Button type="primary" onClick={this.onClickmatrixadd}> เพิ่มขนาดเมตตริกซ์ </Button>
                    </Col>

                </Row>

            </Row>
            <Row className='titlematrix'>
                <Col span={10}> จุด X , Y </Col>

            </Row>
            <Row className='matrix'>
                <Col span={24}> <InputXY n={this.state.n} onChange={this.onChangematrixXY} value={this.state.matrixA} /> </Col>

            </Row>
            <Row>
                <div style={{ padding: '0px 40px' }}>
                    กรอก ค่า X ที่ต้องการหา
                    </div>
            </Row>
            <Row style={{ width: '100px', padding: '10px 40px' }}>
                <div>
                    <Input className="matrixip" style={{ width: '150px' }} placeholder='Example = 40000' onChange={this.onChangeX} value={this.state.valueX} />
                </div>


            </Row>
            <Row>
                <div style={{ padding: '0px 40px' }}>
                    ใส่จำนวนจุดที่ต้องการ
                    </div>
            </Row>
            <Row style={{ width: '100px', padding: '10px 40px' }}>
                <div>
                    <Input className="matrixip" style={{ width: '150px' }} placeholder='Example = 1,2,3' onChange={this.onChangePoint} value={this.state.Point} />
                </div>


            </Row>
            <Row className='matrix' style={{ padding: '10px 40px' }}>
                <Button type="primary" onClick={this.onClickCalculator}>คำนวณ</Button>
                <span className="Poom"><Button type="primary" onClick={this.onClickExample} >Exsample</Button></span>
            </Row>
            {this.state.iscal ?

                <div>

                    <div className="ontopresult"> คำตอบของการคำนวนคือ </div>
                    <div className="result">f({this.state.valueX})={this.state.data["ans"]} </div>
                

                </div>
                : null

            }

            <div id="desmos-calculator" style={{ height: '400px' }} />

        </div>
    )
}
}

export default Newtondivide