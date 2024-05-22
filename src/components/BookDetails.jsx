import React, { useEffect } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

function BookDetails() {
    const id = useParams() 
    
    const books = useLoaderData()
 
    
   const bookRead = books.books.find(book =>(id.id)==parseInt(book.bookId))
    console.log(bookRead.image)
    return (
        <div className='grid gap-2 py-4 md:grid-cols-2 px-2 border-2'>
            <div className=''>
                <img className='max-w-full rounded-xl' src={'.'+bookRead.image} alt="" />
            </div>
            <div className='flex px-4 py-4  flex-col gap-6 border-2 rounded-xl'>
                <div>
                    <h1 className='text-2xl font-semibold'>{bookRead.bookName}</h1>
                    
                </div>
                <div className=' py-2'>
                    By : {bookRead.author}
                </div>
                <div className='border-b-2 border-t-2 py-2 '>
                    {bookRead.category}
                </div>
                <div className='text-justify '>
                    {bookRead.review}
                </div>
                <div className='flex gap-4 font-semibold border-b-2 py-4 '>
                    {bookRead.tags.map(tag=><><div class="badge badge-primary badge-outline py-3">{tag}</div></>)}
                </div>
                <div className='border-2 flex gap-12 items-center'>
                    <h1 className='text-sm font-semibold'>Number of Pages: </h1> <span className='text-sm font-semibold'>{bookRead.totalPages}</span>
                </div>
                <div className=' border-2 flex gap-12 items-center'>
                    <h1 className='text-sm font-semibold'>Publisher: </h1><span className='text-sm font-semibold'>{bookRead.publisher}</span>
                </div>
                <div className='flex gap-12 '>
                    <h1 className='text-sm font-semibold'>Year of Publishing: </h1> <span className='text-sm font-semibold'>{bookRead.yearOfPublishing}</span>
                </div>
                <div className=' flex gap-32'>
                    <h1 className='text-sm font-semibold'>Rating:</h1> <span className='text-sm font-semibold'>{bookRead.rating}</span>
                </div>
                <div className='flex gap-10'>
                    <button className='btn btn-primary min-w-24 font-bold'>Read</button>
                    <button className='btn btn-primary min-w-24 font-bold'>WishList</button>
                </div>
            </div>
        </div>
    )
}

export default BookDetails
