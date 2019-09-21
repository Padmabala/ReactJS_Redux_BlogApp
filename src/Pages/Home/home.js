import React,{Component} from 'react';
import fetchData from '../../services/fetchData';
import { GET_POSTS_API } from "../../constants/serverUrls";
import PostSummary from '../../CommonComponents/PostSummary';
class Home extends Component{
    state={
        posts:[],
    }
    componentDidMount()
    {
        //fetchData(GET_POSTS_API,"GET");
        this.loadPostData();
    }
    loadPostData=async()=>{
        try{
            const posts=await fetchData(GET_POSTS_API,"GET");
            this.setState({posts})
            console.log(posts);
        }
        catch(e){
            console.log(e);
        }
    }
    //map function has 3 args..2nd arg is the index of the array element
    render(){
        const {posts}=this.state;
        return(
            <div>           
                {posts.map((post,postIndex)=>{
                return(
                    <PostSummary
                    key={postIndex}
                    id={post.id}
                    title={post.title}
                    content={post.content}
                    author={post.author}
                />
                )
            })}
            </div>
        )
    };
}

export default Home;