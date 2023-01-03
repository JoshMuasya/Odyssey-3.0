import React from 'react';

const About = () => {
  return (
    <div id='about' 
    className=' flex flex-col justify-center pt-10 mb-1 align-center
    lg:flex-row'>
        <div className='flex flex-col just-center items-center align-center'>
            <h3 className='font-bold font-Quicksand text-center text-brown text-l
            md:text-lg'>
                About Us
            </h3>
            <p className='font-Quicksand text-brown text-s text-center pb-5
            md:text-m'>
                Odyssey Africa Hikes is an experienced tours <br />
                and travel company that believes in Quality, <br />
                Trust, Passion, and Experience. <br />
                We work closely with our clients to manage all <br />
                the elements of their travel and tours in an <br />
                efficient, cost effective and ethical manner. <br />
            </p>

            <h3 className='font-bold font-Quicksand text-center text-brown text-l
            md:text-lg'>
                Our Mission Statement
            </h3>

            <p className='font-Quicksand text-brown text-s text-center pb-5
            md:text-m'>
                At Odyssey Africa Hikes, <br />
                we strive to provide a professional service <br />
                to our clients by providing touristic service <br />
                in new, s,art and exiciting ways.
            </p>
        </div>
        <div className='flex flex-col align-center justify-center items-center p-5'>
            <h3 className='font-bold font-Quicksand text-center text-brown text-lg
            md:text-xl
            lg:text-lg'>
                Our Values
            </h3>

            <div className='flex flex-col align-center justify-center items-center
            lg:flex-row'> 
                <div className='flex flex-col align-center justify-center items-center'>           
                    <h4 className='font-bold font-Quicksand text-center text-borange text-m
                    md:text-l
                    lg:text-m'>
                        People
                    </h4>
                    <p className='font-Quicksand text-brown text-s p-5 text-center
                    md:text-m
                    lg:text-s'>
                        People are the main reason <br />
                        why we do what we do. <br />
                        So as they can bring home <br />
                        unforgettable memories, <br />
                        we inverst the best xpertise. <br />
                        Our services are sincere and <br />
                        comes from our heart to touch yours.
                    </p>
                </div>

                <div className='flex flex-col align-center justify-center items-center'>
                    <h4 className='font-bold font-Quicksand text-center text-borange text-m
                    md:text-l
                    lg:text-m'>
                        Passion
                    </h4>
                    <p className='font-Quicksand text-brown text-s p-5 text-center
                    md:text-m
                    lg:text-s'>
                        To give our travelers <br />
                        the best experience, <br />
                        We do our work with passion. <br />
                        We have the zeal <br />
                        to create unique experiences, <br />
                        show animals at their natural <br />
                        habitat and the authentic <br />
                        part of nature.
                    </p>
                </div>
            </div>

            <div className='flex flex-col align-center justify-center items-center
            lg:flex-row'>
                <div className='flex flex-col align-center justify-center items-center'>
                    <h4 className='font-bold font-Quicksand text-center text-borange text-m
                    md:text-l
                    lg:text-m'>
                        Commitment
                    </h4>
                    <p className='font-Quicksand text-brown text-s text-center p-5
                    md:text-m
                    lg:text-s'>
                        To give our travelers <br />
                        the best experince, <br />
                        We do our work with passion. <br />
                        We have the zeal <br />
                        to create unique experiences, <br />
                        show animals at their natural <br />
                        habitat and the authentic <br />
                        part of nature.
                    </p>
                </div>

                <div className='flex flex-col align-center justify-center items-center'>
                    <h4 className='font-bold font-Quicksand text-center text-borange text-m
                    md:text-l
                    lg:text-m'>
                        Transparency
                    </h4>
                    <p className='font-Quicksand text-brown text-s p-5 text-center
                    md:text-m
                    lg:text-s'>
                        We believe in <br />
                        openness, honesty, and courtesy <br />
                        while working with our clients. 
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About