import React from 'react';
import RenderPost from './RenderPost';

const ListarPost = (props) => {
    return (
        <div>
            {props.post.map((tweet) => <RenderPost key={tweet.postlist} post = {tweet}/>)}
        </div>        
    )        
}

export default ListarPost;