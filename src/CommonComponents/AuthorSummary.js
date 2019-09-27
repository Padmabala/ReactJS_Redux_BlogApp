import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import routes from '../routes/routes';
const AuthorSummary=({
    id,
    title,
    content,
    author,
})=>{
    //undefined.function();
    return(
        
        <div className={`post-container container`}>                
          <h1>{title}</h1>
          <NavLink to={routes.author.replace(":authorName",author)}>
          <p>{author}</p>
          </NavLink>          
          <p>{content}</p>
        </div>
    );
};  
AuthorSummary.propTypes={
id:PropTypes.string,
title:PropTypes.string,
content:PropTypes.string,
author:PropTypes.string
}
export default AuthorSummary;
