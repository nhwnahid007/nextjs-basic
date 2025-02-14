import React from 'react';

const page = ({params}) => {
    console.log(params)
    console.log(blogs)
    const {title,description} = blogs.find((blog) => blog.slug === params.slug)
    return (
        <div className=' flex flex-col items-center justify-center border-2 border-gray-300 rounded-md p-4'> 
           <p className='text-2xl font-bold'> Details of the blog of "{title}"</p>
            <p className='text-lg'>{description}</p>
        </div>
    );
};

const blogs = [
    {
      slug: 'introduction-to-nextjs',
      title: 'Introduction to Next.js',
      description: 'Learn the basics of Next.js and how to get started with it.'
    },
    {
      slug: 'building-a-blog-with-nextjs',
      title: 'Building a Blog with Next.js',
      description: 'A step-by-step guide to building a blog using Next.js.'
    },
    {
      slug: 'optimizing-nextjs-performance',
      title: 'Optimizing Next.js Performance',
      description: 'Tips and tricks to optimize the performance of your Next.js applications.'
    }
  ];

export default page;