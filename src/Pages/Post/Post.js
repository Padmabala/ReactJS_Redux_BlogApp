import React,{Component,Fragment} from 'react'
import fetchData from '../../services/fetchData';
import { GET_POST_BY_ID_Api } from '../../constants/serverUrls';
import PostSummary from '../../CommonComponents/PostSummary';
import LoadingIndicator from '../../CommonComponents/LoadingIndicator';
import ErrorBoundaryV2 from '../../HigherOrderComponents/ErrorBoundaryV2';

class Post extends Component{
    
state={
    id:"",
    title:"",
    content:"",
    author:"",

}
_timeoutReference;

componentDidMount(){
    const {match={}}=this.props;
    const {params={}}=match;
    const {id: postId =""}=params;
    fetchData(GET_POST_BY_ID_Api.replace(":id",postId))
    .then(data=>{
        this.setState({
            id:data.id,
            title:data.title,
            author:data.author,
            content:data.content,
        })
        console.log(data);
    })
    .catch(error=>{
        console.log(error);
    });
 this.startPopUpTimer();   
}

startPopUpTimer = () => {
    this._timeoutReference = setTimeout(() => {
      alert("Subscribe to our news letter!");
    }, 10000);
};
//to be able to clear the scope of timers
componentWillUnmount(){
    this.clearPopUpTimer();
}
//componentDidUpdate ->called eveytime set state is called
clearPopUpTimer=()=>{
    clearTimeout(this._timeoutReference);
}
    render(){
        const {
            id="",
            title="",
            content="",
            author="",
        }=this.state;
        return(
            //console.log(this.state);
             //not a good way to destructure state {...this.state} as a prop to PostSummary
            <Fragment>
                {
                    id
                    ?
                    <PostSummary 
                    id={id} 
                    author={author} 
                    content={content} 
                    title={title}/>
                    :
                    <LoadingIndicator/>
                
                }        
            </Fragment>
        )
    };
}
export default ErrorBoundaryV2(Post);