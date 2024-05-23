import {Link} from 'react-router-dom'

function Hero() {
    return (
        <div className='rounded-lg border-2 mt-4'>
            <div className="hero  bg-base-200">
                <div className="hero-content flex-col gap-4 lg:flex-row-reverse">
                    <img  src="/public/images/banner.jpg" className="max-w-sm max-h-56 rounded-lg shadow-2xl" />
                    <div className=''>
                        <h1 className=" mb-10 text-4xl font-bold">Books to Freshen up your soul and mind</h1>
                        <Link to='/booklist' className='btn btn-secondary'>View the list</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
