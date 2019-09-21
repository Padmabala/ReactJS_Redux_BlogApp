import React from 'react';
import PropTypes from 'prop-types';
const PostSummary=({
    id,
    author,
    content,
    title,
    dateTime
})=>{
    //const post=this.props;
    return(
        <div>                
          <div>{title}</div>
          <p>{author}</p>
          <p>{content}</p>
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