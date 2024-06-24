import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Button, Container, PostCard} from '../components'
import { Login as loginComponent } from '../components'
import { Link, Navigate, useNavigate } from 'react-router-dom';

function Home() {
    const [posts, setPosts] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
  
    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap justify-center">
                        <div className="p-2 w-full min-h-[440px]">
                        <div className="w-full mb-10">
                            <h1 className="text-2xl leading-normal sm:text-3xl sm:leading-relaxed md:text-4xl md:leading-loose lg:text-5xl lg:leading-relaxed">
                                &quot;Share your thoughts with the world – start <span className="underline">blogging</span> today&quot;!
                            </h1>
                        </div>
                            
                            <Link
                            to="/login"
                            >
                                <button
                                className="text-xl hover:text-gray-300 bg-black text-white rounded-lg px-4 py-2">
                                    CREATE YOUR BLOG
                                </button>
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    
    return (
        <div className='w-full min-h-screen py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home