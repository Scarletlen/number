import { Row , Col } from 'antd';
import { Button } from 'antd';
import { Modal } from 'antd';
import React from 'react'

class Modalre_Example extends React.Component{
    render() {
        return (
            <div>
                <Modal
                    title = 'ตัวอย่าง'
                    visible = {this.props.visible}
                    onCancel = {this.props.onOk}
                    footer = {[
                        <Button type = 'primary' onClick={this.props.onOk}>
                            Ok
                        </Button>
                    ]}
                >

                    {this.props.hasData ?


                        <Row>
                            <Col span={12}>ข้อที่ 1 {this.props.apiData[this.props.onEx]['equation']}</Col>
                            <Col span={12}>
                                    <Button type='primary' name={'insert_' + this.props.onEx} onClick={this.props.onClick}>Insert</Button>
                                </Col>

                        </Row>

                        : <span style={{fontSize: "25px" , textAlign: "center"}}>กำลังโหลดข้อมูล</span>
                    }
                </Modal>
            </div>
        )
    }
}

export default Modalre_Example 