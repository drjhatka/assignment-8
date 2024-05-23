import React from 'react'
import {Link} from 'react-router-dom'
function ErrorPage() {
    return (
        <div className='flex mt-10 flex-col gap-12 justify-center items-center'>
            <h1 className='text-red-700 text-5xl font-bold'>Sorry The requested page is unavailable</h1>
            <img width={450} src="/public/images/error.jpg" alt="" />
            <Link className='btn btn-warning text-white' to='/'>Back to Home</Link>
        </div>
    )
}

export default ErrorPage
