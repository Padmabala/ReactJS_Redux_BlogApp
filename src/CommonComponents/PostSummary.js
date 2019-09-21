import React from 'react';
import PropTypes from 'prop-types';
import {
    Route,NavLink
  } from 'react-router-dom';
import routes from '../routes/routes';
import { WSA_E_NO_MORE } from 'constants';
const PostSummary=({
    id,
    author,
    content,
    title,
    dateTime
})=>{
    //const post=this.props;
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
};
PostSummary.propTypes={
    id:PropTypes.string.isRequired,
    author:PropTypes.string.isRequired,
    content:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    dateTime:PropTypes.string.isRequired,
}
export default PostSummary;