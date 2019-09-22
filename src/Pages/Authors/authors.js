import React,{Component} from 'react';
import fetchData from '../../services/fetchData';
import { GET_AUTHORS_API } from '../../constants/serverUrls';
import AuthorsList from '../AuthorsList/AuthorsList';
import {
    NavLink
  } from 'react-router-dom';
import routes from '../../routes/routes';
class Authors extends Component{
    state={
        authors:[]
    };
    componentDidMount(){
        this.loadAuthors();
    }
    loadAuthors=async()=>{
        try{
        const authors=await fetchData(GET_AUTHORS_API,"GET");
        this.setState({authors});
        //console.log(authors);
        }
        catch(e){
            console.log(e);
        }
    }
    render(){
        const {authors}=this.state;
        return(
                authors.map((author)=>{
                    return(
                        <NavLink to={routes.author.replace(":authorName",author)}>
                        {author}
                        </NavLink>
                    )
                })
        )
    };
}

export default Authors;