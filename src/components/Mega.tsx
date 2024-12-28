import React from 'react';
import BlogCard from './BlogCard';
import { title  } from 'process';




const Mega = () => {

    const posts =[
        {
            id: "1",
            title: "Html Introduction",
            description: "Explore the Html , Basic , Introduction , Tags  ",
            date: "2024-12-14",
            imageUrl: "/images/blog-1.png",
        },
        {
            id: "2",
            title: "Html Basics",
            description: "Explore the Html , Basic , Introduction , Tags  ",
            date: "2024-12-14",
            imageUrl: "/images/blog-5.png",
        },
        {
            id: "3",
            title: "Html Advance Tags",
            description: "Explore the Html , Basic , Introduction , Tags  ",
            date: "2024-12-14",
            imageUrl: "/images/blog-3.png",
        },
        {
            id: "4",
            title: "Html image tag ",
            description: "Explore the Html, Image tages  , Basic , Introduction , Tags  ",
            date: "2024-12-14",
            imageUrl: "/images/blog-4.png",
        },
        {
            id: "5",
            title: "AOS Animations In Coding",
            description: "Explore the animations by AOS , this is scrolling animation , check and explore now",
            date: "2024-12-14",
            imageUrl: "/images/blog-6.png",
        },
        {
            id: "6",
            title: "Next.JS Props ",
            description: "Explore the Next.js , Basic , Introduction , Daynamic Changes  ",
            date: "2024-12-14",
            imageUrl: "/images/prps.png",
        },
    ]





  return (
    <div  className='my-8'>
        <h1 className='text-3xl font-bold text-center my-8 text-orange-500 animate-color-change'>Learn AI & Exploring Developing Skills With Mr Bheel </h1>

        <div className=' grid grid-cols-1 sm:gride-cols-2 lg:grid-cols-3 gap-8'>
            {posts.map((post, index) => (
                <div className='fade-in' key={post.id}>
                    <div className='blog-card'>
                        <BlogCard post={post} isDarkBackground={index % 1 === 0}/>
                    </div>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Mega;