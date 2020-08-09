import React,{Component} from 'react';
import fetchData from '../../services/fetchData';
import { GET_POSTS_API } from "../../constants/serverUrls";
import PostSummary from '../../CommonComponents/PostSummary';
import LoadingIndicator from '../../CommonComponents/LoadingIndicator';
//import ErrorBoundaryV1 from '../../HigherOrderComponents/ErrorBoundaryV1';
import ErrorBoundaryV2 from '../../HigherOrderComponents/ErrorBoundaryV2';
import {connect} from 'react-redux';
import ErrorScreen from '../ErrorScreen/ErrorScreen';


class Home extends Component{
   /*  state={
        posts:this.props,
    } */
     componentDidMount()
    {
        //fetchData(GET_POSTS_API,"GET");
       // this.props.loadPostData();
    }
    /*loadPostData=async()=>{
        try{
            const posts=await fetchData(GET_POSTS_API,"GET");
            this.setState({posts})
            console.log(posts);
        }
        catch(e){
            console.log(e);
        }
    } */
    //map function has 3 args..2nd arg is the index of the array element
    //no if inside jsx..so we have ternary conditional operator...coz if can resolve itseld unlike if stamtnt
    render(){
        //undefined.fun(); --> This error is handled with HOC->ErrorBoundaryV2
        //const {posts}=this.state;
        const { posts, isLoading, hasError } = this.props;
        return (
            <div>
                
                {
                    isLoading
                        ?<LoadingIndicator/>
                        :null
                }
                {
                    hasError
                        ?<ErrorScreen/>
                        :null
                }
                {
                    posts.map((post, postIndex) => {
                        return (
                            <PostSummary
                                id={post.id}
                                key={postIndex}
                                title={post.title}
                                content={post.content}
                                author={post.author}
                            />
                        )
                    })
                }
            </div> 
                   
                
            
          //  </ErrorBoundaryV1>
        )
    };
}
//gets data from the store into react components
//helpers..state param is the enture redux object
//state param below is same as store passed from index.js
const  mapStateToProps=state=>{
    
    return {
        
        posts:state.posts,        
        isLoading: state.ajaxCalls.getAllPosts.loading,
        hasError: state.ajaxCalls.getAllPosts.hasError
        //name:pb
    };
};
//gets actions created to the react components
/*const mapDispatchToProps=dispatch=>{
    return {
        loadPostData:bindActionCreators(getAllPosts,dispatch)
    };
};*/
//the below will return connect hoc
const connectHOC =connect(
    mapStateToProps,//necessary
    //mapDispatchToProps//optional
); 
export default connectHOC(ErrorBoundaryV2(Home));//HOC
//export default ErrorBoundaryV2(Home);//HOC


/*
traditional HOC
function(ReactComponent){
    return ImprovedReactComponent;
}

Connect HOC
function(function1,function2){
    return function(ReactComponent){
        return ImprovedReactComponent;
    }
}

so this will not work export default connect(ErrorBoundaryV2(Home));//HOC


so we have
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ErrorBoundaryV2(Home));//HOC
*/