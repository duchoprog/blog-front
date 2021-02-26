import React from 'react'
import PostCard from './PostCard'

function PostsList({ myPosts }) {
    console.log(myPosts)
    return (
        <>

            <div className="div">


                {myPosts.map(post => (

                    <PostCard
                        title={post.title}
                        id={post.id}
                        key={post.id}

                    />


                ))}


            </div>
        </>
    )
}

export default PostsList
