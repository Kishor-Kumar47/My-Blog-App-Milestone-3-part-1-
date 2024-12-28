import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLinkedin, FaGithub  } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";

const AuthoreCard = () => {
  return (
    <div className="bg-gray-100 shadow-lg rounded-lg p-6 mt-12">
      <div className="flex items-center animation-fadeIn">
        <Image
          className="w-16 h-16 rounded-full mr-4 object-cover "
          src={"/images/profile.jpg"}
          width={64}
          height={64}
          alt="author-img"
        />
        <div>
          <h3 className="text-xl font-bold">Kishor Kumar</h3>
          <p className="text-slate-500">Web Developer | SEO Expert </p>
        </div>
      </div>



      <p className="mt-4 text-black leading-relaxed">
         Kishor Kumar Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dolorem? dolor sit amet consectetur adipisicing elit. Iure dolorem
      </p>

      <div className="mt-4 flex space-x-3">
        <Link target="blank" href={'https://www.linkedin.com/in/kishor-kumar-358246271/'}
        // className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-600 transition duration-300"
        >
          <span className=" text-3xl text-sky-950 hover:text-sky-600">
            <FaLinkedin/>
          </span>
         
          
        </Link>
        <Link target="blank" href={'https://github.com/Kishor-Kumar47'}
        // className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-600 transition duration-300"
        >
          <span className=" text-3xl text-sky-950 hover:text-sky-900">
            <FaGithub />
          </span>
         
          
        </Link>

        <Link href={'#'}
        // className="px-2  text-white bg-sky-950 rounded-md hover:bg-green-700 transition duration-300"
        >
          <span className=" text-3xl text-sky-950 hover:text-green-600">
            <TbBrandFiverr/>
            
          </span>
         
      
        </Link>
        
      </div>

    </div>
  );
};

export default AuthoreCard;
