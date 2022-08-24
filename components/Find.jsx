import React from 'react'

const Find = () => {
  return (
    <div className='flex flex-row justify-center align-center '>
        <form className='flex flex-col justify-center align-center '  
        action="/send-data-here" 
        method="post">
            <label for="first">First name:</label>
            <input type="text" id="first" name="first" />
            <label for="last">Last name:</label>
            <input type="text" id="last" name="last" />
            <button type="submit">Submit</button>
        </form>

        <div>
            Map
        </div>
    </div>
  )
}

export default Find