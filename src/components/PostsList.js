import React from 'react'
import PostCard from  './PostCard'

function PostsList({myPosts}) {
    console.log(myPosts)
    return (
        <>
          
            <table className="table">
                <tbody>
                    <tr id="tableHeaders">
                        
                        <th>Title</th>
                        <th>Details</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>

                    {myPosts.map(post => (

                        <PostCard 
                            title={post.title}
                            id={post.id}
                           
                        />


                    ))}

                    {
                myPosts.map((post)=>{
                    return <li key={post.id}>{post.title}</li>
                })
            }
                </tbody>
            </table>
        </>
    )
}

export default PostsList
