import React from 'react'
import CommentSection from '@/components/CommentSection';
import AuthoreCard from '@/components/AuthoreCard';
import Image from 'next/image';



 const posts =[
        {
            id: "1",
            title: "Html Introduction",
            description: "Explore the Html , Basic , Introduction , Tags  ",
            image: "/images/blog-1.png",
        },
        {
            id: "2",
            title: "Html Basics",
            description: "Explore the Html , Basic , Introduction , Tags  ",
            image: "/images/blog-5.png",
        },
        {
            id: "3",
            title: "Html Advance Tags",
            description: "Explore the Html , Basic , Introduction , Tags  ",
            image: "/images/blog-3.png",
        },
        {
            id: "4",
            title: "Html image tag ",
            description: "Explore the Html , Basic , Introduction , Tags  ",
            image: "/images/blog-4.png",
        },
        {
            id: "5",
            title: "AOS Animations use in Programing",
            description: "Explore the Html , Basic , Introduction , Tags  ",
            image: "/images/blog-6.png",
        },
        {
            id: "6",
            title: "Html video tag",
            description: "Explore the Html , Basic , Introduction , Tags  ",
            image: "/images/prps.png",
        },
    ];



export default function Post ({ params }: {params: {id: string}}){
  const { id } = params;
  const post = posts.find((p) => p.id === id);

  if (!post){
    return(
      <h2 className='text-2xl font-bold text-center mt-10'>Post Not Found</h2>
    );
  }


  const renderParagraphs = (description: string) =>{
    return description.split("/n").map((para, index) => (
      
      <p key={index} className='mt-4 text-justify'>
        {para.trim()}
      </p>

    ));
  };

  return(
    <div className='max-w-3xl mx-auto p-5 bg-gray-100'>
      {post.image && (
        <Image
        src={post.image}
        width={400}
        height={100}
        alt={post.title}
        className='w-full h-auto rounded-md mt-4'
        />
      )}
      <h1 className='md:text-4xl md:text-left mt-4 text-3xl font-bold text-blue-900 text-center'>
        {post.title}
      </h1>

      
  <div className='mt-6 text-lg text-slate-700'>
    {renderParagraphs(post.description)}    
  </div>     
       <CommentSection postId={post.id}/>
       <AuthoreCard/>
       
    </div>
  );
};