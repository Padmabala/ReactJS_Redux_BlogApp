import React from 'react';
import PropTypes from 'prop-types';
import {
    Route,NavLink
  } from 'react-router-dom';
import routes from '../routes/routes';
import ErrorScreen from '../Pages/ErrorScreen/ErrorScreen';
const PostSummary=({
    id,
    author,
    content,
    title,
    dateTime
})=>{
    
    //const post=this.props;
    
    //undefined.func();
    try{
        //undefined.func(); --- this will be caught by the try catch 
    return(
        <div className={`post-container container`}>                
          <h1>{title}</h1>
          <p>{author}</p>
          <p>{content}</p>
          <NavLink className={`btn btn-primary`} to={routes.post.replace(":id",id)}>
          Read MORE
          </NavLink>
        </div>
    )
        }
        catch(e){
            return <ErrorScreen text={"Error while page load"}/>
        }
};
PostSummary.propTypes={
    id:PropTypes.string.isRequired,
    author:PropTypes.string.isRequired,
    content:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    dateTime:PropTypes.string.isRequired,
}
export default PostSummary;