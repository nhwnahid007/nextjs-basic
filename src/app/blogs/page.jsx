import Link from 'next/link';
import React from 'react';

const BlogsPage = () => {
    return (
        <div>
            <div className=' border-2 border-gray-300 rounded-md p-4'>
                {blogs.map((blog) => (
                    <div key={blog.slug} className='border-2 border-gray-300 rounded-md p-4 my-4'>
                        <h2>{blog.title}</h2>
                        <p>{blog.description}</p>
                        <button className='bg-gray-600 text-white px-4 py-2 rounded-md'><Link href={`/blogs/${blog.slug}`}>View Details</Link></button>
                    </div>
                ))}
            </div>
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


export default BlogsPage;