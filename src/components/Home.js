import React, { useEffect, useState } from 'react'
import { getAllPosts } from '../services/getAllPosts'
import PostsList from './PostsList'


function Home() {

    const [posts, setPosts] = useState([])
    useEffect(() => {
        getAllPosts().then((res) => {
            setPosts(res)
            console.log(posts)
        }).catch((err) => {
            console.log(err)
        })



    }, [])

    return (
        <div className='home'>
            <h1>Home</h1>

            <div>

            </div>


            <ul>



            </ul>

            <PostsList myPosts={posts} />



        </div>
    )
}

export default Home
