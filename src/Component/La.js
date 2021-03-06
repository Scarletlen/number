
import '../App.css';
import React from 'react'
import { Layout, Menu} from 'antd';
import Bisec from '../lesson/bisection';
// import Falsepo from './lesson/falseposition';
// import Onepoint from './lesson/onepoint';
// import Newton from './lesson/newtonrap';
// import Secan from './lesson/secant';
// import Crramers from './lesson/cramerru';
// import GaussEli from './lesson/gausseli';
// import GaussJor from './lesson/gaussjor';
// import LUdecom from './lesson/lude';
import { Route } from "react-router-dom";
import { HashRouter } from 'react-router-dom';
import { Link } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


class La extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
    render()
    {
       const { collapsed } = this.state;
       return (
            <div>
                <Layout style={{ minHeight: '100vh' }}>
                      <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                        <div className="logo" />
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                          <SubMenu key="sub1" title="Root of equations">
                            <Menu.Item key="3">Bisection Method
                            {/* <Link to='/Bisection'>Bisection</Link>   */}
                            </Menu.Item>
                            <Menu.Item key="4">Falseposition Method</Menu.Item>
                            <Menu.Item key="5">Onepoint Method</Menu.Item>
                            <Menu.Item key="6">Newton Raphson</Menu.Item>
                            <Menu.Item key="8">Secant</Menu.Item>
                          </SubMenu>
                          <SubMenu key="sub2" title="Martrix">
                            <Menu.Item key="9">Cramer's Rule</Menu.Item>
                            <Menu.Item key="10">Gauss Elimination Method</Menu.Item>
                            <Menu.Item key="11">Gauss Jordan Method</Menu.Item>
                            <Menu.Item key="8">LU Decomposition Method</Menu.Item>
                            
                          </SubMenu>
                        </Menu>
                      </Sider>
                      <Layout className="site-layout">
                        <Header className="site-layout-background" style={{ padding: 0 }} />
                        <Content style={{ margin: '0 16px' }}>
                          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            {/* <Route path='/Bisection' component={Bisec}></Route> */}
                          </div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                      </Layout>
                 </Layout>

            </div>
       );
           
    }
}
export default La;
