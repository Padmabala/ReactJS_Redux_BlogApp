import React,{Component} from 'react';
import {
  Collapse, 
  Navbar, 
  NavbarToggler, 
  Nav, 
  NavItem,
} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Route,NavLink,withRouter
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import routes from './routes/routes';
import Home from './Pages/Home/home';
import Authors from './Pages/Authors/authors';
import Post from './Pages/Post/Post';
import AuthorDetail from './Pages/AuthorDetail/AuthorDetail';
import NewPost from './Pages/NewPost/NewPost';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { getAllPosts } from './redux/actions/postActions';
import CountdownTimer from 'set_countdown_timer';


class App extends Component {
  state={
    isNavbarOpen:false,
  };
  toggleNavBar=(event)=>{
 
          this.setState(
          {isNavbarOpen:!this.state.isNavbarOpen});
  }

  componentDidMount(){    
    const{history,location,loadPostData}=this.props;
    loadPostData();
    if(location.pathname==='/'){
      history.push(routes.home);
    }
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
                <NavLink className="nav-link" activeClassName="active" to={routes.newPost}>New Post</NavLink>
              </NavItem>
              
            </Nav>
          </Collapse>
        </Navbar>
        <span align="center"><CountdownTimer/></span>
        
      <Route path={routes.home} component={Home}/>
      <Route path={routes.authors} component={Authors}/>
      <Route path={routes.author} component={AuthorDetail}/>
      <Route path={routes.post} component={Post}/>
      <Route path={routes.newPost} component={NewPost}/>

      

      </div>
    )
  }
}
const mapStateToProps=()=>{
  return{};
}

const mapDispatchToProps=dispatch=>{
  return{
  loadPostData:bindActionCreators(getAllPosts,dispatch)
}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));


