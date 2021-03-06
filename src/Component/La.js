
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
import Conju from '../lesson/conjugate';
import Gaussseidel from '../lesson/gaussseidel';
import Jacobi from '../lesson/jacobi';
import Newtondivide from '../lesson/newtondivide';
import Lagrange from '../lesson/lagrangeRe';
import Spline from '../lesson/spline';
import LinearRe from '../lesson/lineregress';
import Polynomial from '../lesson/polynomial';
import Multiple from '../lesson/multiple';
import { Route } from "react-router-dom";
import { HashRouter } from 'react-router-dom';
import { Link,Redirect } from "react-router-dom";
import Swagersee from './swager'
 

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
                  <Menu.Item key="5">Onepoint Iteration Method{<Link to='/Onepoint'></Link>}</Menu.Item>
                  <Menu.Item key="6">Newton Raphson{<Link to='/NewtonRaphson'></Link>}</Menu.Item>
                  <Menu.Item key="8">Secant{<Link to='/Secant'></Link>}</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title="Martrix">
                  <Menu.Item key="9">Cramer's Rule{<Link to='/CramerRule'></Link>}</Menu.Item>
                  <Menu.Item key="10">Gauss Elimination Method{<Link to='/GaussElimination'></Link>}</Menu.Item>
                  <Menu.Item key="11">Gauss Jordan Method{<Link to='/GaussJordan'></Link>}</Menu.Item>
                  <Menu.Item key="12">LU Decomposition Method{<Link to='/LUDecomposition'></Link>}</Menu.Item>  
                  <Menu.Item key="13">Jacobi Iteration Method{<Link to='/Jacobi'></Link>}</Menu.Item>
                  <Menu.Item key="14">Gauss-Seidel Iteration{<Link to='/Gaunssseicon'></Link>}</Menu.Item>
                  <Menu.Item key="15">Conjugate Gradient Method{<Link to='/Conjugatecon'></Link>}</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" title = "Interpolation">
                  <Menu.Item key="16">Newton's divided-differences {<Link to='/Newtondivide'></Link>}</Menu.Item>
                  <Menu.Item key="17">Lagrange polynomials {<Link to='/Lagrange'></Link>}</Menu.Item>
                  <Menu.Item key="18">Spline interpolation {<Link to='/Spline'></Link>}</Menu.Item>
                </SubMenu>
                <SubMenu key="sub4" title ="Regression">
                  <Menu.Item key="19">Linear Regression{<Link to='/LinearRe'></Link>}</Menu.Item>
                  <Menu.Item key="20">Polynomial Regression {<Link to='/Polynomial'></Link>}</Menu.Item>
                  <Menu.Item key="21">Multiple Linear Regression {<Link to='/Multiple'></Link>}</Menu.Item>
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
                  {<Route path= '/Jacobi' component = {Jacobi}></Route>}
                  {<Route path= '/Gaunssseicon' component ={Gaussseidel}></Route>}
                  {<Route path= '/Conjugatecon' component ={Conju}></Route>}
                  {<Route path='/Newtondivide' component={Newtondivide}></Route>}
                  {<Route path ='/Lagrange' component={Lagrange}></Route>}
                  {<Route path ='/Spline' component={Spline}></Route>}
                  {<Route path ='/LinearRe' component={LinearRe}></Route>}
                  {<Route path ='/Polynomial' component={Polynomial}></Route>}
                  {<Route path ='/Multiple' component={Multiple}></Route>}
                  {<Route path ='/Swager' component={Swagersee}></Route>}
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
