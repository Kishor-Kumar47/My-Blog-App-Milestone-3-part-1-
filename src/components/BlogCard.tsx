import React from "react";
import { Card, CardContent, CardTitle } from "../components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  post: {
    id: string;
    title: string;
    description: string;
    date: string;
    imageUrl: string;
  };
  isDarkBackground: boolean;
}

const BlogCard = ({ post, isDarkBackground }: BlogCardProps) => {
  return (
    <Card
    id='#blog' 
      className={`p-4 ${
        isDarkBackground ? "bg-slate-800 text-white" : "text-slate-800"
      } rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300  `}
    >
      <Image
        className="w-full h-48 object-cover rounded-t-lg"
        src={post.imageUrl}
        width={300}
        height={30}
        alt={post.title}
      />

      <CardTitle className="text-xl font-normal mt-4 text-center">
        {post.title}
      </CardTitle>
      <br />
      <CardContent className="text-center">
        <p> {post.description} </p>
      </CardContent>

      <div className="flex flex-col items-center mt-4">
        <p
          className={`text-sm mb-2 ${
            isDarkBackground ? "text-slate-400" : "text-slate-600"
          }`}
        >
          {/* Published on: {new.date(post.date).toLocalDateString()} */}
        </p>

        <Link
          href={`/posts/${post.id}`}
          className={` w-full text-center px-6 py-1 text-white bg-blue-600 rounded hover:bg-blue-500 ${
            isDarkBackground
              ? "bg-black hover:bg-red-500 "
              : "bg-black hover:bg-red-500"
          } `}
        >
          Read More
        </Link>
      </div>
    </Card>
  );
};

export default BlogCard;
