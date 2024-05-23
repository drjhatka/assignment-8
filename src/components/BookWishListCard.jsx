import { MdOutlineEditLocation } from "react-icons/md";
import {  SiPowerpages } from "react-icons/si";
import { FiUsers } from "react-icons/fi";
import{Link} from 'react-router-dom'
function BookWishListCard({book}) {
    return (
        <div>
            <div className='flex mb-4 bg-base-300 gap-10 border-2 px-2 py-4 rounded-lg'>
            <div><img src={'.'+book.image} className="max-w-40 min-h-56" alt="" /></div>
            <div className="flex flex-col gap-5">
                <div className="font-semibold text-2xl">{book.bookName}</div>
                <div>By: {book.author}</div>
                <div className="flex gap-6">
                    <h1 className="font-bold">Tags</h1>
                    {
                        book.tags.map(tag=>{
                            return<>
                                <div key={Math.random()*100} className="text-white font-semibold py-4 px-3 badge badge-success gap-2">
                                    # {tag}
                                </div>
                                </>
                            
                        })
                    }
                    <h1 className="font-semibold flex items-center justify-center gap-4"><MdOutlineEditLocation className="text-lg text-red-700" /> Year of Publishing: {book.yearOfPublishing}</h1>
                </div>
                <div className="flex gap-10 items-center ga">
                <FiUsers/ ><h1>Publisher:</h1> <h1>{book.publisher}</h1><div className="flex items-center justify-center gap-3 font-semibold"><SiPowerpages/><h1> Page : {book.totalPages}</h1></div>
                </div>
                <div className="flex items-center gap-6">
                    <div className="badge badge-warning gap-2">
                        Category: {book.category}
                    </div>
                    <div className="badge badge-warning gap-2">
                        Rating: {book.rating}
                    </div>
                    <div className="flex">
                    <Link className="btn btn-success text-white" to={'/book-details/'+book.bookId} >
                        View Details
                    </Link>
                </div>
                </div>
            </div>

        </div>
        </div>
    )
}

export default BookWishListCard