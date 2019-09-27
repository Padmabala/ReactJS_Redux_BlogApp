import React,{Component} from 'react';
import fetchData from '../../services/fetchData';
import { GET_AUTHORS_BY_NAME_API } from '../../constants/serverUrls';
import AuthorSummary from '../../CommonComponents/AuthorSummary';
import LoadingIndicator from '../../CommonComponents/LoadingIndicator';
import ErrorBoundaryV2 from '../../HigherOrderComponents/ErrorBoundaryV2';

class AuthorDetail extends Component{
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
        <div>
            {
                author.length!==0
            ?
            <AuthorSummary
        id={id}
        author={author}
        title={title}
        content={content}
        />
        :
        <LoadingIndicator/>
            }
        </div>
    )
};
}

export default ErrorBoundaryV2(AuthorDetail);