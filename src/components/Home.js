import React, { useEffect, useState } from 'react'
import { GetAllPosts } from '../services/GetAllPosts'
import PostsList from  './PostsList'


function Home() {
    
    const [posts, setPosts] = useState([])
    useEffect(() => {
        GetAllPosts()
        
       
       
    }, [])

    return (
        <div className='home'>
            <h1>Home</h1>

            <div>
               222 
            </div>


            <ul>
        


            </ul>

            <PostsList myPosts={posts} />



        </div>
    )
}

export default Home
