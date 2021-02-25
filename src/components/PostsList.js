import React from 'react'
import PostCard from  './PostCard'

function PostsList({myPosts}) {
    console.log(myPosts)
    return (
        <>
          
            <div className="div">
                

                    {myPosts.map(post => (

                        <PostCard 
                            title={post.title}
                            id={post.id}
                           
                        />


                    ))}

            {/*         {
                myPosts.map((post)=>{
                    return <li key={post.id}>{post.title}</li>
                })
            } */}
                
            </div>
        </>
    )
}

export default PostsList
