import React from 'react'

function PostCard(props) {
    return (
        <div className="container bg-success postcard">
            <div class="row">
                <div class="col-sm-2">
                    {props.id}
                </div>
                <div class="col-sm-10 ">
                {props.title}
                </div>
    
            </div>
            
        </div>
    )
}

export default PostCard
