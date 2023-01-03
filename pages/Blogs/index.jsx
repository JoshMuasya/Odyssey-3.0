import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import imageUrlBuilder from '@sanity/image-url';
import sanityClient from '@sanity/client';
import { useNextSanityImage } from 'next-sanity-image';

const index = ({ blogs }) => {

    const client = sanityClient({
        projectId: '850mi9gd',
        dataset: 'production',
        apiVersion: '2022-09-10', // use current UTC date - see "specifying API version"!
        token: '', // or leave blank for unauthenticated usage
        useCdn: false, // `false` if you want to ensure fresh data
    });

    // const [imageUrl, setImageUrl] = useState('');

    // useEffect(() => {
    //     const imgBuilder = imageUrlBuilder (client);

    //     setImageUrl(imgBuilder.image(img));
    // }, []);

  return (
    <div className='flex flex-col justify-center align-center items-center m-10 min-h-fit'>
        <div className='text-brown font-bold font-Quicksand text-xl mt-20 p-5'>
            <h3>
                Our stories in just a few lines
            </h3>
        </div>

        <div className='text-m italic text-orange pb-5'>
            <h4>
                Blogs List
            </h4>
        </div>

        <div>
            <ul>
                {blogs.map(post => {
                    console.log(post.mainImage.asset._ref)
 
                    return (
                        <li key={post._id}>
                            <h3>
                                { post.title }
                            </h3>
                            
                            
                            <img src={ post.mainImage.asset._ref } 
                            alt=""
                            width="100%"
                            />
                        </li>
                    )
                }                        
                )}
                {/* <Link href='{`/blog/`}'>
                    <li key={title._id}>
                        <h4>
                            {title}
                        </h4>
                    </li>
                </Link> */}
            </ul>
        </div>
    </div>
  )
}

export const getServerSideProps = async blogList => {
    const query = encodeURIComponent(`*[_type == "post"]`)
    const url = `https://850mi9gd.api.sanity.io/v1/data/query/production?query=${query}`;

    const result = await fetch(url).then(res => res.json());
    const blogs = result.result;
    return {
        props: {
            blogs
        }
    }
    
    
    // let slug = blogs.map(function(element) {
    //     return `${element.slug.current}`;
    // });

    // let image = blogs.map(function(element) {
    //     return `${element.mainImage.asset._ref}`;
    // });
    
    // return{
    //     props: {
    //         title: blogTitle,
    //         link: slug,
    //         img: image,
    //     }
    // }
};

export default index;