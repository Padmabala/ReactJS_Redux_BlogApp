import React,{Component} from 'react';
import fetchData from '../../services/fetchData';
import { GET_AUTHORS_BY_NAME_API } from '../../constants/serverUrls';

class AuthorsList extends Component{
    state={
    id:"",
    title:"",
    content:"",
    author:"",
    }
    componentDidMount(){
        
        const {match={}}=this.props;
        const {params={}}=match;
        const {authorName: name=""}=params;
        //debugger;
        fetchData(GET_AUTHORS_BY_NAME_API.replace(":name",name))
        .then(data=>{
           // console.log(data);
            data.map((data=>
            this.setState({
                id:data.id,
                title:data.title,
                content:data.content,
                author:data.author,
            })
            ));
        })
        .catch(error=>{
            console.log(error);
        })
        
    }
render(){
    const {
        id="",
        title="",
        content="",
        author="",
    }=this.state;
    return(
        <div className={`post-container container`}>               
         <h1>{author}</h1>
         <p>{title}</p>
         <p>{content}</p>
        </div>
    )
};
}

export default AuthorsList;