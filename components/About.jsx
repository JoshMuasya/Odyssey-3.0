import React from 'react'

const About = () => {
  return (
    // Background 
    <div className='flex items-center justify-center h-screen mb-12 bg-dbrown'>
       <div className='flex flex-row justify-center content-between align-center'>
        <div>
            {/* Overlay  */}
            <div className='absolute left-0 right-0 bg-brown/70 z-[2]'/>

            <div>
                <h3>Left</h3>
            </div>
        </div>
        <div>
            {/* Overlay  */}
            <div />

            <div>
                <h3>Right</h3>  
            </div>
        </div>
       </div>
    </div>
  )
}

export default About