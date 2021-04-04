
import React from 'react'
import { Layout, Menu } from 'antd';
import Bisec from '../lesson/bisection';
import Falsepo from '../lesson/falseposition';
import ONepoint from '../lesson/onepoint';
import Newton from '../lesson/newtonrap';
import SEcan from '../lesson/secant';
import Cramers from '../lesson/cramerru';
import GaussEli from '../lesson/gausseli';
import GaussJor from '../lesson/gaussjor';
import LUdecom from '../lesson/lude';
import { Route } from "react-router-dom";
import { HashRouter } from 'react-router-dom';
import { Link,Redirect } from "react-router-dom";

const {Content , Sider } = Layout;
const { SubMenu } = Menu;


class La extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  render() {
    const { collapsed } = this.state;
    return (
      <HashRouter>

        <div>
          <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
              <div className="logo" />
              <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <SubMenu key="sub1" title="Root of equations">
                  <Menu.Item key="3">Bisection Method{<Link to='/Bisection'></Link>}</Menu.Item>
                  <Menu.Item key="4">Falseposition Method{<Link to='/FalsePosition'></Link>}</Menu.Item>
                  <Menu.Item key="5">Onepoint Method{<Link to='/Onepoint'></Link>}</Menu.Item>
                  <Menu.Item key="6">Newton Raphson{<Link to='/NewtonRaphson'></Link>}</Menu.Item>
                  <Menu.Item key="8">Secant{<Link to='/Secant'></Link>}</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title="Martrix">
                  <Menu.Item key="9">Cramer's Rule{<Link to='/CramerRule'></Link>}</Menu.Item>
                  <Menu.Item key="10">Gauss Elimination Method{<Link to='/GaussElimination'></Link>}</Menu.Item>
                  <Menu.Item key="11">Gauss Jordan Method{<Link to='/GaussJordan'></Link>}</Menu.Item>
                  <Menu.Item key="8">LU Decomposition Method{<Link to='/LUDecomposition'></Link>}</Menu.Item>

                </SubMenu>
              </Menu>
            </Sider>
            <Layout className="site-layout">
              
             
              <Content >
                <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                  {<Redirect exact from="/" to="/bisection" />}
                  {<Route path='/Bisection' component={Bisec}></Route>}
                  {<Route path= '/Falseposition' component={Falsepo}></Route>}
                  {<Route path= '/Onepoint' component={ONepoint}></Route>}
                  {<Route path= '/NewtonRaphson' component={Newton}></Route>}
                  {<Route path= '/Secant' component={SEcan}></Route>}
                  {<Route path= '/CramerRule' component={Cramers}></Route>}
                  {<Route path= '/GaussElimination' component={GaussEli}></Route>}
                  {<Route path= '/GaussJordan' component={GaussJor}></Route>}
                  {<Route path= '/LUDecomposition' component={LUdecom}></Route>}
                </div>
              </Content>
            </Layout>
          </Layout>
        </div>
      </HashRouter>
    );

  }
}
export default La;
