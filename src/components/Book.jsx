import { useNavigate} from 'react-router-dom'
import { FaRegStar } from "react-icons/fa";
function Book({book, listHandler}) {
    const {bookId,image,bookName, author, tags} = book;
    const navigateTo = useNavigate()
    return (
        <div onClick={()=>{ navigateTo(`/book-details/${bookId}`)}} className='bg-base-100 cursor-pointer px-2 py-4 rounded-lg border-2 flex flex-col gap-6'>
            <div className='flex justify-center' >
                <img className='rounded-lg max-h-40 max-w-60 ' src={image} alt="" />
            </div>
            <div className='flex gap-4 justify-center '>
                {
                    tags.map((tag,index) =>{
                        return <div key={index} className="badge badge-accent py-3 px-4 text-yellow-800 font-semibold">{tag}</div>
                    })
                }
            </div>
            <div>
                <h1 className=' w-full px-2 text-2xl font-semibold '>{book.bookName}</h1>
            </div>
            <div className='flex px-2'>
                <h1>By : {book.author}</h1>
            </div>
            <div className='flex justify-between items-center px-2 border-t-2 mt-2 py-2 border-dashed'>
                <div>
                    <h1>
                    {book.category}
                    </h1>
                </div>
                <div className='flex items-center gap-5 '>
                    <h1 className='font-semibold'>{book.rating} </h1>
                    <FaRegStar className='text-red-500 text-lg' />

                </div>
            </div>
        </div>
    )
}

export default Book
