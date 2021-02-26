import React from 'react'
import { getOnePost } from '../services/getOnePost'


function PostDetails(props) {
    console.log(getOnePost(props.name))
    return (
        <div>

        </div>
    )
}

export default PostDetails
