import React,{Component} from 'react';
import {
  Collapse, 
  Navbar, 
  NavbarToggler, 
  Nav, 
  NavItem
} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Route,NavLink
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { deepMerge } from 'jest-snapshot/build/utils';
import routes from './routes/routes';
import Home from './Pages/Home/home';
import Authors from './Pages/Authors/authors';


class App extends Component {
  state={
    isNavbarOpen:false,
  };
  toggleNavBar=(event)=>{
 
          this.setState(
          {isNavbarOpen:!this.state.isNavbarOpen});
  }
  render() {
    const {isNavbarOpen}=this.state;
    return (
      <div>
        <Navbar color="faded" light toggleable>
        <NavbarToggler right onClick={this.toggleNavBar}/>
          <a className="navbar-brand" href={"home"}>Blog</a>
          <Collapse isOpen={isNavbarOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="nav-link" activeClassName="active" to={routes.home}>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" activeClassName="active" to={routes.authors}>Authors</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" activeClassName="active" to={routes.post}>New Post</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        
      <Route path={routes.home} component={Home}/>
      <Route path={routes.authors} component={Authors}/>
      <Route path={routes.author} component={Authors}/>
      
      </div>
    )
  }
}

export default App;
