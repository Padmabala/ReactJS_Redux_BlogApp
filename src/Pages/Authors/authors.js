import React,{Component} from 'react';
import { GET_AUTHORS_API } from '../../constants/serverUrls';
import {
    NavLink
  } from 'react-router-dom';
import routes from '../../routes/routes';
import xmlHTTPRequestData from '../../services/xmlHTTPRequestData';
import AuthorSummary from '../../CommonComponents/AuthorSummary';
import LoadingIndicator from '../../CommonComponents/LoadingIndicator';
import ErrorBoundaryV2 from '../../HigherOrderComponents/ErrorBoundaryV2';
class Authors extends Component{
    state={
        authors:[]
    };
    componentDidMount(){
        this.loadAuthors();
    }
    loadAuthors=async()=>{
        try{
        const authors=await xmlHTTPRequestData(GET_AUTHORS_API,"GET");
        this.setState({authors});
        //console.log(authors);
        }
        catch(e){
            console.log(e);
        }
    }
    render(){
        
    //undefined.function();
        const {authors}=this.state;        
        return(
            <div>
            {
                authors.length
                ?                
                authors.map((author)=>{
                    return(
                        
                            <AuthorSummary author={author}/>
                        
                    )
                })
            :
            <LoadingIndicator/>
            }
            </div>
        )
    };
}

export default ErrorBoundaryV2(Authors);