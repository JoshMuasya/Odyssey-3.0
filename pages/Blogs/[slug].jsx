import imageUrlBuilder from '@sanity/image-url';
import sanityClient from '@sanity/client';
import React, {useState, useEffect} from 'react';
import BlockContent from '@sanity/block-content-to-react';




const Post = ({ title, date, image, body }) => {

    const client = sanityClient({
        projectId: '850mi9gd',
        dataset: 'production',
        apiVersion: '2022-09-10', // use current UTC date - see "specifying API version"!
        token: '', // or leave blank for unauthenticated usage
        useCdn: false, // `false` if you want to ensure fresh data
    })

    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        const imgBuilder = imageUrlBuilder (client);

        setImageUrl(imgBuilder.image(image));
    }, []);
  return (
    <div className='flex flex-col justify-center align-center items-center min-h-fit'>
        <div className='text-brown font-bold font-Quicksand text-xl mt-20 p-5'>
            <h2>
                {title}
            </h2>
        </div>

        <div className='text-m italic text-orange pb-5'>
            <h4>
                {date}
            </h4>
        </div>

        <div className='flex justify-center align-center items-center pb-5'>
            {
                imageUrl &&
                <img src={imageUrl} className='w-80 rounded-xl'/>
            }        
        </div>

        <div className='text-l'>
            <BlockContent blocks={body}/>
        </div>
    </div>
  )
}

export const getServerSideProps = async blogList => {
    const pageSlug = blogList.query.slug;
    
    if (!pageSlug) {
        return {
            notFound: true
        }
    }

    const query = encodeURIComponent(`*[ _type == "post" && slug.current == "${pageSlug}" ]`);
    const url = `https://850mi9gd.api.sanity.io/v1/data/query/production?query=${query}`;

    const result = await fetch(url).then(res => res.json());
    const post = result?.result[0];

    if (!post) {
        return {
            notFound: true
        }
    } else {
        return {
            props: {
                title: post.title,
                date: post.publishedAt,
                image: post.mainImage,
                body: post.body,
            }
        }
    }
};

export default Post